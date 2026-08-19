import {NextResponse} from "next/server";
import {MAIL_FROM, MAIL_TO, getTransport} from "@/lib/mailer";

export const runtime = "nodejs";

/**
 * Limit w pamieci procesu. Nie jest wspoldzielony miedzy instancjami,
 * wiec nie jest twarda ochrona — wystarcza jednak, zeby pojedynczy bot
 * nie wyslal setek zgloszen w minute. Twardy limit stoi po stronie SMTP.
 */
const hits = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export async function POST(request: Request) {
  const form = await request.formData();

  // Honeypot — pole ukryte w CSS, czlowiek go nie wypelni
  if (String(form.get("company") ?? "").trim()) {
    return NextResponse.json({ok: true});
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !isEmail(email) || message.length < 10) {
    return NextResponse.json({error: "invalid"}, {status: 400});
  }
  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({error: "too_long"}, {status: 400});
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({error: "rate_limited"}, {status: 429});
  }

  const transport = getTransport();
  if (!transport || !MAIL_FROM || !MAIL_TO) {
    console.error("SMTP nie jest skonfigurowany — brak zmiennych srodowiskowych");
    return NextResponse.json({error: "unconfigured"}, {status: 500});
  }

  try {
    await transport.sendMail({
      from: MAIL_FROM,          // adres domeny, zeby DKIM sie zgadzal
      to: MAIL_TO,
      replyTo: `${name} <${email}>`,   // odpowiedz idzie prosto do goscia
      subject: `Henvendelse fra ${name} — limes-interior.no`,
      text: `${message}\n\n—\n${name}\n${email}`,
    });
  } catch (err) {
    console.error("Wysylka nie powiodla sie:", err);
    return NextResponse.json({error: "send_failed"}, {status: 502});
  }

  return NextResponse.json({ok: true});
}

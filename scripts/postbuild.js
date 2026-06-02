// react-snap requires local Chromium; skip on Vercel (Puppeteer fails in CI).
if (process.env.VERCEL) {
  console.log("Skipping react-snap on Vercel (use public/ai/*.md and llms.txt for LLM crawlers).");
  process.exit(0);
}

require("child_process").execSync("react-snap", { stdio: "inherit" });

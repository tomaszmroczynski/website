import createMiddleware from "next-intl/middleware";
import {routing} from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  /**
   * Alt unntatt API, Next-interne ruter og filer med endelse.
   * [.] i stedet for \. med vilje — punktum i tegnklasse trenger ingen
   * escaping, og unngår at et tapt backslash stilltiende endrer regexen.
   */
  matcher: "/((?!api|_next|_vercel|.*[.].*).*)",
};

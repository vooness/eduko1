import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const token = url.searchParams.get("token");

  // Tady si nastavíte svůj "tajný" token natvrdo do kódu:
  const validToken = "special123";

  // Podmínka: Jestliže už user jde na /access-denied, tak ho tam necháme
  if (url.pathname.startsWith("/access-denied")) {
    return NextResponse.next();
  }

  // Zkontrolujeme token v query parametru
  if (token === validToken) {
    // Token sedí => pustíme ho dál
    return NextResponse.next();
  }

  // Není token nebo je špatný => redirect na chybovou stránku
  return NextResponse.redirect(new URL("/access-denied", req.url));
}

// Nastavení, že middleware kontroluje všechny cesty mimo statické soubory:
export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};

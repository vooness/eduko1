import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const token = url.searchParams.get("token"); // Získáme token z URL

  // Definujte platný token
  const validToken = "secureToken123";

  // Kontrola tokenu
  if (token === validToken) {
    return NextResponse.next(); // Přístup povolen
  }

  // Pokud token není platný nebo chybí, přesměrování na chybovou stránku
  return NextResponse.redirect(new URL("/access-denied", req.url));
}

// Určení cest, na které se middleware vztahuje
export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"], // Middleware se aplikuje na všechny stránky kromě API a statických souborů
};

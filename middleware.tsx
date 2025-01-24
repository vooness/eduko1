import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const token = url.searchParams.get("token");

  const validToken = "special123";

  // Pokud už je uživatel na /pristup-odepren (česky),
  // tak ho nepřesměrujeme znovu
  if (url.pathname.startsWith("/pristup-odepren")) {
    return NextResponse.next();
  }

  if (token === validToken) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/pristup-odepren", req.url));
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};

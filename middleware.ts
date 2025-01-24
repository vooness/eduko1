import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl; // Získáme URL požadavku
  const token = url.searchParams.get("token"); // Získáme token z URL

  const validToken = "secureToken123"; // Předdefinovaný platný token

  // Pokud token odpovídá platnému tokenu, povolíme přístup
  if (token === validToken) {
    return NextResponse.next();
  }

  // Pokud token není platný nebo chybí, zamítneme přístup
  return new NextResponse(
    `<html>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <h1>Přístup zamítnut</h1>
        <p>Pro přístup použijte odkaz nebo QR kód z FlexiBooku.</p>
      </body>
    </html>`,
    {
      status: 403, // HTTP stavový kód "403 Forbidden"
      headers: {
        "Content-Type": "text/html", // Obsah odpovědi je HTML
      },
    }
  );
}

// Určení cest, na které se middleware vztahuje
export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"], // Middleware se aplikuje na všechny stránky kromě API a statických souborů
};

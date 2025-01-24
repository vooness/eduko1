import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer"); // Získáme referer z hlaviček požadavku
  const allowedReferer = "flexibook.com"; // Povolená doména (FlexiBook)

  // Povolený přístup: referer obsahuje doménu FlexiBook
  if (referer && referer.includes(allowedReferer)) {
    return NextResponse.next();
  }

  // Zamítnutý přístup: referer neodpovídá nebo chybí
  return new NextResponse(
    `<html>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <h1>Přístup zamítnut</h1>
        <p>Stránky jsou přístupné pouze prostřednictvím odkazu ve FlexiBooku.</p>
      </body>
    </html>`,
    {
      status: 403, // Stavový kód "403 Forbidden"
      headers: { "Content-Type": "text/html" },
    }
  );
}

// Určení cest, na které se middleware vztahuje
export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"], // Middleware se použije na všechny stránky kromě API, _next, a favicon
};

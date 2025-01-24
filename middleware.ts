import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer"); // Získáme referer z hlaviček požadavku
  const allowedReferer = "flexibook.com"; // Povolená doména (FlexiBook)

  // Debugging: Zobrazíme referer v konzoli pro ladění
  console.log("Referer received:", referer);

  // Povolení přístupu, pokud referer obsahuje povolenou doménu
  if (referer && referer.includes(allowedReferer)) {
    console.log("Access allowed."); // Debug: Přístup povolen
    return NextResponse.next();
  }

  // Debug: Přístup zamítnut
  console.log("Access denied. Invalid referer:", referer);

  // Pokud referer neodpovídá, vrátíme zamítnutí přístupu
  return new NextResponse(
    `<html>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <h1>Přístup zamítnut</h1>
        <p>Stránky jsou přístupné pouze prostřednictvím odkazu ve FlexiBooku.</p>
      </body>
    </html>`,
    {
      status: 403, // Stavový kód "403 Forbidden"
      headers: {
        "Content-Type": "text/html", // Odpověď je ve formátu HTML
        "Cache-Control": "no-store", // Zabránění cachování
      },
    }
  );
}

// Určení cest, na které se middleware vztahuje
export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"], // Middleware se použije na všechny stránky kromě API a statických souborů
};

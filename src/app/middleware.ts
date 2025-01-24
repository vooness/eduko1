import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer");
  const allowedReferer = "flexibook.com"; // Změňte na skutečnou doménu

  if (referer && referer.includes(allowedReferer)) {
    return NextResponse.next(); // Pokračujeme, pokud referer odpovídá
  }

  // Pokud referer neodpovídá, vrátíme jednoduchou HTML zprávu
  return new NextResponse(
    `<html>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <h1>Stránky jsou přístupné pouze přes FlexiBook</h1>
        <p>Prosím, použijte odkaz nebo QR kód ve FlexiBooku k přístupu na tuto stránku.</p>
      </body>
    </html>`,
    {
      status: 403,
      headers: { "Content-Type": "text/html" },
    }
  );
}

// Omezíme middleware pouze na určité cesty
export const config = {
  matcher: ["/InteraktivniCviceni/:path*"], // Middleware se použije pouze na tyto cesty
};

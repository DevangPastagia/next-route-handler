import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = await headers();

  // Get cookies - first method
  const theme = request.cookies.get("theme");

  // Get cookies - second method
  const cookie = await cookies();
  cookie.set("page", "3");

  console.log("Request Headers:", requestHeaders.get("Authorization"));
  console.log("Header List:", headerList.get("Authorization"));
  console.log("Theme Cookie:", theme);
  console.log("Cookie:", cookie.get("page"));

  return new Response("<h1>Hello from the profile API</h1>", {
    headers: {
      "Content-Type": "text/html",
      "set-Cookie": "theme=dark",
    },
  });
}

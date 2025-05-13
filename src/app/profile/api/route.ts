import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = await headers();
  console.log("Request Headers:", requestHeaders.get("Authorization"));
  console.log("Header List:", headerList.get("Authorization"));

  return new Response("<h1>Hello from the profile API</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}

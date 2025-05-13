import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const theme = request.cookies.get("theme");
  if (!theme) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "my-custom-value");

  return response;
}

export const config = {
  matcher: ["/profile"],
};

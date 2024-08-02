import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
  });
  if (token !== null) {
    if (request.url.includes("/admin")) {
      if (token.role === "admin") return NextResponse.next();
      else return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: ["/dashboard", "/api/add_note", "/admin"],
};

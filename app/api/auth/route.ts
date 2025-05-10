export const runtime = 'edge';
import { NextResponse } from "next/server";
import { serialize } from "cookie";
export async function POST() {
    const cookie = serialize("auth", "true", { path: "/", httpOnly: true });
    return NextResponse.json(
      { message: "Access granted" },
      {
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
}
//hello

export const runtime = 'edge';
import { NextResponse } from "next/server";
export async function POST() {
    return NextResponse.json(
      { message: "Access granted" },
    );
}
//hello111111

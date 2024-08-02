import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";


export async function POST(req: Request, res: Response) {
  try {
    console.log(req)
    const session = await getServerSession()
    console.log(session,"pe");
    const data: string = "get data success";
    return NextResponse.json({ message: "oke", data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "error", error }, { status: 304 });
  }
}

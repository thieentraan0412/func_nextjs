import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const data: string = "get data success";
    return NextResponse.json({ message: "oke", data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "error", error }, { status: 304 });
  }
}

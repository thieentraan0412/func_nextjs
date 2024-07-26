import User from "@/models/User";
import connect from "@/untils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password } = await request.json();
  await connect();
  const existingUser = await User.findOne({ email: email });
  if (existingUser)
    return new NextResponse("User already exists", { status: 400 });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
    console.log(user);
  try {
    await user.save();
    return new NextResponse("user registered", { status: 200 });

  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};

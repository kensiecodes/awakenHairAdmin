import mongoose from "mongoose";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";
import { mongooseConnect } from "@/lib/mongoose";

export async function POST(request) {
  const { title, description, price } = await request.json();
  await mongooseConnect();
  await Product.create({ title, description, price });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

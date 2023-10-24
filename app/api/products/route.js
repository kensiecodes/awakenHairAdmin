import Product from "@/models/Product";
import { NextResponse } from "next/server";
import mongooseConnect from "@/lib/mongoose";

export async function POST(request) {
  const { title, description, price } = await request.json();
  await mongooseConnect();
  await Product.create({ title, description, price });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
  await mongooseConnect();
  const products = await Product.find();
  return NextResponse.json({ products });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  console.log(`id at delete: ${id}`);
  await mongooseConnect();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}

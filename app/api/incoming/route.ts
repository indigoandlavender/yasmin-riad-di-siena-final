import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("INCOMING MESSAGE:", body);

  // TEMP: fixed alpha reply
  const reply = {
    to: body.from,
    text: "Hi 🌿 This is Yasmin. I’m here and listening."
  };

  console.log("YASMIN REPLY:", reply);

  return NextResponse.json({
    status: "ok",
    reply
  });
}

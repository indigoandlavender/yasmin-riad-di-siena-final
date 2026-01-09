import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = "yasmin-alpha";

export async function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get("hub.mode");
  const token = req.nextUrl.searchParams.get("hub.verify_token");
  const challenge = req.nextUrl.searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

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

export const dynamic = "force-dynamic";
import { EventPostProps } from "@/app/Models";
import { prisma } from "../../../../prisma/client";

import { NextRequest } from "next/server";

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      take: 20,
    });
    return Response.json(events, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function POST(request: NextRequest) {
  const event: EventPostProps = await request.json();

  if (event.title && event.authorName && event.content && event.eventDate) {
    try {
      const { id } = await prisma.event.create({
        data: {
          ...event,
        },
      });
      return Response.json(id, { status: 201 });
    } catch (error) {
      console.error({ error });
    }
  }

  return Response.json({ error: "Objeto não corresponde" }, { status: 400 });
}

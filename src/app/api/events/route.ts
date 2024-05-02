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

  if (!event?.categories) {
    return Response.json("Obrigatorio escolher pelo menos uma categoria", {
      status: 400,
    });
  }

  if (event.title && event.authorName && event.content) {
    try {
      const newEvent = await prisma.event.create({
        data: {
          ...event,
          categories: {
            create: event.categories,
          },
        },
      });

      return Response.json({ id: newEvent.id }, { status: 201 });
    } catch (error) {
      console.error({ error });
    }
  }

  return Response.json({ error: "Objeto não corresponde" }, { status: 400 });
}

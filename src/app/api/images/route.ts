import { prisma } from "../../../../prisma/client";
import handler from "@/app/utils/images";
import { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;

  try {
    /* const image = await handler(request); */

    /* const res = await usePrisma.event.update({
      where: { id: id },
      data: { image },
    }); */
    return Response.json(id, { status: 201 });
  } catch (error) {
    console.error({ error });
  }
  return Response.json({ error: "Objeto não corresponde" }, { status: 400 });
}

import { prisma } from "../../../../prisma/client";
import handler from "@/app/utils/images";
import { NextApiRequest } from "next";

export async function POST(
  request: NextApiRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;

  try {
    const image = await handler(request);
    console.log("", image);
    /* const res = await usePrisma.event.update({
      where: { id: id },
      data: { image },
    }); */
    return Response.json(image, { status: 201 });
  } catch (error) {
    console.error({ error });
  }
  return Response.json({ error: "Objeto não corresponde" }, { status: 400 });
}

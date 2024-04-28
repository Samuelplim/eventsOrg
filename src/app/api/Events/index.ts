import { usePrisma } from "../../../../prisma/client";
import { EventProps } from "./Models";

export async function indexEvents() {
  try {
    const events = await usePrisma.event.findMany({
      take: 20,
    });
    return events;
  } catch (error) {
    console.error(error);
  }
}

export async function creatEvent({
  title,
  authorName,
  content,
  published,
  eventDate,
}: EventProps) {
  try {
    const { id } = await usePrisma.event.create({
      data: {
        title,
        authorName,
        content,
        published,
        eventDate,
      },
    });
    return { id };
  } catch (error) {
    console.error({ error });
  }
}

export async function saveImage(id: number, image: string) {
  try {
    const res = await usePrisma.event.update({
      where: { id: id },
      data: { image },
    });
    return res;
  } catch (error) {
    console.error({ error });
  }
}

import { usePrisma } from "../../../prisma/client";
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
}: EventProps) {
  await usePrisma.event.create({
    data: {
      title,
      authorName,
      content,
      published,
    },
  });
}

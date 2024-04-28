export interface EventProps {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string | null;
  published: boolean;
  authorName: string;
  eventDate: Date;
  image: string | null;
}

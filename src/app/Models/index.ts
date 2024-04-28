export interface EventProps {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string | null;
  published: boolean;
  authorName: string;
  eventDate: string;
  image: string | null;
}

export interface EventPostProps {
  title: string;
  authorName: string;
  content: string;
  published: boolean;
  eventDate: string;
}

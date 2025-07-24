export interface Blog {
  objectId: string;
  title: string;
  description: string;
  content: string;
  category: string;
  thumbnail: string;
  created: number;
  updated: number | null;
  ownerId: string | null;
  ___class: string;
}

export type PostResponse = {
  id: number;
  id_author: number;
  id_category: number;
  status: number;
  title: string;
  description: string;
  image: string;
  slug: string;
};

export type PostCreateBody = {
  title: string;
  description: string;
  id_category: string;
  slug: string;
  image?: File;
};

export type PostResponse = {
  isAdmin: boolean;
  posts: Post[];
};

export type Post = {
  id: number;
  id_author: number;
  status: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  category: {
    id: number;
    name: string;
  };
};

export type PostCreateBody = {
  title: string;
  description: string;
  id_category: string;
  slug: string;
  image?: File;
};

export type ResetFields = {
  title: string;
};

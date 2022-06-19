export type AllCategories = {
  id: number;
  name: string;
  slug: string;
};

export type CreateCategoriesBody = {
  name: string;
  slug: string;
};

export type ResetCategoiesFields = {
  name: string;
};

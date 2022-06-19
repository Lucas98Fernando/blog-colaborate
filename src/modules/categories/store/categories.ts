import { defineStore } from "pinia";
import { AllCategories, CreateCategoriesBody } from "../types/categories";
import categoriesServices from "../services/categories";

export const useCategoryStore = defineStore("categories", {
  state: () => ({
    categories_all: <AllCategories[]>[],
  }),
  actions: {
    async ActionGetAllCategories() {
      const data = await categoriesServices.allCategories();
      this.categories_all = data;
      return data;
    },

    async ActionCreateCategory(body: CreateCategoriesBody) {
      return categoriesServices.createCategory(body);
    },

    async ActionEditCategory(body: CreateCategoriesBody, idCategory: number) {
      return categoriesServices.editCategory(body, idCategory);
    },

    async ActionDeleteCategory(idCategory: number) {
      return categoriesServices.deleteCategory(idCategory);
    },
  },
});

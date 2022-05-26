import { defineStore } from "pinia";
import { AllCategories } from "../types/categories";
import categoriesServices from "../services/categories";

export const useCategoryStore = defineStore("categories", {
  state: () => ({
    categories_all: <AllCategories[]>[],
  }),
  actions: {
    async ActionGetAllCategories() {
      const data = await categoriesServices.allCategories();
      this.categories_all = data;
    },
  },
});

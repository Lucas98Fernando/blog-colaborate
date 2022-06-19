import eventBus from "@/helpers/eventBus";
import { api } from "@/http/api";
import { AxiosResponse } from "axios";
import { AllCategories, CreateCategoriesBody } from "../types/categories";

class CategoriesServices {
  async allCategories() {
    const { data }: AxiosResponse<AllCategories[]> = await api(
      "/category/get-all"
    );
    return data;
  }

  async createCategory(body: CreateCategoriesBody): Promise<void> {
    const { data, status }: AxiosResponse = await api.post(
      "/category/create",
      body
    );
    if (status === 201) {
      eventBus.emit("show-base-dialog", {
        title: "Categoria criada",
        type: "success",
        message: data.message,
      });
      eventBus.emit("fetch-categories");
    }
  }

  async editCategory(
    body: CreateCategoriesBody,
    idCategory: number
  ): Promise<void> {
    const { data, status }: AxiosResponse = await api.put(
      `/category/update/${idCategory}`,
      body
    );
    if (status === 200) {
      eventBus.emit("show-base-dialog", {
        title: "Categoria atualizada",
        type: "success",
        message: data.message,
      });
      eventBus.emit("fetch-categories");
    }
  }

  async deleteCategory(idCategory: number): Promise<void> {
    const { status }: AxiosResponse = await api.delete(
      `/category/delete/${idCategory}`
    );
    if (status === 200) {
      eventBus.emit("show-base-dialog", {
        title: "Categoria excluída",
        type: "success",
        message: "Categoria excluída com sucesso!",
      });
      eventBus.emit("fetch-categories");
    }
  }
}

export default new CategoriesServices();

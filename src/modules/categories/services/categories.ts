import { api } from "@/http/api";
import { AxiosResponse } from "axios";
import { AllCategories } from "../types/categories";

class CategoriesServices {
  public async allCategories() {
    const { data }: AxiosResponse<AllCategories[]> = await api(
      "/category/get-all"
    );
    return data;
  }
}

export default new CategoriesServices();

import { LoginResponse } from "@/modules/auth/types/auth";

class Storage {
  localUserData(): LoginResponse {
    return JSON.parse(String(localStorage.getItem("userInfo"))) || "";
  }

  getLocalAccessToken(): string | null {
    return this.localUserData().token;
  }

  getLocalName(): string | null {
    return this.localUserData().user.name;
  }

  setUserLocalStorage(payload: LoginResponse): void {
    localStorage.setItem("userInfo", JSON.stringify(payload));
  }

  isAdmin(): boolean {
    return this.localUserData().user.id_user_type === 1;
  }

  removeAllLocalStorage(): void {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("menu");
  }
}

export default new Storage();

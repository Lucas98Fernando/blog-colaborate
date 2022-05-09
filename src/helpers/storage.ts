class Storage {
  private token = "access_token";
  private menu = "menu";

  getLocalAccessToken(): string | null {
    return localStorage.getItem(this.token);
  }
  setLocalAccessToken(payload: string): void {
    localStorage.setItem(this.token, JSON.stringify(payload));
  }
  removeAllLocalStorage(): void {
    localStorage.removeItem(this.token);
    localStorage.removeItem(this.menu);
  }
}

export default new Storage();

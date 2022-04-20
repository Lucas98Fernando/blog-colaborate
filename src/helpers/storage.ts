class Storage {
  private token = "access_token";

  getLocalAccessToken(): string | null {
    return localStorage.getItem(this.token);
  }
  setLocalAccessToken(payload: string): void {
    localStorage.setItem(this.token, payload);
  }
  removeLocalAccessToken(): void {
    localStorage.removeItem(this.token);
  }
}

export default new Storage();

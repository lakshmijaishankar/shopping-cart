class CustomApiError extends Error {
  public status?: number;
  public statusText?: string;
  constructor(message?: string, status?: number, statusText?: string) {
    super(message);
    this.status = status;
    this.statusText = statusText;
  }
}
export default CustomApiError;

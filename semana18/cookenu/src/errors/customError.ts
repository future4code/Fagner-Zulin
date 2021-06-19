export default class CustomError extends Error {
  constructor(message: string, readonly code: number = 400) {
    super(message);
  }
}

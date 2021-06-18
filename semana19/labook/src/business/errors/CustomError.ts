export default class CustomError extends Error {
  constructor(public message: string, public statusCode: number = 400) {
    super(message);
  }
}

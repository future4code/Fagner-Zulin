import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/user";
import CustomError from "../business/errors/CustomError";

export class TokenService {
  generateToken(payload: AuthenticationData): string {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  getTokenData(token: string | undefined): AuthenticationData {
    const validatedToken = this.validateToken(token);
    const result: any = jwt.verify(
      validatedToken,
      process.env.JWT_KEY as string
    );

    return { id: result.id };
  }

  private validateToken(token: string | undefined): string {
    if (!token) {
      throw new CustomError("Token (authorization) is required");
    }
    return token;
  }
}

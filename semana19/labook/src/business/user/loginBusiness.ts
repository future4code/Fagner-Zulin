import { UserData, UserInputDTO } from "../../model/user";
import { BaseUserBusiness } from "./BaseUserBusiness";
import CustomError from "../errors/CustomError";

export class LoginBusiness extends BaseUserBusiness {
  public async login(data: Omit<UserInputDTO, "name">): Promise<string> {
    const { email, password } = this.hasLoginFields(data);

    const result = await this.userDB.selectUserByEmail(email);

    this.validateCredencials(result);

    const passwordIsCorrect: boolean = this.hashService.compare(
      password,
      result.password
    );

    this.validateCredencials(passwordIsCorrect);

    return this.tokenService.generateToken({ id: result.id });
  }

  private hasLoginFields({
    email,
    password,
  }: Omit<UserInputDTO, "name">): Omit<UserData, "name"> {
    if (!email || !password) {
      throw new CustomError('"email" and "password" must be provided');
    }

    return { email, password };
  }

  private validateCredencials(value: any): void {
    if (!value) {
      throw new CustomError("Invalid credentials", 401);
    }
  }
}

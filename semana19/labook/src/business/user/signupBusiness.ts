import { UserInputDTO, userData, user } from "../../model/user";
import { BaseUserBusiness } from "./BaseUserBusiness";
import CustomError from "../errors/CustomError";

export class SignupBusiness extends BaseUserBusiness {
  public async signup(data: UserInputDTO): Promise<string> {
    const userData = this.validateInputData(data);
    const id = this.idService();

    const user: user = {
      id,
      password: this.hashService.hash(userData.password),
      name: userData.name,
      email: userData.email,
    };

    await this.userDB.insertUser(user);

    return this.tokenService.generateToken({ id });
  }

  private validateInputData(data: UserInputDTO): userData {
    const fields = this.hasSignupFields(data);
    const email = this.validateEmail(fields.email);
    const password = this.validatePassword(fields.password);

    return { email, password, name: fields.name };
  }

  private hasSignupFields({ email, name, password }: UserInputDTO): userData {
    if (!name || !email || !password) {
      throw new CustomError('"name", "email" and "password" must be provided');
    }
    return {
      email,
      name,
      password,
    };
  }

  private validateEmail(email: string): string {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      throw new CustomError("The email is not valid");
    }

    return email;
  }

  private validatePassword(password: string): string {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      throw new CustomError(
        "The password must have at least six characters, at least one letter, one number and one special character"
      );
    }

    return password;
  }
}

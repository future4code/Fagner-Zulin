import { user } from "../model/user";
import { DBConnection } from "./DBConnection";

export class UserDB extends DBConnection {
  private table: string = "labook_users";

  public async insertUser(user: user): Promise<void> {
    try {
      await DBConnection.knexConnection(this.table).insert(user);
    } catch (error) {
      this.error(error);
    }
  }

  public async selectUserByEmail(email: string): Promise<any> {
    try {
      const [result] = await DBConnection.knexConnection(this.table)
        .select()
        .where({ email });

      return result;
    } catch (error) {
      this.error(error);
    }
  }
}

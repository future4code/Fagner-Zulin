import { User } from "../model/user";
import { DBConnection } from "./DBConnection";

export class UserDB extends DBConnection {
  private userTable: string = "labook_users";
  private friendTable: string = "labook_friends";

  public async insertUser(user: User): Promise<void> {
    try {
      await DBConnection.knexConnection(this.userTable).insert(user);
    } catch (error) {
      this.error(error);
    }
  }

  public async selectUserByEmail(email: string): Promise<any> {
    try {
      const [result] = await DBConnection.knexConnection(this.userTable)
        .select()
        .where({ email });

      return result;
    } catch (error) {
      this.error(error);
    }
  }

  public async insertFriend(userId: string, friendId: string): Promise<void> {
    try {
      await DBConnection.knexConnection(this.friendTable).insert({
        user_id: userId,
        friend_id: friendId,
      });
      await DBConnection.knexConnection(this.friendTable).insert({
        user_id: friendId,
        friend_id: userId,
      });
    } catch (error) {
      this.error(error);
    }
  }
}

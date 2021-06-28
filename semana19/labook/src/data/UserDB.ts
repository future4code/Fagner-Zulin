import { Friendship, User } from "../model/user";
import { DBConnection } from "./DBConnection";

export class UserDB extends DBConnection {
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

  public async insertFriend({ userId, friendId }: Friendship): Promise<void> {
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

  public async selectFriendById({
    userId,
    friendId,
  }: Friendship): Promise<any> {
    try {
      const [result] = await DBConnection.knexConnection(this.friendTable)
        .select()
        .where({ user_id: userId })
        .andWhere({ friend_id: friendId });

      return result;
    } catch (error) {
      this.error(error);
    }
  }

  public async deleteFriend({ friendId, userId }: Friendship): Promise<void> {
    try {
      await DBConnection.knexConnection(this.friendTable)
        .delete()
        .where({ user_id: userId })
        .andWhere({ friend_id: friendId });

      await DBConnection.knexConnection(this.friendTable)
        .delete()
        .where({ user_id: friendId })
        .andWhere({ friend_id: userId });
    } catch (error) {
      this.error(error);
    }
  }
}

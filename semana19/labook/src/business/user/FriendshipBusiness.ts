import { Friendship } from "../../model/user";
import { BaseUserBusiness } from "./BaseUserBusiness";
import CustomError from "../errors/CustomError";

export class FriendshipBusiness extends BaseUserBusiness {
  public async makeFriendship(id: string, token: string | undefined) {
    const tokendata = this.tokenService.getTokenData(token);

    const data: Friendship = {
      friendId: id,
      userId: tokendata.id,
    };

    const result = await this.userDB.selectFriendById(data);

    if (result) {
      throw new CustomError("Friendship already exists", 403);
    }

    await this.userDB.insertFriend(data);
  }

  public async undoFriendship(id: string, token: string | undefined) {
    const tokendata = this.tokenService.getTokenData(token);

    const data: Friendship = {
      friendId: id,
      userId: tokendata.id,
    };

    const result = await this.userDB.selectFriendById(data);

    if (!result) {
      throw new CustomError("Friendship doesn't exists", 403);
    }

    await this.userDB.deleteFriend(data);
  }
}

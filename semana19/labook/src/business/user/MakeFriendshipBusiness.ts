import { BaseUserBusiness } from "./BaseUserBusiness";

export class MakeFriendshipBusiness extends BaseUserBusiness {
  public async makeFriendship(id: string, token: string | undefined) {
    const tokendata = this.tokenService.getTokenData(token);
    await this.userDB.insertFriend(tokendata.id, id);
  }
}

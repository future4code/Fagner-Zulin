import BasePostBusiness from "./BasePostBusiness";
import CustomError from "../errors/CustomError";

export class LikesBusiness extends BasePostBusiness {
  public async like(postId: string, token: string | undefined) {
    const { id: userId } = this.tokenService.getTokenData(token);
    await this.hasPost(postId);

    await this.hasLike(userId, postId);

    await this.postDB.insertLike(userId, postId);
  }

  private async hasPost(postId: string): Promise<void> {
    const result = await this.postDB.selectPostById(postId);
    if (!result) {
      throw new CustomError("Post not Found", 404);
    }
  }

  private async hasLike(userId: string, postId: string): Promise<void> {
    const result = await this.postDB.selectLike(userId, postId);
    if (result) {
      throw new CustomError("Post already liked", 403);
    }
  }
}

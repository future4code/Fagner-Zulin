import BasePostBusiness from "./BasePostBusiness";
import CustomError from "../errors/CustomError";
import { PostComment } from "../../model/post";

export class CommentBusiness extends BasePostBusiness {
  public async comment(postId: string, body: any, token: string | undefined) {
    const { id: creatorId } = this.tokenService.getTokenData(token);
    await this.hasPost(postId);
    const comment = this.hasComment(body);

    const commentData: PostComment = {
      comment,
      creatorId,
      id: this.generateId(),
      postId,
    };

    await this.postDB.insertComment(commentData);
  }

  private hasComment(body: any): string {
    if (!body.comment) {
      throw new CustomError("The comment field is required");
    }

    return body.comment;
  }
}

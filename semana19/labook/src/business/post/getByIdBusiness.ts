import BasePostBusiness from "./BasePostBusiness";
import CustomError from "../errors/CustomError";
import { POST_TYPES, Post } from "../../model/post";

export class GetByIdBusiness extends BasePostBusiness {
  public async getById(id: string): Promise<Post> {
    const result = await this.postDB.selectPostById(id);
    this.hasResult(result);

    return this.parsePost(result);
  }

  private hasResult(result: any) {
    if (!result) {
      throw new CustomError("Post not found", 404);
    }
  }

  private parsePost(data: any): Post {
    return {
      createdAt: data.created_at,
      authorId: data.author_id,
      description: data.description,
      id: data.id,
      photo: data.photo,
      type: POST_TYPES[data.type as POST_TYPES],
    };
  }
}

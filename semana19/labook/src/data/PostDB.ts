import { Post } from "../model/post";
import { DBConnection } from "./DBConnection";

export class PostDB extends DBConnection {
  private table: string = "labook_posts";

  public async insertPost(post: Post): Promise<void> {
    try {
      await DBConnection.knexConnection(this.table).insert({
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: post.type,
        author_id: post.authorId,
      });
    } catch (error) {
      this.error(error);
    }
  }

  public async selectPostById(id: string): Promise<any> {
    try {
      const [result] = await DBConnection.knexConnection(this.table)
        .select()
        .where({ id });

      return result;
    } catch (error) {
      this.error(error);
    }
  }
}

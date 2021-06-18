import { Post } from "../model/post";
import { DBConnection } from "./DBConnection";

export class PostDB extends DBConnection {
  public async insertPost(post: Post): Promise<void> {
    try {
      await DBConnection.knexConnection(this.postTable).insert({
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
      const [result] = await DBConnection.knexConnection(this.postTable)
        .select()
        .where({ id });

      return result;
    } catch (error) {
      this.error(error);
    }
  }

  public async getFeed(userId: string) {
    try {
      const result = await DBConnection.knexConnection(this.postTable)
        .select(
          "id",
          "photo",
          "description",
          "type",
          "author_id as authorId",
          "created_at as createdAt"
        )
        .join(this.friendTable, "friend_id", "author_id")
        .where("user_id", userId)
        .orderBy("created_at", "desc");

      return result;
    } catch (error) {
      this.error(error);
    }
  }
}

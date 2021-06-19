import { Post, PostComment, POST_TYPES } from "../model/post";
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

  public async getFeedByType(type: POST_TYPES): Promise<any> {
    try {
      const result = await DBConnection.knexConnection(this.postTable)
        .select()
        .where({ type })
        .orderBy("created_at", "desc");

      return result;
    } catch (error) {
      this.error(error);
    }
  }

  public async insertLike(userId: string, postId: string): Promise<void> {
    try {
      await DBConnection.knexConnection(this.likesTable).insert({
        user_id: userId,
        post_id: postId,
      });
    } catch (error) {
      this.error(error);
    }
  }

  public async selectLike(userId: string, postId: string): Promise<any> {
    try {
      const [result] = await DBConnection.knexConnection(this.likesTable)
        .select()
        .where({
          user_id: userId,
          post_id: postId,
        });

      return result;
    } catch (error) {
      this.error(error);
    }
  }

  public async unlike(userId: string, postId: string): Promise<void> {
    try {
      await DBConnection.knexConnection(this.likesTable).delete().where({
        user_id: userId,
        post_id: postId,
      });
    } catch (error) {
      this.error(error);
    }
  }

  public async insertComment({
    id,
    comment,
    postId: post_id,
    creatorId: creator_id,
  }: PostComment): Promise<void> {
    try {
      await DBConnection.knexConnection(this.commentsTable).insert({
        id,
        comment,
        post_id,
        creator_id,
      });
    } catch (error) {
      this.error(error);
    }
  }
}

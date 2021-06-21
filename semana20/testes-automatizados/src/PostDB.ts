import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export interface Post {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  createdAt?: Date;
  authorId: string;
}

export enum POST_TYPES {
  NORMAL = "NORMAL",
  EVENT = "EVENT",
}

export class DBConnection {
  protected static knexConnection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true,
    },
  });

  protected postTable: string = "labook_posts";
  protected userTable: string = "labook_users";
  protected friendTable: string = "labook_friends";
  protected likesTable: string = "labook_likes";
  protected commentsTable: string = "labook_comments";

  public static async close() {
    await DBConnection.knexConnection.destroy();
  }
}

export class PostDB extends DBConnection {
  public async deletePost(id: string): Promise<void> {
    await DBConnection.knexConnection(this.postTable).delete().where({
      id,
    });
  }

  public async insertPost(post: Post): Promise<void> {
    await DBConnection.knexConnection(this.postTable).insert({
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      author_id: post.authorId,
    });
  }

  public async selectPostById(id: string): Promise<any> {
    const [result] = await DBConnection.knexConnection(this.postTable)
      .select()
      .where({ id });

    return {
      id: result.id,
      photo: result.photo,
      description: result.description,
      type: result.type,
    };
  }
}

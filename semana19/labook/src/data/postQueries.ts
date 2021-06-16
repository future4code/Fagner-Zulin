import { post } from "../model/post";
import { DBConnection } from "./DBConnection";

export class PostDB extends DBConnection {
  private table: string = "labook_posts";

  public async insertPost(post: post): Promise<void> {
    try {
      await this.knexConnection(this.table).insert(post);
    } catch (error) {
      this.error(error);
    }
  }

  public async selectPostById(id: string): Promise<any> {
    try {
      const [result] = await this.knexConnection(this.table)
        .select()
        .where({ id });

      return result;
    } catch (error) {
      this.error(error);
    }
  }
}

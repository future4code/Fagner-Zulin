import { PostDB } from "../../data/PostDB";
import { TokenService } from "../../services/tokenService";
import { generateId } from "../../services/idService";
import CustomError from "../errors/CustomError";

export default class BasePostBusiness {
  protected postDB: PostDB = new PostDB();
  protected tokenService: TokenService = new TokenService();
  protected generateId = generateId;

  protected async hasPost(postId: string): Promise<any> {
    const result = await this.postDB.selectPostById(postId);
    if (!result) {
      throw new CustomError("Post not Found", 404);
    }

    return result;
  }
}

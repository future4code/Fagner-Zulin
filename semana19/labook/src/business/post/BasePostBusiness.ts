import { PostDB } from "../../data/PostDB";
import { TokenService } from "../../services/tokenService";
import { generateId } from "../../services/idService";

export default class BasePostBusiness {
  protected postDB: PostDB = new PostDB();
  protected tokenService: TokenService = new TokenService();
  protected generateId = generateId;
}

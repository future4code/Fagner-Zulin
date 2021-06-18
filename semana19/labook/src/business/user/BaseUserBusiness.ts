import { UserDB } from "../../data/UserDB";
import { HashService } from "../../services/hashService";
import { TokenService } from "../../services/tokenService";
import { generateId } from "../../services/idService";

export class BaseUserBusiness {
  protected userDB: UserDB = new UserDB();
  protected hashService: HashService = new HashService();
  protected tokenService: TokenService = new TokenService();
  protected idService = generateId;
}

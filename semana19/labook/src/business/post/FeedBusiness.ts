import BasePostBusiness from "./BasePostBusiness";
import { POST_TYPES } from "../../model/post";
import CustomError from "../errors/CustomError";

export class FeedBusiness extends BasePostBusiness {
  public async feed(token: string | undefined) {
    const { id } = this.tokenService.getTokenData(token);

    const feed = await this.postDB.getFeed(id);

    return feed;
  }

  public async feedByType(query: any, token: string | undefined) {
    this.tokenService.getTokenData(token);

    const type = this.validateQuery(query);

    const feed = await this.postDB.getFeedByType(type);

    return feed;
  }

  private validateQuery(query: any): POST_TYPES {
    if (!(query in POST_TYPES)) {
      throw new CustomError('Type invalid! Must be "EVENT" or "NORMAL"');
    }

    return POST_TYPES[query as POST_TYPES];
  }
}

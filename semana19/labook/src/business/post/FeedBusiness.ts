import BasePostBusiness from "./BasePostBusiness";
import { POST_TYPES } from "../../model/post";
import CustomError from "../errors/CustomError";

export class FeedBusiness extends BasePostBusiness {
  public async feed(page: any, token: string | undefined) {
    const { id } = this.tokenService.getTokenData(token);
    const pageValue = this.parsePage(page);
    const feed = await this.postDB.getFeed(id, pageValue);

    return { page: pageValue, feed };
  }

  public async feedByType(query: any, token: string | undefined) {
    this.tokenService.getTokenData(token);

    const type = this.validateQuery(query);

    const feed = await this.postDB.getFeedByType(type);

    return feed;
  }

  private parsePage(page: any): number {
    return Number(page);
  }

  private validateQuery(query: any): POST_TYPES {
    if (!(query in POST_TYPES)) {
      throw new CustomError('Type invalid! Must be "EVENT" or "NORMAL"');
    }

    return POST_TYPES[query as POST_TYPES];
  }
}

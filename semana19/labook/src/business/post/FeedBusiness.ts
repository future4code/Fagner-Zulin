import BasePostBusiness from "./BasePostBusiness";

export class FeedBusiness extends BasePostBusiness {
  public async feed(token: string | undefined) {
    const { id } = this.tokenService.getTokenData(token);

    const feed = await this.postDB.getFeed(id);

    return feed;
  }
}

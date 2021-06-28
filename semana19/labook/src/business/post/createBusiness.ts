import { Post, PostData, PostInputDTO, POST_TYPES } from "../../model/post";
import BasePostBusiness from "./BasePostBusiness";
import CustomError from "../errors/CustomError";

export class CreateBusiness extends BasePostBusiness {
  public async create(
    data: PostInputDTO,
    token: string | undefined
  ): Promise<void> {
    const { id } = this.tokenService.getTokenData(token);
    const { description, photo, type } = this.validateCreateFields(data);

    const post: Post = {
      id: this.generateId(),
      authorId: id,
      description,
      photo,
      type,
    };

    await this.postDB.insertPost(post);
  }

  private validateCreateFields(data: PostInputDTO): PostData {
    const fields = this.hasFields(data);
    const type = this.validateType(fields.type);

    return { description: fields.description, photo: fields.photo, type };
  }

  private hasFields({ description, photo, type }: PostInputDTO) {
    if (!description || !photo || !type) {
      throw new CustomError(
        "The description, photo and type fields are requiered"
      );
    }

    return { description, photo, type };
  }

  private validateType(typeValue: string): POST_TYPES {
    if (!(typeValue in POST_TYPES)) {
      throw new CustomError("Type must be NORMAL or EVENT");
    }
    return POST_TYPES[typeValue as POST_TYPES];
  }
}

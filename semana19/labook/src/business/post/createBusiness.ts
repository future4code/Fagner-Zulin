import { authenticationData } from "../../model/user";
import { generateId } from "../../services/idService";
import { post, postData, POST_TYPES } from "../../model/post";
import { PostDB } from "../../data/postQueries";
import { TokenService } from "../../services/tokenService";

export const createBusiness = async (
  data: postData,
  token: string
): Promise<void> => {
  const tokenService = new TokenService();
  const tokenData: authenticationData = tokenService.getTokenData(token);

  const id: string = generateId();

  const post: post = {
    id,
    photo: data.photo,
    description: data.description,
    type: data.type as POST_TYPES,
    author_id: tokenData.id,
  };

  const postDB = new PostDB();
  await postDB.insertPost(post);
};

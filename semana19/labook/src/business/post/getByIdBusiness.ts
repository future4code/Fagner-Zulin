import { post } from "../../model/post";
import { PostDB } from "../../data/postQueries";

export const getByIdBusiness = async (id: string): Promise<post> => {
  const postDB = new PostDB();

  const queryResult = await postDB.selectPostById(id);

  if (!queryResult) {
    throw new Error("Post not found");
  }

  const post: post = {
    id: queryResult.id,
    photo: queryResult.photo,
    description: queryResult.description,
    type: queryResult.type,
    created_at: queryResult.created_at,
    author_id: queryResult.author_id,
  };

  return post;
};

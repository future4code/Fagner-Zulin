import { DBConnection, Post, PostDB, POST_TYPES } from "../src/PostDB";

describe("Testing PostDB", () => {
  const id = "10";

  test("insert post and select it", async () => {
    const postDb = new PostDB();
    const post: Post = {
      authorId: "f13d61cb-d3f3-4407-bab0-a73ca26f399f",
      description: "Super teste",
      id,
      photo: "link foto",
      type: POST_TYPES.NORMAL,
    };

    await postDb.insertPost(post);
    const result = await postDb.selectPostById(id);

    expect(result).toEqual({
      id: "10",
      photo: "link foto",
      description: "Super teste",
      type: "normal",
    });
  });

  test("insert two posts with the same id", async () => {
    try {
      const postDb = new PostDB();
      const post: Post = {
        authorId: "f13d61cb-d3f3-4407-bab0-a73ca26f399f",
        description: "Super teste",
        id,
        photo: "link foto",
        type: POST_TYPES.NORMAL,
      };

      await postDb.insertPost(post);
      await postDb.insertPost(post);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  afterAll(async () => {
    await new PostDB().deletePost(id);
    await DBConnection.close();
  });
});

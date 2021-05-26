import { connection } from "./connection";

export const createMovie = (
  id: string,
  name: string,
  blurb: string,
  release_date: Date,
  rating: number
): Promise<any> => {
  const result = connection("Movies").insert({
    id,
    name,
    blurb,
    release_date,
    rating,
  });

  return result;
};

export const allMovies = async (): Promise<any> => {
  const result = await connection("Movies").limit(15);

  return result;
};

export const searchMovie = async (query: string): Promise<any> => {
  const result = await connection("Movies")
    .where("name", "like", `%${query}%`)
    .orWhere("blurb", "like", `%${query}%`)
    .orderBy("release_date", "desc");
  return result;
};

import { connection } from "./connection";

export const actorByName = async (name: string): Promise<any> => {
  const [result] = await connection.raw(`
      SELECT * 
      FROM Actor 
      WHERE name = '${name}'
  `);

  return result;
};

export const totalActorsByGender = async (gender: string): Promise<any> => {
  const [result] = await connection.raw(`
      SELECT COUNT(*) as 'quantity'
      FROM Actor
      WHERE gender = '${gender}'
  `);

  return result;
};

export const updateSalaryById = async (
  id: string,
  salary: number
): Promise<any> => {
  const result = await connection("Actor")
    .update({ salary: salary })
    .where("id", id);

  return result;
};

export const deleteActorById = async (id: string): Promise<any> => {
  const result = connection("Actor").delete().where("id", id);
  return result;
};

export const averageSalaryByGender = async (gender: string): Promise<any> => {
  const [result] = await connection("Actor")
    .avg(`salary as average`)
    .where({ gender });

  return result;
};

export const actorById = async (id: string): Promise<any> => {
  const [result] = await connection("Actor").where({ id });
  return result;
};

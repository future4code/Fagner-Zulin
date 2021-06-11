import knexConnection from "./connection";

export const selectAllUsers = async (): Promise<any> => {
  const result = await knexConnection("aula48_exercicio");
  return result;
};

export const selecUserByName = async (name: string): Promise<any> => {
  const result = await knexConnection("aula48_exercicio")
    .select()
    .where("name", "LIKE", `%${name}%`);

  return result;
};

export const selecUserByType = async (type: string): Promise<any> => {
  const result = await knexConnection("aula48_exercicio")
    .select()
    .where("type", "LIKE", `%${type}%`);

  return result;
};

export const selecUsersAndOrder = async (
  orderBy: string,
  orderType: string
): Promise<any> => {
  const result = await knexConnection("aula48_exercicio")
    .select()
    .orderBy(orderBy, orderType);

  return result;
};

export const selecUserPerPage = async (page: number): Promise<any> => {
  const result = await knexConnection("aula48_exercicio")
    .select()
    .limit(5)
    .offset(5 * (page - 1));

  return result;
};

type data = {
  filterBy: string;
  filterTerm: string;
  orderBy: string;
  orderType: string;
  page: number;
};

export const selectUsers = async (data: data): Promise<any> => {
  const result = await knexConnection("aula48_exercicio")
    .select()
    .where(data.filterBy, "LIKE", `%${data.filterTerm}%`)
    .orderBy(data.orderBy, data.orderType)
    .limit(5)
    .offset(5 * (data.page - 1));

  return result;
};

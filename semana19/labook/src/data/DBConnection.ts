import Knex from "knex";
import knex from "knex";
import dotenv from "dotenv";
import CustomError from "../business/errors/CustomError";

dotenv.config();

export class DBConnection {
  protected static knexConnection: Knex = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true,
    },
  });
  protected postTable: string = "labook_posts";
  protected userTable: string = "labook_users";
  protected friendTable: string = "labook_friends";
  protected likesTable: string = "labook_likes";
  protected commentsTable: string = "labook_comments";

  protected error(error: any): void {
    throw new CustomError(error.sqlMessage || error.message, 500);
  }
}

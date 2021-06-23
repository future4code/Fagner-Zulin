import { User } from "../../src/model/User";
import { userMockAdmin, userMockNormal } from "./UserMock";

export class UserDatabase {

   public async createUser(user: User): Promise<void> {}

   public async getUserByEmail(email: string): Promise<User | undefined> {
      switch (email) {
         case "astrodev@gmail.com":
            return userMockAdmin
         case "bananinha@gmail.com":
            return userMockNormal
         default:
            return undefined
      }
   }

   public async getUserById(id: string): Promise<User | undefined> {
      switch (id) {
         case "id_mock_admin":
            return userMockAdmin
         case "id_mock_normal":
            return userMockNormal
         default:
            return undefined
      }
   }

   public async getAllUsers(): Promise<User[]> {
      return [
         userMockAdmin,
         userMockNormal
      ]
   }
}

export default new UserDatabase()

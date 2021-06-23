import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";

import hashGeneratorMock from "./mocks/hashGeneratorMock";
import idGeneratorMock from "./mocks/idGeneratorMock";
import tokenGeneratorMock from "./mocks/tokenGeneratorMock";
import userDatabaseMock from "./mocks/UserDatabaseMock";

const userBusinessMock = new UserBusiness(
  idGeneratorMock,
  hashGeneratorMock,
  userDatabaseMock as UserDatabase,
  tokenGeneratorMock
);

describe("UserBusiness", () => {
  describe("signup", () => {
    test("Should catch error when name is empty", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.signup(
          "",
          "test@email.com",
          "test123",
          "NORMAL"
        );
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Missing input");
      }
    });

    test("Should catch error when email is invalid", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.signup(
          "test",
          "testemail.com",
          "test123",
          "NORMAL"
        );
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Invalid email");
      }
    });

    test("Should catch error when password is invalid", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.signup(
          "test",
          "test@email.com",
          "test",
          "NORMAL"
        );
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Invalid password");
      }
    });

    test("Should catch error when role is invalid", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.signup(
          "test",
          "test@email.com",
          "test123",
          "GUEST"
        );
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Invalid user role");
      }
    });

    test("Should return access token on sucessful signup", async () => {
      expect.assertions(1);

      try {
        const { accessToken } = await userBusinessMock.signup(
          "test",
          "test@email.com",
          "test123",
          "NORMAL"
        );

        expect(accessToken).toBe("token_mock");
      } catch (error) {
        console.log(error.message);
      }
    });
  });

  describe("login", () => {
    test("Should catch error when email is not registered", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.login("bananinha@hotmail.com", "bananinha123");
      } catch (error) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    });

    test("Should catch error when password is incorrect", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.login("bananinha@gmail.com", "bananinha12345");
      } catch (error) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    });

    test("Should return acess token on sucessful login", async () => {
      expect.assertions(1);

      try {
        const { accessToken } = await userBusinessMock.login(
          "bananinha@gmail.com",
          "bananinha123"
        );

        expect(accessToken).toBe("token_mock");
      } catch (error) {
        console.log(error.message);
      }
    });
  });

  describe("getUserById", () => {
    test("Should catch error when user is not registered", async () => {
      expect.assertions(2);
      try {
        await userBusinessMock.getUserById("bananinha");
      } catch (error) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("User not found");
      }
    });

    test("Should return user on sucessfull getUserById", async () => {
      try {
        const getUserById = jest.fn((id: string) =>
          userBusinessMock.getUserById(id)
        );

        const user = await getUserById("id_mock_normal");

        expect(getUserById).toBeCalledWith("id_mock_normal");

        expect(user).toEqual({
          id: "id_mock_normal",
          name: "bananinha",
          email: "bananinha@gmail.com",
          role: "NORMAL",
        });
      } catch (error) {
        console.log(error);
      }
    });
  });

  describe("getAllUsers", () => {
    test("Should catch error when role is invalid", async () => {
      expect.assertions(2);
      try {
        await userBusinessMock.getAllUsers("NORMAL");
      } catch (error) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Not authorized");
      }
    });

    test("Should return users on sucessfull getAllUsers", async () => {
      try {
        const getAllUsers = jest.fn((role: string) =>
          userBusinessMock.getAllUsers(role)
        );

        const users = await getAllUsers("ADMIN");

        expect(getAllUsers).toBeCalledWith("ADMIN");

        expect(users).toContainEqual({
          id: "id_mock_admin",
          name: "astrodev",
          email: "astrodev@gmail.com",
          password: "astrodev123",
          role: "ADMIN",
        });

        expect(users).toContainEqual({
          id: "id_mock_normal",
          name: "bananinha",
          email: "bananinha@gmail.com",
          password: "bananinha123",
          role: "NORMAL",
        });
      } catch (error) {
        console.log(error);
      }
    });
  });

  describe("getProfile", () => {
    test("Should catch error when user is not registered", async () => {
      expect.assertions(2);
      try {
        await userBusinessMock.getProfile("bananinha");
      } catch (error) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("User not found");
      }
    });

    test("Should return user on sucessfull getProfile", async () => {
      try {
        const getProfile = jest.fn((id: string) =>
          userBusinessMock.getProfile(id)
        );

        const user = await getProfile("id_mock_normal");

        expect(getProfile).toBeCalledWith("id_mock_normal");

        expect(user).toEqual({
          id: "id_mock_normal",
          name: "bananinha",
          email: "bananinha@gmail.com",
          role: "NORMAL",
        });
      } catch (error) {
        console.log(error);
      }
    });
  });
});

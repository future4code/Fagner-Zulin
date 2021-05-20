import express, { Express, Request, Response } from "express";
import cors from "cors";
import { TYPE, Users } from "./users";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send({ message: "pong" });
});

/**
 * Exercício 1
 * a) O verbo a ser usado nesse endpoint deve ser o GET
 * b) indicaria com o seguinte path: "/users/all"
 */
app.get("/users/all", (req: Request, res: Response) => {
  const result = [...Users];
  res.status(200).send({ Users: result });
});

/**
 * Exercício 4
 * a) Nada prática nada mudou ao trocar o verbo pelo put
 * b) Acho que semanticamente o post é mais apropriado para
 * criar registros na api, o put ficaria responsavel pela a atualização
 * e se a regra de negocio permitir, na hora de atualizar não tiver o elemento
 * criar ele.
 */
app.post("/users", (req: Request, res: Response) => {
  try {
    const { id, name, email, type, age } = req.body;
    if (!name || !id || !email || !type || !age) {
      throw new Error(
        "All fields (id, name, email, type, age) must be completed"
      );
    }

    if (!Object.keys(TYPE).includes(type.toUpperCase())) {
      throw new Error(
        "This is not a valid value, the type must be admin or normal"
      );
    }

    const userType =
      type.toUpperCase() === TYPE.ADMIN ? TYPE.ADMIN : TYPE.NORMAL;

    const newUser = {
      id,
      name,
      email,
      type: userType,
      age,
    };

    Users.push(newUser);

    res.status(200).send({ message: "sucess", user: newUser });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

/**
 * Exercício 3
 * a) O tipo é o query
 */

app.get("/users/search", (req: Request, res: Response) => {
  try {
    const name = req.query.name;
    if (!name) throw new Error("The name parameter must be informed");

    const result = Users.find(
      (user) => user.name.toLowerCase() === name.toString().toLowerCase()
    );

    if (!result) {
      res.status(404).send({ message: "User not found" });
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

/**
 * Exercício 5
 */
app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const id = Number(req.params.id);
    if (!name) throw new Error("The field name must be completed");
    if (isNaN(id)) throw new Error("The id parameter must be informed ");

    if (Users.find((user) => user.id === id)) {
      Users.forEach((user) => {
        if (user.id === id) {
          user.name = `${name}-ALTERADO`;
        }
      });
      res.status(200).end();
    } else {
      res.status(400).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

/**
 * Exercício 6
 */
app.patch("/users/:id", (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const id = Number(req.params.id);
    if (!name) throw new Error("The field name must be completed");
    if (isNaN(id)) throw new Error("The id parameter must be informed ");

    if (Users.find((user) => user.id === id)) {
      Users.forEach((user) => {
        if (user.id === id) {
          user.name = `${name}-REALTERADO`;
        }
      });
      res.status(200).end();
    } else {
      res.status(400).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

/**
 * Exercício 7
 */
app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) throw new Error("The id parameter must be informed ");

    if (Users.find((user) => user.id === id)) {
      const index = Users.findIndex((user) => user.id === id);
      Users.splice(index, 1);
      res.status(200).send({ message: "User removed" });
    } else {
      res.status(400).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

/**
 * Exercício 2
 * a) Passei os parametro como params, pois a intenção é se fazer um filtro
 * b) Validando se o valor passado é correspondente a alguma das keys do enum
 */

app.get("/users/filter/:type", (req: Request, res: Response) => {
  try {
    const type = req.params.type;
    if (!type) throw new Error("The type parameter must be informed");

    const typeValue = type.toString().toUpperCase();
    if (!Object.keys(TYPE).includes(typeValue)) {
      throw new Error(
        "This is not a valid value, the type must be admin or normal"
      );
    }

    const result = Users.filter((user) => user.type === typeValue);

    res.status(200).send({ searchResult: result });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log(`Server is running in port 3003`);
});

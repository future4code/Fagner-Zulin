import express, { Express, Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => {
    const { id, name } = country;
    return { id, name };
  });

  res.status(200).send({ countries: result });
});

app.post("/countries/create", (req: Request, res: Response) => {
  let codeStatus: number = 400;
  try {
    const auth = req.headers.authorization;
    if (!auth) throw new Error("Authorization is required");
    if (auth.length < 10) {
      codeStatus = 401;
      throw new Error(
        "Authorization is incorrect, it must be at least 10 characters"
      );
    }
    const name = req.body.name;
    const capital = req.body.capital;
    const continent = req.body.continent;

    if (!name || !capital || !continent) {
      codeStatus = 404;
      throw new Error(
        "All fields (name, capital and continent) must be completed"
      );
    }

    const search = countries.find((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );

    if (search) throw new Error("The country has already been created");
    const id: number = Date.now();
    const result = {
      id,
      name,
      capital,
      continent,
    };

    res.status(201).send({ message: "Success!", country: result });
  } catch (error) {
    res.status(codeStatus).send({ message: error.message });
  }
});

app.get("/countries/search", (req: Request, res: Response) => {
  try {
    const name = req.query.name as string | undefined;
    const capital = req.query.capital as string | undefined;
    const continent = req.query.continent as string | undefined;

    if (!name && !capital && !continent) {
      throw new Error(
        "Some parameter must be passed (name, capital or continent)"
      );
    }

    let result: country[] = countries;

    if (name) {
      result = result.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (capital) {
      result = result.filter((country) =>
        country.capital.toLowerCase().includes(capital.toLowerCase())
      );
    }

    if (continent) {
      result = result.filter((country) =>
        country.continent.toLowerCase().includes(continent.toLowerCase())
      );
    }

    if (result.length === 0) {
      res.status(404).send({ message: "no results" });
    } else {
      res.status(200).send({ searchResult: result });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/countries/:id", (req: Request, res: Response) => {
  try {
    if (isNaN(Number(req.params.id))) throw new Error("Id must be a number");

    const result = countries.find(
      (county) => county.id === Number(req.params.id)
    );

    if (!result) {
      res.status(404).send({ message: "Id not found" });
    } else {
      res.status(200).send({ country: result });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.put("/countries/:id", (req: Request, res: Response) => {
  try {
    const name: string | undefined = req.body.name;
    const capital: string | undefined = req.body.capital;

    if (isNaN(Number(req.params.id))) throw new Error("Id must be a number");
    if (!(name || capital)) {
      throw new Error("Some parameter must be passed (name or capital)");
    }

    let result = countries.find(
      (country) => country.id === Number(req.params.id)
    );

    if (!result) {
      res.status(404).send({ message: "Country not found" });
    } else {
      if (name) {
        result = { ...result, name };
      }
      if (capital) {
        result = { ...result, capital };
      }

      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.delete("/countries/:id", (req: Request, res: Response) => {
  let codeStatus: number = 400;
  try {
    if (isNaN(Number(req.params.id))) throw new Error("Id must be a number");
    const id = Number(req.params.id);
    const auth = req.headers.authorization;
    if (!auth) throw new Error("Authorization is required");
    if (auth.length < 10) {
      codeStatus = 401;
      throw new Error(
        "Authorization is incorrect, it must be at least 10 characters"
      );
    }

    const search = countries.find((country) => country.id === id);

    if (!search) {
      res.status(404).send({ message: "Country not found" });
    } else {
      const result = countries.filter((country) => country.id !== id);
      res.status(200).send({ countries: result });
    }
  } catch (error) {
    res.status(codeStatus).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log(`Server is running in port 3003`);
});

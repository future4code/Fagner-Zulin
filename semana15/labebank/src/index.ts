import express, { Express, Response, Request } from "express";
import cors from "cors";
import { Clients } from "./clients";
import { isOlderThanEighteen } from "./utils/validateAge";
import { strigDateToTimestamp, timestampToday } from "./utils/formatDate";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send({ message: "pong" });
});

app.get("/client/all", (req: Request, res: Response) => {
  const result = [...Clients];
  res.status(200).send({ clients: result });
});

app.post("/client", (req: Request, res: Response) => {
  try {
    const { cpf, name, birthDate } = req.body;
    if (!cpf || !name || !birthDate) {
      throw new Error("The name, cpf and birthDate is required");
    }

    if (!isOlderThanEighteen(birthDate)) {
      throw new Error("Only older than 18 years can open an account");
    }

    const hasClient = Clients.find((client) => client.cpf === cpf);
    if (hasClient) throw new Error("CPF already registered");

    Clients.push({ cpf, name, birthDate, balance: 0, transactions: [] });

    res.status(201).send({ message: "New client created successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.post("/client/transfer", (req: Request, res: Response) => {
  try {
    const {
      nameSender,
      cpfSender,
      valueToTransfer,
      nameRecipient,
      cpfRecipient,
    } = req.body;

    if (
      !nameSender ||
      !cpfSender ||
      !valueToTransfer ||
      !nameRecipient ||
      !cpfRecipient
    ) {
      throw new Error(
        "All fields is required (nameSender, cpfSender, valueToTransfer, nameRecipient and  cpfRecipient)"
      );
    }

    const hasSender = Clients.find(
      (client) => client.cpf === cpfSender && client.name === nameSender
    );
    const hasRecipient = Clients.find(
      (client) => client.cpf === cpfRecipient && client.name === nameRecipient
    );
    if (!hasSender) throw new Error("Sender not found");
    if (!hasRecipient) throw new Error("Recipient not found");

    if (hasSender.balance < valueToTransfer) {
      throw new Error("Insufficient funds");
    }

    Clients.forEach((client) => {
      if (client.cpf === cpfSender) {
        client.transactions.push({
          date: timestampToday(),
          description: "Envio de dinheiro",
          value: -valueToTransfer,
        });
      }

      if (client.cpf === cpfRecipient) {
        client.transactions.push({
          date: timestampToday(),
          description: "Recebimento de dinheiro",
          value: +valueToTransfer,
        });
      }
    });
    res.status(200).send({ message: "Successful transfer" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/client/:cpf/balance", (req: Request, res: Response) => {
  try {
    const cpf = Number(req.params.cpf);

    if (isNaN(cpf)) throw new Error("CPF must be informed");
    const hasClient = Clients.find((client) => client.cpf === cpf);
    if (!hasClient) throw new Error("Client not found");

    const result = hasClient.balance;

    res.status(200).send({ balance: result });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.put("/client/:cpf/balance", (req: Request, res: Response) => {
  try {
    const cpf = Number(req.params.cpf);

    if (isNaN(cpf)) throw new Error("CPF must be informed");
    const hasClient = Clients.find((client) => client.cpf === cpf);
    if (!hasClient) throw new Error("Client not found");
    const currentDate = timestampToday();
    Clients.forEach((client) => {
      if (client.cpf === cpf) {
        const debitValue = client.transactions
          .filter((transaction) => transaction.date <= currentDate)
          .reduce((acc, curr) => {
            return acc + curr.value;
          }, 0);
        client.balance = debitValue;
      }
    });

    res.status(200).send({ message: "Balance successfully updated" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.put("/client/:cpf/deposit", (req: Request, res: Response) => {
  try {
    const cpf = Number(req.params.cpf);
    const { name, depositValue } = req.body;

    if (!name || !depositValue) {
      throw new Error("The name and depositValue is required");
    }
    if (isNaN(cpf)) throw new Error("CPF must be informed");
    const hasClient = Clients.find(
      (client) => client.cpf === cpf && client.name === name
    );
    if (!hasClient) throw new Error("Customer information is wrong");

    Clients.forEach((client) => {
      if (client.cpf === cpf) {
        client.transactions.push({
          date: timestampToday(),
          description: "Depósito",
          value: +depositValue,
        });
      }
    });

    res.status(200).send({ message: "Deposit made successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.post("/client/:cpf/payment", (req: Request, res: Response) => {
  try {
    const cpf = Number(req.params.cpf);
    const { dueDate, description, value } = req.body;

    if (!description || !value) {
      throw new Error("The description and value is required");
    }
    if (isNaN(cpf)) throw new Error("CPF must be informed");
    const hasClient = Clients.find((client) => client.cpf === cpf);
    if (!hasClient) throw new Error("Client not found");

    if (hasClient.balance < value) throw new Error("Insufficient funds");

    let date: number;
    const currentDate = timestampToday();
    if (!dueDate) {
      date = currentDate;
    } else if (strigDateToTimestamp(dueDate) < currentDate) {
      throw new Error("Please provide a current or future date");
    } else {
      date = strigDateToTimestamp(dueDate);
    }

    Clients.forEach((client) => {
      if (client.cpf === cpf) {
        client.transactions.push({
          date,
          description,
          value: -value,
        });
      }
    });

    res.status(200).send({ message: "Payment successfully registered" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Listening in 3003 port");
});

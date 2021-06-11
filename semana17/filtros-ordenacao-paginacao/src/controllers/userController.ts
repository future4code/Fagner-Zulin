import { NextFunction, Request, Response } from "express";
import {
  selectAllUsers,
  selectUsers,
  selecUserByName,
  selecUserByType,
  selecUserPerPage,
  selecUsersAndOrder,
} from "../data/userQuerys";

export default class UserController {
  getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    if (req.query) {
      next();
    } else {
      try {
        const users = await selectAllUsers();

        if (!users.length) {
          res.statusCode = 404;
          throw new Error("No users found");
        }

        res.status(200).send({ users });
      } catch (error) {
        res.status(400).send(error.message || error.sqlMessage);
      }
    }
  };

  orderUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    if (req.query.page) {
      next();
    } else {
      try {
        const orderBy = (req.query.orderBy as string) || "email";
        const orderType = (req.query.orderType as string) || "ASC";

        const users = await selecUsersAndOrder(orderBy, orderType);

        res.status(200).send({ users });
      } catch (error) {
        res.status(400).send(error.message || error.sqlMessage);
      }
    }
  };

  userPerPage = async (req: Request, res: Response): Promise<void> => {
    try {
      const page = Number(req.query.page) || 1;

      const users = await selecUserPerPage(page);

      res.status(200).send({ users, page });
    } catch (error) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  };

  filterUserByType = async (req: Request, res: Response): Promise<void> => {
    try {
      const type = req.params.type;

      const users = await selecUserByType(type);
      res.status(200).send({ users });
    } catch (error) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  };

  filterUserByName = async (req: Request, res: Response): Promise<void> => {
    try {
      const name = req.query.name as string;
      if (!name) {
        throw new Error("Query argument is missing: 'name'");
      }

      const users = await selecUserByName(name);

      res.status(200).send({ users });
    } catch (error) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  };

  getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const filterBy = (req.query.filterBy as string) || "name";
      const filterTerm = (req.query.filterTerm as string) || "";
      const orderBy = (req.query.orderBy as string) || "name";
      const orderType = (req.query.orderType as string) || "DESC";
      const page = Number(req.query.page) || 1;

      const users = await selectUsers({
        filterBy,
        filterTerm,
        orderBy,
        orderType,
        page,
      });

      res.status(200).send({ users, page });
    } catch (error) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  };
}

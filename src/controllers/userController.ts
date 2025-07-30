import { Request, Response } from "express";

class UsersController {
  create(resquest: Request, response: Response) {
    return response.json({ message: "ok" });
  }
}

export { UsersController };

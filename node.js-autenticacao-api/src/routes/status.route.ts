import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const statusRoute = Router();

statusRoute.get("/status", (req, res, next) => {
  res.status(StatusCodes.OK).send("Server rodando belezinha..!");
});

export default statusRoute;

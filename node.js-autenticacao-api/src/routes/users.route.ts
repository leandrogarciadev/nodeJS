/* TAREFAS A FAZER
get /users
get /users/:uuid
post /users
put /users/:uuid
delete /users/:uuid
*/

import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get("/users", (req, res, next) => {
  const users = [{ username: "Leandro" }];
  res.status(StatusCodes.OK).send(users);
});

usersRoute.get("/users/:uuid", (req, res, next) => {
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post("/users", (req, resp, next) => {
  const newUser = req.body;
  console.log(req.body);
  resp.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put("/users/:uuid", (req, resp, next) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;

  modifiedUser.uuid = uuid;
  resp.status(StatusCodes.OK).send({ modifiedUser });
});

usersRoute.delete("/users/:uuid", (req, resp, next) => {
  resp.sendStatus(StatusCodes.OK);
});

export default usersRoute;
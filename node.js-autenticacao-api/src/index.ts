import express, { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

//Configurações da plicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

//Configuração de rotas
app.use(usersRoute);
app.use(statusRoute);

//inicializando servidor
app.listen(port, () => {
  console.log(`Server Rodando porta ${port}`);
});
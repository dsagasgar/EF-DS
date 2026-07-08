import { Router } from "express";
import { continenteController, totalController } from "../controller/extranjeroController.js";

const continenteRouter = new Router();

continenteRouter.get("/extranjero", totalController);
continenteRouter.get("/extranjero/:continente", continenteController);

export default continenteRouter;
import { Router } from "express";
import { regionController, totalController } from "../controller/peruController.js";

const peruRouter = new Router();

peruRouter.get("/peru", totalController);
peruRouter.get("/peru/:region", regionController);

export default peruRouter;
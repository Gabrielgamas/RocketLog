import { Router } from "express";
import { DeliveriesController } from "@/controllers/deliveriesController";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";
import { DeliveriesStatusController } from "@/controllers/deliveriesStatusController";

const deliveriesRoutes = Router();

const deliveriesController = new DeliveriesController();
const deliveriesStatusController = new DeliveriesStatusController();

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));
deliveriesRoutes.post("/", deliveriesController.create);
deliveriesRoutes.get("/", deliveriesController.index);

deliveriesRoutes.patch("/:id/status", deliveriesStatusController.update);

export { deliveriesRoutes };

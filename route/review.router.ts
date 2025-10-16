import { Router } from "express";
import { addReview } from "../controller/review.controller";

const route: Router = Router();

route.post("/add-review", addReview);

export default route;

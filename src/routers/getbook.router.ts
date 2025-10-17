import { Router } from "express";
import { addReview } from "../controller/review.controller";
import { getBooksWithReviews } from "../controller/getbook.controller";

const route: Router = Router();

route.get("/book-review", getBooksWithReviews);

export default route;

import express  from "express";
import { createBookController, listBooksController } from "../controller/book-controller";

const router = express.Router();

router.post("/books", createBookController);
router.get("/books", listBooksController);

export default router;
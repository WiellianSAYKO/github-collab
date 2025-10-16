import { Response, Request } from "express";
import { createBookService, listBooksService } from "../service/book-service";


export async function createBookController(req: Request, res: Response) {
    try {
        const { title, author, slug } = req.body;

        if (!title || !author || !slug) {
            return res.status(400).json({ message: "Title, author, and slug are required" });
        }

        const book = await createBookService({ title, author, slug });

        return res.status(201).json({
            message: "Book created successfully",
            data: book,
        });
    } catch (error: any) {
        return res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}




export async function listBooksController(req: Request, res: Response) {
    try {
        const { author, title } = req.query;

        const books = await listBooksService({
            author: author ? String(author) : undefined,
            title: title ? String(title) : undefined,
        });

        return res.status(200).json({
            message: "Books retrieved successfully",
            count: books.length,
            data: books,
        });
    } catch (error: any) {
        return res.status(500).json({ message: error.message});
    }
}
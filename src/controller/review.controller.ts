import { NextFunction, Request, Response } from "express";
import prisma from "../prisma";

export const addReview = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { content, rating, bookId } = request.body;

    const review = await prisma.review.create({
      data: {
        content,
        rating: Number(rating),
        book: {
          connect: { id: Number(bookId) },
        },
      },
    });

    response.status(201).json({
      message: "Review added successfully",
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

import { NextFunction, Request, Response } from "express";
import prisma from "../prisma";

export const getBooksWithReviews = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const books = await prisma.book.findMany({
      include: { reviews: true },
    });

    response.status(200).send;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

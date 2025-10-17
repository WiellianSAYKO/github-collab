import prisma from "../config/prisma-client";

interface CreateBookInput {
  title: string;
  author: string;
  slug: string;
}

export async function createBookService(data: CreateBookInput) {
  try {
    const existingBook = await prisma.book.findUnique({
      where: { slug: data.slug },
    });

    if (existingBook) {
      throw new Error("Slug already exists");
    }

    const newBook = await prisma.book.create({
      data: {
        title: data.title,
        author: data.author,
        slug: data.slug,
      },
    });

    return newBook;
  } catch (error: any) {
    throw new Error(error.message || "Failed to create book");
  }
}

interface BookFilter {
  author?: string;
  title?: string;
}

export async function listBooksService(filter: BookFilter = {}) {
 const { title, author } = filter;

 const books = await prisma.book.findMany({
    where: {
    AND: [
      title ? { title: { contains: title, mode: "insensitive" } } : {},
      author ? { author: { contains: author, mode: "insensitive" } } : {},
    ],
  },
  orderBy: { createdAt: 'desc' },
 });     

    return books;
}
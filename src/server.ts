import express, { Express, Request, Response } from 'express';
import bookRouter from './router/book-routes';

const app: Express = express();
app.use(express.json());
const port = 5000;

app.get('/', (_: Request, res: Response) => {
  res.send('<h1>Welcome to API Server</h1>');
});

app.use(`/api/auth`, bookRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
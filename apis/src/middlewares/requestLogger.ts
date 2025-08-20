import morgan from 'morgan';
import chalk from 'chalk';
import { Request, Response } from 'express';

// Custom token for method in color
morgan.token('colored-method', (req:Request) => {
  const method = req.method;
  switch (method) {
    case 'GET':
      return chalk.green(method);
    case 'POST':
      return chalk.blue(method);
    case 'PUT':
      return chalk.yellow(method);
    case 'DELETE':
      return chalk.red(method);
    default:
      return chalk.white(method);
  }
});

morgan.token('status-colored', (_:Request, res:Response) => {
  const status = res.statusCode;
  if (status < 300) return chalk.green(status.toString());
  if (status < 400) return chalk.cyan(status.toString());
  if (status < 500) return chalk.yellow(status.toString());
  return chalk.red(status.toString());
});

export const requestLogger = morgan(
  `:colored-method :url :status-colored :response-time ms - :res[content-length]`
);

import { IncomingMessage, ServerResponse } from 'http';

export type RequestHandlerType = (request: IncomingMessage, response: ServerResponse) => void;
export type RequestByIdHandlerType = (
  request: IncomingMessage,
  response: ServerResponse,
  userId: string,
) => void;

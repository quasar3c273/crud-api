import { RequestHandlerType } from '../types/serverHandlersTypes';
import {users} from "../consts";

export const getUsers: RequestHandlerType = (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(users));
};

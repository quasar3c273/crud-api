import { RequestByIdHandlerType } from '../types/serverHandlersTypes';
import {users} from "../consts";
import {isTrueHobbiesFormat} from "../utils";

export const updateUser: RequestByIdHandlerType = (request, response, userId) => {
  const user = users.find((user) => user.id === userId);

  if (user) {
    let body = '';
    request.on('data', (chunk) => {
      body += chunk;
    });

    request.on('end', () => {
      try {
        const contentType = request.headers['content-type'];
        if (!contentType || !contentType.includes('application/json')) {
          response.statusCode = 400;
          response.setHeader('Content-Type', 'text/plain');
          response.end('Invalid request body: Only JSON content type is supported');
          return;
        }

        const updatedUserBody = JSON.parse(body);

        if (
          (updatedUserBody.username && typeof updatedUserBody.username !== 'string') ||
          (updatedUserBody.age && typeof updatedUserBody.age !== 'number') ||
          (updatedUserBody.hobbies &&
            (!Array.isArray(updatedUserBody.hobbies) ||
              !isTrueHobbiesFormat(updatedUserBody.hobbies)))
        ) {
          response.statusCode = 418;
          response.setHeader('Content-Type', 'text/plain');
          response.end(
            'Invalid request body: fields contain data of an incorrect type.The server refuses the attempt to brew coffee with a teapot.',
          );
          return;
        }

        if (updatedUserBody.username) {
          user.username = updatedUserBody.username;
        }
        if (updatedUserBody.age) {
          user.age = updatedUserBody.age;
        }
        if (updatedUserBody.hobbies) {
          user.hobbies = updatedUserBody.hobbies;
        }

        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(user));
      } catch (error) {
        response.statusCode = 418;
        response.setHeader('Content-Type', 'text/plain');
        response.end(
          'Invalid request body. The server refuses the attempt to brew coffee with a teapot.',
        );
      }
    });
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`User with ID = '${userId}' does not exist`);
  }
};

import { RequestHandlerType } from '../types/serverHandlersTypes';
import {isNotFullUserInfo} from "../utils";
import invalidRequest from "../pages/404";
import addNewUser from "../pages/addNewUser";
import invalidUserInfo from "../pages/invalidUserInfo";
import invalidFormatBody from "../pages/invalidFormatBody";

export const createUser: RequestHandlerType = (request, response) => {
  let body = '';

  request.on('data', (chunk) => {
    body += chunk;
  });

  request.on('end', () => {
    try {
      const contentType = request.headers['content-type'];
      if (!contentType || !contentType.includes('application/json')) {
        invalidFormatBody(response)
        return;
      }

      const userInfo = JSON.parse(body);

      if (
        isNotFullUserInfo(userInfo)
      ) {
        invalidUserInfo(response)
        return;
      }

      addNewUser(response, userInfo)
    } catch (error) {
      invalidRequest(response)
    }
  });
};

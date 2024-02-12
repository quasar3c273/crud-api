import {createServer, IncomingMessage, ServerResponse} from 'http';
import startServerListen from "./helpers/serversListeners";
import pageNotFound from "./pages/404";
import startingPage from "./pages/startingPage";
import {getUsers} from "./usersMethods/getUsers";
import {createUser} from "./usersMethods/createUser";
import unknownMethod from "./pages/unknownMethod";
import userIdNotSpecified from "./pages/userIdNotSpecified";
import {validateIdByUuid} from "./utils";
import invalidId from "./pages/invalidId";
import {getUser} from "./usersMethods/getUser";
import {updateUser} from "./usersMethods/updateUser";
import {deleteUser} from "./usersMethods/deleteUser";

export const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  const { url, method } = request;

  if (url === '/api/users' && method) {
    switch (method) {
      case 'GET':
        getUsers(request, response);
        break;
      case 'POST':
        createUser(request, response);
        break;
      default:
        unknownMethod(response);
        break;
    }
  } else if (url && url.startsWith('/api/users/') && method) {
    if (url.split('/').length > 4) {
      pageNotFound(response);
      return;
    }
    const userId = url.split('/').pop();

    if (!userId) {
      userIdNotSpecified(response)
    } else if (!validateIdByUuid(userId)) {
      invalidId(response)
    } else {
      switch (method) {
        case 'GET':
          getUser(request, response, userId);
          break;
        case 'PUT':
          updateUser(request, response, userId);
          break;
        case 'DELETE':
          deleteUser(request, response, userId);
          break;
        default:
          unknownMethod(response)
          break;
      }
    }
  } else if (url === '/') {
    startingPage(response);
  } else {
    pageNotFound(response);
  }
});

startServerListen()
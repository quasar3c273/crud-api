import {ServerResponse} from "http";

const userIdNotSpecified = (response: ServerResponse) => {
  response.statusCode = 400;
  response.setHeader('Content-Type', 'text/plain');
  response.end('userId" not specified');
}

export default userIdNotSpecified
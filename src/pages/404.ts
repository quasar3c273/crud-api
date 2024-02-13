import {ServerResponse} from "http";

const invalidRequest = (response: ServerResponse) => {
  response.statusCode = 404;
  response.setHeader('Content-Type', 'text/plain');
  response.end('You are sending a request to a non-existent resource');
}

export default invalidRequest
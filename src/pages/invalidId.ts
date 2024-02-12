import {ServerResponse} from "http";

const invalidId = (response: ServerResponse) => {
  response.statusCode = 400;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Invalid id');
}

export default invalidId
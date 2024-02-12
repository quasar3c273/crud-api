import {ServerResponse} from "http";

const invalidFormatBody = (response: ServerResponse) => {
  response.statusCode = 400;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Invalid request body: Only JSON content type is supported');
}

export default invalidFormatBody
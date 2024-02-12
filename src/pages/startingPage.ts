import {ServerResponse} from "http";

const startingPage = (response: ServerResponse) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end('Hello, simple CRUD-API is running!');
}

export default startingPage
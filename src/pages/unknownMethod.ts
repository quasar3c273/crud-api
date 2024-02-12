import {ServerResponse} from "http";

const unknownMethod = (response: ServerResponse) => {
  response.statusCode = 405;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Unused method');
}

export default unknownMethod
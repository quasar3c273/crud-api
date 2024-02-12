import {ServerResponse} from "http";

const invalidUserInfo = (response: ServerResponse) => {
  response.statusCode = 400;
  response.setHeader('Content-Type', 'text/plain');
  response.end(
    'Invalid request body: body does not contain required fields, or the fields contain data of an incorrect type',
  );
}

export default invalidUserInfo
import {ServerResponse} from "http";
import {UserInterface} from "../types/User";
import {v4 as uuid} from "uuid";
import {users} from "../consts";

const addNewUser = (response: ServerResponse, userInfo) => {
  const newUser: UserInterface = {
    id: uuid(),
    username: userInfo.username,
    age: userInfo.age,
    hobbies: userInfo.hobbies,
  };

  users.push(newUser);

  response.statusCode = 201;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(newUser));
}

export default addNewUser
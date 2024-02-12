import {validate} from "uuid";
import {ServerResponse} from "http";

export const validateIdByUuid = (userId: any): boolean => {
  return validate(userId);
};
export const isTrueHobbiesFormat = (hobbiesArray: Array<any>): boolean => {
  return hobbiesArray.every((hobby) => typeof hobby === 'string');
};
export const isNotFullUserInfo = (userInfo): boolean => {
  return !userInfo.username ||
    !userInfo.age ||
    !userInfo.hobbies ||
    typeof userInfo.username !== 'string' ||
    typeof userInfo.age !== 'number' ||
    !Array.isArray(userInfo.hobbies) ||
    !isTrueHobbiesFormat(userInfo.hobbies)
};
export const getResponseInfo = (code: number, response: ServerResponse, reqInfo: string) => {
  response.statusCode = 400;
  response.setHeader('Content-Type', 'text/plain');
  response.end(reqInfo);
}

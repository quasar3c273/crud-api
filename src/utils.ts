import {validate} from "uuid";

export const validateIdByUuid = (userId: any): boolean => {
  return validate(userId);
};
export const isTrueHobbiesFormat = (hobbiesArray: Array<any>): boolean => {
  return hobbiesArray.every((hobby) => typeof hobby === 'string');
};
export const isNotFullUserInfo = (userInfo: {
  username?: string;
  age?: number;
  hobbies?: string[];
}): boolean => {
  return (
    !userInfo.username ||
    !userInfo.age ||
    !userInfo.hobbies ||
    typeof userInfo.username !== 'string' ||
    !Array.isArray(userInfo.hobbies) ||
    !isTrueHobbiesFormat(userInfo.hobbies)
  );
};
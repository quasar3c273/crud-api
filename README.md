## Installation

1) Clone this repo
2) Install dependencies
```bash
npm install
```

## Checking the functionality
### Server operations
1) Start the server `npm run start:dev` for check development mode
2) After start server open Postman, send requests
- GET (http://localhost:4000/api/users) to get an array of users;
- GET (http://localhost:4000/incorrect_url) to get response to an incorrect request;
- POST (http://localhost:4000/api/users) to create new user with body in JSON like
```
  {
  "username": "Serafim",
  "age": 5,
  "hobbies": ["board game"]
  }
```
- POST - try sending invalid data
- copy id of created user;
- PUT (http://localhost:4000/api/users/{createdUserId}) to change user with body in JSON like
```
  {
  "username": "Anjelika",
  "age": 17,
  "hobbies": ["computer games"]
  }
```
- PUT try sending invalid data;
- DELETE (http://localhost:4000/api/users/{createdUserId}) to delete created user;

### Production mode
Command `npm run start:prod` will start the build (production mode). 
Terminate process and after this you will see the dist folder in the root directory.

### Testing
Command `npm run test` run tests;

### [Task](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md)
### [Cross-check](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/score.md)

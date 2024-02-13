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
  <img width="582" alt="image" src="https://github.com/quasar3c273/crud-api/assets/48333089/69a79a8b-b0f0-481d-94e9-1405427d5b6c">
- GET (http://localhost:4000/incorrect_url) to get response to an incorrect request;
  <img width="558" alt="image" src="https://github.com/quasar3c273/crud-api/assets/48333089/cf72f504-a0af-44fb-9da4-81a7fe218162">
- POST (http://localhost:4000/api/users) to create new user with body in JSON like
  <img width="688" alt="image" src="https://github.com/quasar3c273/crud-api/assets/48333089/e4060862-6657-4fb6-85a5-fe1d26a97197">
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
  <img width="507" alt="image" src="https://github.com/quasar3c273/crud-api/assets/48333089/372f8fec-0508-470a-8f52-6452b62b7f18">

```
  {
  "username": "Anjelika",
  "age": 17,
  "hobbies": ["computer games"]
  }
```
- PUT try sending invalid data;
- DELETE (http://localhost:4000/api/users/{createdUserId}) to delete created user;
  <img width="955" alt="image" src="https://github.com/quasar3c273/crud-api/assets/48333089/7cf8585c-91ad-4776-9c1a-7a01bf49b88f">


### Production mode
Command `npm run start:prod` will start the build (production mode). 
Terminate process and after this you will see the dist folder in the root directory.

### Testing
Command `npm run test` run tests;

### [Task](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md)
### [Cross-check](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/score.md)

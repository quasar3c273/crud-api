import { describe } from 'node:test';
import request from 'supertest';
import { server } from '../index';

describe('The correct response', () => {
  afterAll(() => {
    server.close();
  });

  test('Invalid name', async () => {
    const newUser = {
      username: 'Ivan',
      age: 18,
      hobbies: ['IT', 'gaming'],
    };

    const createNewUserResponse = await request(server)
      .post('/api/users')
      .send(newUser)
      .expect(201);

    const createdUserId = createNewUserResponse.body.id;

    const updatedUser = {
      username: 111,
    };

    const updateResponse = await request(server)
      .put(`/api/users/${createdUserId}`)
      .send(updatedUser)
      .expect(418);

    expect(updateResponse.text).toEqual(
      'Invalid request body: fields contain data of an incorrect type.The server refuses the attempt to brew coffee with a teapot.',
    );
  });

  test('Invalid age', async () => {
    const newUser = {
      username: 'Ivan',
      age: 18,
      hobbies: ['IT', 'gaming'],
    };

    const createNewUserResponse = await request(server)
      .post('/api/users')
      .send(newUser)
      .expect(201);

    const createdUserId = createNewUserResponse.body.id;

    const updatedUser = {
      age: 'IT',
    };

    const updateResponse = await request(server)
      .put(`/api/users/${createdUserId}`)
      .send(updatedUser)
      .expect(418);

    expect(updateResponse.text).toEqual(
      'Invalid request body: fields contain data of an incorrect type.The server refuses the attempt to brew coffee with a teapot.',
    );
  });
});

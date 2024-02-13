import { describe } from 'node:test';
import request from 'supertest';
import { server } from '../index';

describe('The correct response to an attempt to incorrect user change', () => {
  afterAll(() => {
    server.close();
  });

  test('Must respond to an invalid id', async () => {
    const invalidIdResponse = await request(server).delete(`/api/users/123`).expect(400);

    expect(invalidIdResponse.text).toEqual('Invalid id');
  });

  test('Must respond to an invalid url', async () => {
    const invalidUrlResponse = await request(server)
      .get(`/api/users/dfrsi/kjfhuisdhyf`)
      .expect(404);

    expect(invalidUrlResponse.text).toEqual('You are sending a request to a non-existent resource');
  });
});

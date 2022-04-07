import { run } from '../app';
import { Server } from 'http';
import request from 'supertest';
describe('http', () => {
  let server: Server;

  beforeAll(() => {
    server = run(30003);
  });

  it('GET /admin', () => {
    return request(server)
      .get('/admin')
      .expect(200)
      .then(response => {
        expect(response.body.length).toEqual(6);
        expect(response.body).toStrictEqual([1, 2, 3, 4, 5, 6]);
      });
  });

  afterAll(async () => {
    server.close();
  });
});

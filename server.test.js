const request = require('supertest');
const app = require('./server');

describe('Student API', () => {
  test('Get student API', async () => {
    const res = await request(app).get('/students');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  
  test('POST students API', async () => {
    const res = await request(app).post('/students').send({ name: 'ghi', department: 'CSE' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('ghi');
  });

  test('Invalid students test', async() => {
    const res = await request(app).get('/students/9999');
    expect(res.statusCode).toBe(404);
  });
});

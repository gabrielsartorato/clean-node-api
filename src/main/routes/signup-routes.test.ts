import request from 'supertest';
import app from '../config/app';

describe('SignUp Routes', () => {
  it('should be able to return an account on success', async () => {
    app.get('/test_cors', (req, res) => {
      res.send(req.body);
    });

    await request(app)
      .post('/api/signup')
      .send({
        name: 'Gabriel',
        email: 'gariel@email.com',
        password: '123',
        password_confirmation: '123',
      })
      .expect(200);
  });
});

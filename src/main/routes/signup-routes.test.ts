import request from 'supertest';
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper';
import app from '../config/app';

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts');
    await accountCollection.deleteMany({});
  });
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

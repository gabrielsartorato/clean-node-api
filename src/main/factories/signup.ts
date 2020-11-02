import { DbAddAccount } from '../../data/usecases/add-account/db-add-account';
import { SignUpController } from '../../presentation/controllers/signup/signup';
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter';
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter';
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account-repository';

export const makeSignUpController = (): SignUpController => {
  const salt = 12;

  const emailValidator = new EmailValidatorAdapter();
  const bcrypterAdapter = new BcryptAdapter(salt);
  const accountMongoRepository = new AccountMongoRepository();
  const dbAddAccount = new DbAddAccount(
    bcrypterAdapter,
    accountMongoRepository,
  );

  return new SignUpController(emailValidator, dbAddAccount);
};

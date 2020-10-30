import {
  AccountModel,
  AddAccount,
  AddAccountModel,
  Encrypter,
} from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter;

  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter;
  }

  async add({ email, name, password }: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(password);
    return new Promise((resolve) => resolve(null));
  }
}

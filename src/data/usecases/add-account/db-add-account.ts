import {
  AccountModel,
  AddAccount,
  AddAccountModel,
  Encrypter,
  AddAccountRepository,
} from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter;
  private readonly addAccountRepository: AddAccountRepository;

  constructor(
    encrypter: Encrypter,
    addAccountRepository: AddAccountRepository,
  ) {
    this.encrypter = encrypter;
    this.addAccountRepository = addAccountRepository;
  }

  async add({ email, name, password }: AddAccountModel): Promise<AccountModel> {
    const encryptPassword = await this.encrypter.encrypt(password);

    await this.addAccountRepository.add({
      name,
      email,
      password: encryptPassword,
    });

    return new Promise((resolve) => resolve(null));
  }
}

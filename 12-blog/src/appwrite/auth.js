import { Client, Account, ID } from "appwrite";
import config from "../config/config";

const account = new Account(client);

export class AuthService {
  constructor() {
    this.client
      .setEndpoint(config.appWriteUr)
      .setProject(config.appWriteProjectID);
    this.account = new Account(this.client);
  }
  client = new Client();
  account;

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method after succesfully created a account login the use
        this.login(email, password);
      } else return userAccount;
    } catch (err) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (err) {
      throw err;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console(error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      console.log(err);
    }
  }
}

const authService = new AuthService();

export default AuthServie;

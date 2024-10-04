import { CREATE_ACCOUNT } from "../endpoints";
import { instance } from "../instance";

export interface CreateAccountPayload {
  accountType: string;
  [key: string]: any;
}

export const createAccount = (payload: CreateAccountPayload) => {
  const { accountType, ...rest } = payload;
  return instance.post(CREATE_ACCOUNT(accountType), rest);
};

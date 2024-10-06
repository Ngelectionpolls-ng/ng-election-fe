import { CREATE_ACCOUNT, GOOGLE_OAUTH_CONSENT, PASSWORD_RESET_LINK, RESEND_OTP, VERIFY_REGISTRATION } from "../endpoints";
import { instance } from "../instance";

export interface CreateAccountPayload {
  accountType: string;
  [key: string]: any;
}
export interface ResendOTPPayload {
  email: string | null;
  channel: string;
  redirectUrl: string;
}
export interface ResetPasswordPayload {
  email: string | null;
  resetUrl: string;
}

export const createAccount = (payload: CreateAccountPayload) => {
  const { accountType, ...rest } = payload;
  return instance.post(CREATE_ACCOUNT(accountType), rest);
};

export const createAccountWithGoogle = (payload: string) =>
  instance.post(GOOGLE_OAUTH_CONSENT, payload);

export const verifyAccount = (payload: string) =>
  instance.post(VERIFY_REGISTRATION, payload);

export const resendOTP = (payload: ResendOTPPayload) =>
  instance.post(RESEND_OTP, payload);

export const passwordResetLink = (payload: ResetPasswordPayload) =>
  instance.post(PASSWORD_RESET_LINK, payload);

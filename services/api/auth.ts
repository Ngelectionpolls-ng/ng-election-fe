import {
  CREATE_ACCOUNT,
  GOOGLE_OAUTH_CONSENT,
  PASSWORD_RESET_LINK,
  RESEND_OTP,
  RESET_PASSWORD,
  VERIFY_REGISTRATION,
  VERIFY_RESET_TOKEN,
  VERIFY_TOKENS,
} from "../endpoints";
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
export interface PasswordResetLinkPayload {
  email: string | null;
  resetUrl: string;
}
export interface VerifyResetPasswordTokenPayload {
  id: string | null;
  code: string | null;
}
export interface ResetPasswordPayload {
  id: string | null;
  newPassword: string;
}

export const createAccount = (payload: CreateAccountPayload) => {
  const { accountType, ...rest } = payload;
  return instance.post(CREATE_ACCOUNT(accountType), rest);
};

export const createAccountWithGoogle = (payload: string) =>
  instance.post(GOOGLE_OAUTH_CONSENT, payload);

export const verifyAccount = (payload: object) =>
  instance.post(VERIFY_REGISTRATION, payload);

export const verifyTokens = (id: string, code: string) => {
  return instance.post(VERIFY_TOKENS(id, code));
};

export const resendOTP = (payload: ResendOTPPayload) =>
  instance.post(RESEND_OTP, payload);

export const passwordResetLink = (payload: PasswordResetLinkPayload) =>
  instance.post(PASSWORD_RESET_LINK, payload);

export const verifyResetPasswordToken = (payload: VerifyResetPasswordTokenPayload) =>
  instance.post(VERIFY_RESET_TOKEN, payload);

export const resetPassword = (payload: ResetPasswordPayload) =>
  instance.post(RESET_PASSWORD, payload);

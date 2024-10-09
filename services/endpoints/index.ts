// AUTH
export const CREATE_ACCOUNT = (accountType: string) =>
  `/auth/${accountType}/register`;

export const GOOGLE_OAUTH_CONSENT = "/auth/consent-page";

export const VERIFY_REGISTRATION = "/auth/verify/registration";
export const VERIFY_TOKENS = (id: string, code: string) =>
  `/auth/verify/tokens?id=${id}&code=${code}`;
export const RESEND_OTP = "/auth/request-new-code";

export const PASSWORD_RESET_LINK = "/auth/forgot-password";
export const VERIFY_RESET_TOKEN = "/auth/reset-password/verify";
export const RESET_PASSWORD = "/auth/reset-password";

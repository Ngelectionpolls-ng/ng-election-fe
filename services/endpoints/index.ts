// AUTH
export const CREATE_ACCOUNT = (accountType: string) =>
  `/auth/${accountType}/register`;

export const GOOGLE_OAUTH_CONSENT = "/auth/consent-page";

export const VERIFY_REGISTRATION = "/auth/verify/registration";
export const RESEND_OTP = "/auth/request-new-code";

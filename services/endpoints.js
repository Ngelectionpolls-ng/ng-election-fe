// Auth Related endpoints
export const CREATE_ACCOUNT = `auth/:account_type/register`;
export const REQUEST_NEW_CODE = `auth/request-new-code`;
export const SIGN_IN = `auth/login`;
export const GOOGLE_OAUTH_CONSENT = "auth/consent-page";
export const VERIFY_REGISTRATION = "auth/verify/registration";
export const VERIFY_TOKENS = `auth/verify/tokens?id=:id&code=:code`;
export const RESEND_OTP = "auth/request-new-code";
export const FORGOT_PASSWORD = "auth/forgot-password";
export const VERIFY_RESET_TOKEN = "auth/reset-password/verify";
export const RESET_PASSWORD = "auth/reset-password";
// CREATE PROFILE
export const CREATE_PROFILE = `:account_type`;
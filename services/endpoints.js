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
export const REGISTER_SUBSCRIBER = 'auth/subscriber/register';

//states information endpoints
export const GET_STATES = `states`;
export const GET_STATE_LGAS = `states/:state_id/lgas`;
export const GET_LGA_WARDS = `lgas/:lga_id/wards`;
export const GET_WARD_POLLING_UNITS = `wards/:ward_id/pollingunits`;
export const GET_POLITICAL_PARTIES = `parties`;

//Get profile
export const GET_PROFILE = `common-resources/profile/:user_id`;
export const UPDATE_PROFILE = `common-resources/profile/:user_id`;

//reports
export const GET_REPORTS = `reports`;
export const CREATE_REPORT = `reports`;

//wallet
export const GET_WALLET_INFO = `wallets/:user_id`;
export const PROCESS_WITHDRAWAL = `wallets/withdrawals`;
export const TRANSACTION_HISTORY = `wallets/transactions/history/:user_id`;
export const WALLET_CONVERSIONS = `wallets/conversions`;

//results
export const SAVE_ELECTION_RESULT = `agents/upload`;

//elections
export const GET_ELECTIONS = `elections`;

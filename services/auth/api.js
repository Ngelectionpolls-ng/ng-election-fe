import Axios from "../Axios";
import {CREATE_ACCOUNT, FORGOT_PASSWORD, REQUEST_NEW_CODE, 
        VERIFY_TOKENS, RESET_PASSWORD, SIGN_IN} from 'services/endpoints';

export const Signup = async (role, data) => {

    let result = null;

    await Axios.post(CREATE_ACCOUNT.replace(':account_type', role), {
        redirectUrl: "auth/verify-otp",
        ...data
    })
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;

} 

export const RequestNewCode = async (email, channel) => {

    let result = null;

    await Axios.post(REQUEST_NEW_CODE, {
        redirectUrl: "auth/verify-otp",
        channel,
        email
    })
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;

} 

export const Signin = async (data) => {

    let result = null;

    await Axios.post(SIGN_IN, {
        ...data
    })
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;

} 

export const ForgotPassword = async (email) => {

    let result = null;

    await Axios.post(FORGOT_PASSWORD, {
        email,
        resetUrl: "auth/reset-password",
    })
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;

} 

export const ResetPassword = async (id, password) => {

    let result = null;

    await Axios.post(RESET_PASSWORD, {
        id,
        newPassword: password,
    })
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;

}

export const VerifyOTP = async (id, code) => {

    let result = null;

    await Axios.post(VERIFY_TOKENS.replace(':id', id).replace(':code', code))
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;

} 




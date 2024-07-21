import axios from 'axios'
import { url } from 'utils/index'

export const getToken = () => {
  const token = localStorage.getItem('authTOken')
  return token
}

export const getLoginToken = () => {
  const token = localStorage.getItem('authToken')
  return token
}

/**
 * Auth Screens
 */
export const Register = async (payload) => {
  const res = await axios.post(`${url}/auth/register/`, {
    ...payload,
  })
  return res
}

export const Login = async (payload) => {
  const res = await axios.post(`${url}/auth/login/`, { ...payload })
  return res
}

export const UserInfoApi = async (userToken) => {
  const res = await axios.get(`${url}/account/profiles/retrieve/`, {
    headers: {
      Authorization: `Bearer ${userToken || getLoginToken()}`,
    },
  })
  return res
}

export const ReSendOTP = async (verificationType) => {
  const res = await axios.get(
    `${url}/auth/resend-otp/?verification_type=${verificationType}`,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  )
  return res
}

export const VerifyOTP = async (data) => {
  const res = await axios.post(`${url}/auth/verify-account/`, { ...data })
  return res
}

export const ResetPassword = async (data) => {
  const res = await axios.post(
    `${url}/auth/reset-password/`,
    { ...data },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res
}

export const ForgotPassword = async (data) => {
  const res = await axios.post(`${url}/auth/forgot-password/`, { ...data })
  return res
}



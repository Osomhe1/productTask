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

/**
 * Polls/Voting
 */

export const CreatePollApi = async (pollData) => {
  const res = await axios.post(
    `${url}/polls/user/`,
    { ...pollData },
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  )
  return res
}

export const UpdatePollApi = async (pollData, pollID) => {
  console.log('editpoll', pollData)
  console.log('editpollid', pollID)
  const res = await axios.put(
    `${url}/polls/user/${pollID}/`,
    { ...pollData },
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  )
  return res
}

export const DeletePollApi = async (pollID) => {
  const res = await axios.delete(`${url}/polls/user/${pollID}/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const PollsApi = async () => {
  const res = await axios.get(`${url}/polls/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const MyPollsApi = async () => {
  const res = await axios.get(`${url}/polls/user/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const SuggestedPollsApi = async () => {
  const res = await axios.get(`${url}/polls/suggested/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const PromotedPollsApi = async () => {
  const res = await axios.get(`${url}/polls/promoted/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const ActivePollsApi = async () => {
  const res = await axios.get(`${url}/polls/user/active/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const EndedPollsApi = async () => {
  const res = await axios.get(`${url}/polls/user/ended/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const FindPollsApi = async (search) => {
  const res = await axios.get(`${url}/polls/find/?find=${search}`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const FindUserPollsApi = async (search) => {
  const res = await axios.get(`${url}/polls/user/find/?find=${search}`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const ClosePollApi = async (poll_id) => {
  const res = await axios.get(`${url}/polls/user/${poll_id}/close/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const VoteApi = async (data, poll_id) => {
  const res = await axios.post(
    `${url}/polls/${poll_id}/vote/`,
    { ...data },
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  )
  return res
}

export const NotificationsApi = async () => {
  const res = await axios.get(`${url}/notifications/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  })
  return res
}

export const PromotePollApi = async (data, poll_id) => {
  const res = await axios.post(
    `${url}/polls/user/${poll_id}/promote-poll/`,
    { ...data },
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  )
  return res
}

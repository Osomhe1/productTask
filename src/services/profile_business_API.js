import { getTokenFromLocalStorage } from 'utils/token'

// MAIN URL
// export const mainURL = "https://development.2geda.net";
export const mainURL = 'https://api.2geda.net'

// request options
const requestOptions = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    'Content-Type': 'application/json',
  },
}

// get current logged in user profile
export const getProfileData = async () => {
  try {
    const response = await fetch(
      `${mainURL}/api/account/profiles/retrieve/`,
      requestOptions
    )

    const data = await response.json()
    return data
  } catch (err) {
    throw new Error(err)
  }
}

// edit user profile
export const updateProfile = async (profileData) => {
  try {
    const response = await fetch(`${mainURL}/api/account/profiles/update/`, {
      ...requestOptions,
      method: 'PATCH',
      body: profileData,
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    })

    const data = await response.json()

    console.log(data)

    return data
  } catch (err) {
    throw new Error(err)
  }
}

// Get user posts

export const getUserPosts = async (parameter) => {
  try {
    const response = await fetch(
      `${mainURL}/api/feeds/post/?filter=${parameter}`,
      requestOptions
    )

    const data = await response.json()
    return data
  } catch (err) {
    throw new Error(err)
  }
}

// create new business
export const createBusiness = async (businessData) => {
  try {
    const response = await fetch(`${mainURL}/api/business/`, {
      ...requestOptions,
      method: 'POST',
      body: JSON.stringify(businessData),
    })

    const data = await response.json()

    return data
  } catch (err) {
    throw new Error(err)
  }
}

// get all current active business
export const getCurrentActiveBusiness = async () => {
  try {
    const response = await fetch(`${mainURL}/api/business/`, requestOptions)

    const data = await response.json()

    return data.data
  } catch (err) {
    throw new Error(err)
  }
}

// changing password
export const changePassword = async (credentials) => {
  try {
    const response = await fetch(`${mainURL}/api/auth/change-password/`, {
      ...requestOptions,
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        ...requestOptions.headers,
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    return data
  } catch (err) {
    throw new Error(err)
  }
}

// delete account
export const deleteUserAccount = async () => {
  try {
    const response = await fetch(`${mainURL}/api/auth/delete-account/`, {
      ...requestOptions,
      method: 'DELETE',
    })

    const data = await response.json()

    return data
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * --------------------
 * IMEI & SERIAL NUMBER
 * --------------------
 */
export const getGadgets = async () => {
  try {
    const response = await fetch(
      `${mainURL}/api/account/profile/phones/`,
      requestOptions
    )

    const data = await response.json()

    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const createGadget = async (info) => {
  try {
    const response = await fetch(`${mainURL}/api/account/profile/phones/`, {
      ...requestOptions,
      method: 'POST',
      body: JSON.stringify(info),
    })

    const data = await response.json()

    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const updateGadget = async (id) => {
  try {
    const response = await fetch(
      `${mainURL}/api/account/profile/phones/${id}`,
      {
        ...requestOptions,
        method: 'PATCH',
      }
    )

    const data = await response.json()

    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const deleteGadget = async (id) => {
  try {
    const response = await fetch(
      `${mainURL}/api/account/profile/phones/${id}`,
      {
        ...requestOptions,
        method: 'DELETE',
      }
    )

    const data = await response.json()

    return data
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * --------------------
 * REWARDS
 * --------------------
 */
export const getRewards = async () => {
  try {
    const response = await fetch(
      `${mainURL}/api/account/profile/rewards/`,
      requestOptions
    )

    const data = await response.json()

    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const getRewardsById = async (reward_id) => {
  try {
    const response = await fetch(
      `${mainURL}/api/account/profile/rewards/${reward_id}/`,
      requestOptions
    )

    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const claimReward = async (reward_id) => {
  try {
    const response = await fetch(
      `${mainURL}/api/account/profile/rewards/${reward_id}/claim/`,
      requestOptions
    )

    const data = await response.json()

    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const getAccountData = async () => {
  try {
    const response = await fetch(
      `${mainURL}/api/account/profiles/`,
      requestOptions
    )
    const data = await response.json()
    console.log(data)

    return data
  } catch (err) {
    console.log(err)
  }
}

export const stickerSingleUser = async (profile_id) => {
  try {
    const response = await fetch(
      `${mainURL}/api/account/profiles/${profile_id}/stick/`,
      requestOptions
    )
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}
export const createUserMedia = async (info) => {
  try {
    const response = await fetch(`${mainURL}/api/account/profile/medias/`, {
      ...requestOptions,
      method: 'POST',
      body: JSON.stringify(info),
    })
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

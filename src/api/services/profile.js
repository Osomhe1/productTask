import axios from "axios";
import { url } from "utils/index";
import { getLoginToken } from "./auth&poll";

export const getProfileData = async () => {
  const res = await axios.get(`${url}/account/profiles/retrieve/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};
export const getPublicProfileData = async (id) => {
  const res = await axios.get(`${url}/account/profiles/${id}/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const updateProfile = async (profileDetails) => {
  const res = await axios.put(
    `${url}/account/profiles/update/`,
    profileDetails,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res;
};

export const changePassword = async (credentials) => {
  const res = await axios.post(
    `${url}/auth/change-password/`,
    credentials,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const verifyUser = async (userData) => {
  const res = await axios.post(
    `${url}/account/profiles/verify/`,
    userData,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res;
};

export const deleteUserAccount = async () => {
  const res = await axios.delete(`${url}/auth/delete-account/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getPicturefiles = async () => {
  const res = await axios.get(`${url}/feeds/posts/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getAllRewards = async () => {
  const res = await axios.get(`${url}/account/profile/rewards/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const stickUser = async (userId) => {
  const res = await axios.get(`${url}/account/profiles/${userId}/stick/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const unstickUser = async (userId) => {
  const res = await axios.get(
    `${url}/account/profiles/${userId}/unstick/`,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const getAccounts = async () => {
  const res = await axios.get(`${url}/account/profiles/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getMedia = async () => {
  const res = await axios.get(`${url}/feeds/post/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getGadgets = async () => {
  const res = await axios.get(`${url}/account/profile/phones/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });

  console.log("get gadget res", res);
  return res;
};

export const createGadget = async (info) => {
  const res = await axios.post(`${url}/account/profile/phones/`, info, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return res;
};

export const updateGadget = async (id, info) => {
  const res = await axios.patch(
    `${url}/account/profile/phones/${id}/`,
    info,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  console.log(res);

  return res;
};

export const deleteGadget = async (id) => {
  const res = await axios.delete(`${url}/account/profile/phones/${id}/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });

  return res;
};

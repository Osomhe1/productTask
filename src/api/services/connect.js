import axios from "axios";
import { url } from "utils/index";
import { getLoginToken } from "./auth&poll";

export const NearbyUsersApi = async () => {
  const res = await axios.get(`${url}/connect/nearby-user/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const ANearbyUserApi = async (user_id) => {
  const res = await axios.get(`${url}/connect/nearby-user/${user_id}/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const StickUserApi = async (profile_id) => {
  const res = await axios.get(`${url}/account/profiles/${profile_id}/stick/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const UnStickUserApi = async (profile_id) => {
  const res = await axios.get(
    `${url}/account/profiles/${profile_id}/unstick/`,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const BusinessesNearbyApi = async () => {
  const res = await axios.get(`${url}/connect/nearby-business/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const ABusinessNearbyApi = async (business_id) => {
  const res = await axios.get(
    `${url}/connect/nearby-business/${business_id}/`,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const AccountUpdateApi = async (formdata) => {
  console.log("FormData Contents:", Object.fromEntries(formdata));

  const res = await fetch(`${url}/account/profiles/update/`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
    body: formdata,
  });

  const data = await res.json();
  console.log("data", data);

  return data;
};

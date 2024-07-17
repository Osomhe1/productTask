import axios from "axios";
import { url } from "utils/index";

export const getToken = () => {
  const token = localStorage.getItem("authTOken");
  return token;
};

export const getLoginToken = () => {
  const token = localStorage.getItem("authToken");
  return token;
};

/**
 * Hotels Api
 */

export const CreateHotelApi = async (pollData) => {
  const res = await axios.post(
    `${url}/hotels/hotels/`,
    { ...pollData },
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const getHotels = async () => {
  const res = await axios.get(`${url}/hotels/hotels`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};
export const getClosedHotelsByLocation = async () => {
  const res = await axios.get(`${url}/hotels/hotels`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};


export const getPromotedHotels = async () => {
  const res = await axios.get(`${url}/hotels/hotels/promoted`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getMyHotels = async () => {
  const res = await axios.get(`${url}/hotels/hotels/my-hotels`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

// export const UpdatePollApi = async (pollData, pollID) => {
//   console.log("editpoll", pollData);
//   console.log("editpollid", pollID);
//   const res = await axios.put(
//     `${url}/polls/user/${pollID}/`,
//     { ...pollData },
//     {
//       headers: {
//         Authorization: `Bearer ${getLoginToken()}`,
//       },
//     }
//   );
//   return res;
// };

// export const DeletePollApi = async (pollID) => {
//   const res = await axios.delete(`${url}/polls/user/${pollID}/`, {
//     headers: {
//       Authorization: `Bearer ${getLoginToken()}`,
//     },
//   });
//   return res;
// };




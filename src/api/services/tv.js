import axios from "axios";
import { url } from "utils/index";
import { getLoginToken } from "./auth&poll";

export const getTvChannel = async () => {
  const res = await axios.get(`${url}/tv/user/channels/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getSingleTvChannel = async (id) => {
  const res = await axios.get(`${url}/tv/channel/?channel_id=${id}`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });

  return res;
};

export const updateTvChannel = async (tvDetails, id) => {
  const res = await axios.patch(
    `${url}/tv/channel/?channel_id=${id}`,
    tvDetails,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res;
};

export const createTvChannel = async (formData) => {
  const res = await axios.post(`${url}/tv/channel/`, formData, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

export const createMovieFn = async (formData) => {
  const res = await axios.post(`${url}/tv/channel/videos/`, formData, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

export const updateMovieFn = async (formData, id) => {
  const res = await axios.patch(
    `${url}/tv/channel/videos/?video_id=${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res;
};

export const getLiked = async () => {
  const res = await axios.get(`${url}/tv/like/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};
export const likeMovieFn = async (formData) => {
  const res = await axios.post(`${url}/tv/like/`, formData, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

export const unlikeMovieFn = async (id) => {
  const res = await axios.delete(`${url}/tv/like/?video_id=${id}`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

export const getAllMovies = async () => {
  const res = await axios.get(`${url}/tv/videos/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getAllMoviesSearch = async (queryString) => {
  const res = await axios.get(`${url}/tv/videos/search/?q=${queryString}`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getUserMoviesFn = async (id) => {
  const res = await axios.get(`${url}/tv/channel/videos/?channel_id=${id}`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });

  return res;
};

export const incrementPlays = async (id) => {
  const res = await axios.post(`${url}/tv/videos/${id}/increment-plays/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const deleteMovie = async (id) => {
  const res = await axios.delete(`${url}/tv/video/${id}/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });

  console.log('delete res', res)
  return res;
};

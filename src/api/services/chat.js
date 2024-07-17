import axios from 'axios';
import { url } from 'utils/index';
import { getLoginToken } from './auth&poll';

export const getDirectConversation = async () => {
   const res = await axios.get(`${url}/chat/direct_messages`, {
      headers: {
         Authorization: `Bearer ${getLoginToken()}`,
      },
   });
   return res;
};

export const getDirectConversationById = async (id) => {
   const res = await axios.get(`${url}/chat/conversation/${id}/`, {
      headers: {
         Authorization: `Bearer ${getLoginToken()}`,
      },
   });
   return res;
};
export const getPublicConversation = async () => {
   const res = await axios.get(`${url}/chat/public_messages/`, {
      headers: {
         Authorization: `Bearer ${getLoginToken()}`,
      },
   });
   return res;
};

export const getConversationByMember = async () => {
   const res = await axios.get(`${url}/chat/conversation/`, {
      headers: {
         Authorization: `Bearer ${getLoginToken()}`,
      },
   });
   return res;
};

export const getMessages = async () => {
   const res = await axios.get(`${url}/chat/send-message`, {
      headers: {
         Authorization: `Bearer ${getLoginToken()}`,
      },
   });
   console.log('responses');
   return res;
};
export const MyMessages = async (userId) => {
   const res = await axios.get(`${url}/chat/get-messages/${userId}/`, {
      headers: {
         Authorization: `Bearer ${getLoginToken()}`,
      },
   });
   return res;
};

export const sendMessage = async (info) => {
   const data = JSON.stringify(info);
   const res = await axios.post(`${url}/chat/send-message/`, data, {
      headers: {
         Authorization: `Bearer ${getLoginToken()}`,
         'Content-Type': 'application/json',
      },
   });

   return res;
};

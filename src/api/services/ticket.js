import axios from "axios";
import { url } from "utils/index";
import { getLoginToken } from "./auth&poll";

export const getAllEvents = async () => {
  const res = await axios.get(`${url}/event/all_event/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getAllTickets = async () => {
  const res = await axios.get(`${url}/event/dropdown-search/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getOverview = async () => {
  const res = await axios.get(`${url}/event/account-overview/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getEventDetail = async (id) => {
  const res = await axios.get(`${url}/event/${id}/event-detail/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getMyEvents = async () => {
  const res = await axios.get(`${url}/event/my-events/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getTicketSummary = async (eventID) => {
  const res = await axios.get(`${url}/event/${eventID}/event-summary/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getTicketPurchaseReport = async (eventID, ticketPurchaseID) => {
  const res = await axios.get(
    `${url}/event/${eventID}/ticket-report/${ticketPurchaseID}`,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const createEvent = async (ticketData) => {
  const res = await axios.post(`${url}/event/create-event/`, ticketData, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
      "content-type": "multipart/form-data",
    },
  });
  return res;
};

export const updateEvent = async (ticketData, eventID) => {
  const res = await axios.put(
    `${url}/event/${eventID}/update-event/`,
    ticketData,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
        "content-type": "multipart/form-data",
      },
    }
  );
  return res;
};

export const getEventDetails = async (eventID) => {
  const res = await axios.get(`${url}/event/tickets/${eventID}/event-detail/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getWithdrawal = async (data) => {
  const res = await axios.post(`${url}/event/withdraw/withdrawal-request/`, data, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
      "content-type": "multipart/form-data"
    },
  });
  return res;
};

export const getPayoutHistory = async () => {
  const res = await axios.get(`${url}/event/withdraw/payout-history/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const getTicketReport = async () => {
  const res = await axios.get(`${url}/event/ticket-report/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const promoteTicket = async (data, id) => {
  const res = await axios.post(`${url}/event/${id}/promote-event/`, data, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const purchaseTicket = async (formData, id) => {
  const res = await axios.post(`${url}/event/purchase-ticket/${id}/buy-ticket/`, formData, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
      "content-type": "multipart/form-data",
    },
  });
  return res;
};

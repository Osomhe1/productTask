export const day = Array.from({ length: 31 }, (_, i) => ({
  label: i + 1,
  value: i + 1,
}));

export const month = Array.from({ length: 12 }, (_, i) => ({
  label: i + 1,
  value: i + 1,
}));

export const months = Array.from({ length: 12 }, (_, i) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return {
    label: monthNames[i],
    value: monthNames[i],
  };
});

export const years = Array.from({ length: 100 }, (_, i) => ({
  label: new Date().getFullYear() - i,
  value: new Date().getFullYear() - i,
}));

export const genderData = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Rather not say", value: "None" },
];

export const category = [
  {
    label: "Personal",
    value: "personal",
  },
  {
    label: "Company",
    value: "company",
  },
];

export const banks = [
  {
    label: "Wema bank",
    value: "Wema bank",
  },

  {
    label: "First bank",
    value: "First bank",
  },

  {
    label: "Stanbic bank",
    value: "Stanbic bank",
  },
];

export const advertCategory = [
  {
    label: "unknown",
    value: "unknown",
  },

  {
    label: "unknown",
    value: "unknown",
  },

  {
    label: "unknown",
    value: "unknown",
  },

  {
    label: "unknown",
    value: "unknown",
  },
];

export const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  };

  return new Date(date).toLocaleString("en-US", options);
};

// formatting business opening and closing info
export const formatBusinessAvailabilityTime = (timesInCollection) => {
  const open_from = timesInCollection[0].split(" ")[0];
  const close_at = timesInCollection[1].split(" ")[0];

  return {
    open_from,
    close_at,
  };
};

export const convertPostTime = (timeStamp) => {
  let renderedTime = "";
  const dateCreated = new Date(timeStamp);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - dateCreated.getTime();

  // Convert milliseconds to seconds
  const secondsPassed = Math.floor(timeDifference / 1000);
  if (secondsPassed < 60) {
    renderedTime = secondsPassed < 2 ? "now" : `${secondsPassed} secs ago`;
  } else if (secondsPassed < 3600) {
    renderedTime = `${Math.floor(secondsPassed / 60)} min${
      Math.floor(secondsPassed / 60) < 2 ? "" : "s"
    } ago`;
  } else if (secondsPassed < 86400) {
    renderedTime = `${Math.floor(secondsPassed / 3600)} hr${
      Math.floor(secondsPassed / 3600) < 2 ? "" : "s"
    } ago`;
  } else {
    renderedTime = `${Math.floor(secondsPassed / 86400)} day${
      Math.floor(secondsPassed / 86400) < 2 ? "" : "s"
    } ago`;
  }

  return renderedTime;
};

export const withdrawalBanks = [
  "zenith bank",
  "united bank for africa",
  "access bank",
  "access bank (diamond)",
  "alat by wema",
  "carbon",
  "ecobank nigeria",
  "excel finance bank",
  "fairmoney microfinance bank",
  "fidelity bank",
  "first bank of nigeria",
  "first city monument bank",
  "globus bank",
  "gomoney",
  "guaranty trust bank",
  "heritage bank",
  "jaiz bank",
  "keystone bank",
  "kuda bank",
  "lotus bank",
  "opay digital services limited (opay)",
  "optimus bank limited",
  "paga",
  "palmpay",
  "parallex bank",
  "paystack-titan",
  "pocket app",
  "polaris bank",
  "premiumtrust bank",
  "providus bank",
  "signature bank ltd",
  "stanbic ibtc bank",
  "standard chartered bank",
  "sterling bank",
  "suntrust bank",
  "taj bank",
  "titan bank",
  "union bank of nigeria",
  "unity bank",
  "wema bank",
];
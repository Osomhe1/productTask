import React from "react";
import EventContextTwo from "./EventContextTwo";
import { useState } from "react";

const EventTwoContextProvider = ({ children }) => {
  const [ticket, setTicket] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);

  return (
    <EventContextTwo.Provider
      value={{ ticket, quantity, price, setTicket, setQuantity, setPrice }}
    >
      {children}
    </EventContextTwo.Provider>
  );
};

export default EventTwoContextProvider;

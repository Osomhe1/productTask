import React from "react";
import { useState } from "react";
import EventContextThree from "./EventContextThree";

const EventThreeContextProvider = ({ children }) => {
   const [isPublicToggled, setPublicToggled] = useState(true);
   const [feesOption, setFeesOption] = useState(true);

  return (
    <EventContextThree.Provider
      value={{ feesOption, setFeesOption, isPublicToggled, setPublicToggled }}
    >
      {children}
    </EventContextThree.Provider>
  );
};

export default EventThreeContextProvider;

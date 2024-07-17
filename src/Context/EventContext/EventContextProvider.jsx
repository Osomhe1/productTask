import React from "react";
import EventContextOne from "./EventContextOne";
import { useState } from "react";

const EventOneContextProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [eventImage, setEventImage] = useState(null);
  const [venue, setVenue] = useState(null);
  const [venueAddress, setVenueAddress] = useState(null);

  return (
    <EventContextOne.Provider
      value={{
        title,
        setTitle,
        description,
        setDescription,
        eventImage,
        setEventImage,
        venue,
        setVenue,
        venueAddress,
        setVenueAddress,
      }}
    >
      {children}
    </EventContextOne.Provider>
  );
};

export default EventOneContextProvider;

// EventContext.js
import { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventDescription, setEventDescription] = useState(null);
  const [eventLocation, setEventLocation] = useState(null);
  const [eventTime, setEventTime] = useState(null);
  const [eventTicket, setEventTicket] = useState([]);

  const setSelectedEventData = (data) => {
    setSelectedEvent(data);
  };

  return (
    <EventContext.Provider
      value={{
        selectedEvent,
        setSelectedEventData,
        eventDescription,
        setEventDescription,
        eventLocation,
        setEventLocation,
        eventTime,
        setEventTime,
        eventTicket,
        setEventTicket
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  return useContext(EventContext);
};

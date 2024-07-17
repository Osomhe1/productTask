import React from "react";
import Switchtoggle from "./Switchtoggle";
import Stacked from "components/newCommerce/shared/Stacked";

const Datetimeselect = ({ always, availabilitydatas, setDatas }) => {
  const handleTimeChange = (day, type, value) => {
    setDatas((prevDatas) => ({
      ...prevDatas,
      [day]: {
        ...prevDatas[day],
        [type]: value,
      },
    }));
  };

  const dateAvailable = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const handletoggle = (d) => {
    setDatas((prevdatas) => ({
      ...prevdatas,
      [d]: {
        ...prevdatas[d],
        isChecked: !prevdatas[d].isChecked,
      },
    }));
  };
  const checkDisabled = (d) => {
    return !availabilitydatas[d].isChecked;
  };

  return (
    <>
      {dateAvailable.map((day, index) => (
        <Stacked d={"row"} ai={"center"} key={index} g={2} jc={"space-between"}>
          <Switchtoggle
            label={day}
            value={availabilitydatas[day]?.isChecked || false}
            name={`Av-${day}`}
            disabled={always}
            checked={availabilitydatas[day]?.isChecked || false}
            onChange={() => handletoggle(day)}
          />
          {/* start time-dropdown-select */}
          <div className="relative">
            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none ">
              <svg
                className="w-8 h-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
              type="time"
              id={`start-${day}`}
              className="bg-gray-50 border leading-none border-gray-300 text-[1.3rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min="09:00"
              max="18:00"
              value={availabilitydatas[day]?.startTime || "09:00"}
              onChange={(e) =>
                handleTimeChange(day, "startTime", e.target.value)
              }
              disabled={checkDisabled(day)}
              required
            />
          </div>
          <div className="text-[1.2rem]">To</div>
          {/* end-time */}
          <div className="relative">
            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none ">
              <svg
                className="w-8 h-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
              type="time"
              id={`end-${day}`}
              className="bg-gray-50 border leading-none border-gray-300 text-[1.3rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min="09:00"
              max="18:00"
              value={availabilitydatas[day]?.endTime || "17:00"}
              onChange={(e) => handleTimeChange(day, "endTime", e.target.value)}
              disabled={checkDisabled(day)}
              required
            />
          </div>
        </Stacked>
      ))}
    </>
  );
};

export default Datetimeselect;

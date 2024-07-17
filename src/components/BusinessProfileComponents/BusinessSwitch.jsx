import Switch from "react-switch";
import { TimePicker } from "antd";
import { formatBusinessAvailabilityTime } from "utils/helper";

const BusinessSwitch = ({ day, type, setData, checked }) => {
  const handleChange = () => {
    setData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [type]: !checked,
      },
    }));
  };

  const onChange = (_, timeString) => {
    const availableTimes = formatBusinessAvailabilityTime(timeString);

    setData((prev) => ({
      ...prev,
      originalAvailability: {
        ...prev.originalAvailability,
        [type]: availableTimes,
      },
    }));
  };

  return (
    <div className="flex items-center gap-[10px]">
      <label htmlFor="small-radius-switch">
        <Switch
          checked={checked || false}
          onChange={handleChange}
          handleDiameter={28}
          offColor="#fff"
          onColor="#0A75C3"
          offHandleColor="#fafafa"
          onHandleColor="#0e171e"
          height={40}
          width={70}
          uncheckedIcon={
            <div className="react_switch_icon text-[#898989]">{day}</div>
          }
          checkedIcon={
            <div className="react_switch_icon text-[#ffffff]">{day}</div>
          }
          uncheckedHandleIcon={
            <div className="react_switch_handler bg-[#cfcfcfdf]"></div>
          }
          checkedHandleIcon={
            <div className="react_switch_handler bg-[#fff]"></div>
          }
          className="border !border-[#d0d0d091]"
          id="react_switch"
        />
      </label>

      <TimePicker.RangePicker
        use12Hours
        format="h:mm:ss A"
        onChange={onChange}
        className="ant_range_picker"
        disabled={!checked}
      />
    </div>
  );
};

export default BusinessSwitch;

const Switchtoggle = ({ value, label, name, checked, onChange }) => {
  return (
    <div className="toggle_container_sell">
      <label className="inline-flex cursor-pointer items-center m-0 select-none">
        <input
          type="checkbox"
          value={value}
          name={name}
          className="peer sr-only "
          checked={checked}
          onChange={onChange}
        />

        <div className="peer border-[#d9d9d9] border border-solid relative h-[3.1rem] w-[7.8rem]  rounded-full bg-[#fff] after:absolute after:start-[5px] after:top-[6px] after:h-[1.82rem] after:w-[1.82rem] after:rounded-full after:border after:border-gray-300 after:bg-[#D9D9D9] after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-[4.5rem] peer-checked:after:border-white  peer-checked:after:bg-white  rtl:peer-checked:after:-translate-x-[full] dark:peer-focus:ring-blue-800">
          <span
            className="absolute right-5 text-[15px] top-[12%]  select-none transition-all"
            style={{ color: "rgba(0, 0, 0, 0.5)" }}
          >
            {label}
          </span>
        </div>
      </label>
    </div>
  );
};
export default Switchtoggle;

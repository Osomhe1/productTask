const ProfileInput = ({ placeholder, onChange, name, value }) => {
  return (
    <div className="border h-[50px] w-full rounded relative px-3 mt-2 flex">
      <label className="absolute -top-4 left-4 z-10  bg-white text-neutral-400">{placeholder}</label>
      <div className="">
        <input
          type="text"
          onChange={onChange}
          name={name}
          value={value}
          className="border-none outline-none text-[15px] absolute top-3 left-0 "
          placeholder=""
        />
      </div>
    </div>
  );
};

export default ProfileInput;


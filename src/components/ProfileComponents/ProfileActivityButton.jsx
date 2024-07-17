const ProfileActivityButton = ({
  toggleMedia,
  allMyMedia,
  title,
  tab,
  setTab,
}) => {
  const count = tab === title ? allMyMedia?.length : "";

  const handleClick = (arg) => {
    setTab(arg);
    toggleMedia(arg);
  };


  return (
    <button
      className={`px-[2rem] flex items-center gap-2 py-[0.8rem] rounded-[25px] text-[12px] font-light border-none cursor-pointer ${
        tab === title ? "bg-[#4f0da3] text-white" : "text-gray-600"
      } lg:text-[15px] font-medium`}
      onClick={() => handleClick(title)}
    >
      <span>{title}</span>{" "}
      <span
        className={`${
          !count ? "hidden" : "lg:block"
        } py-[2px] px-[6px] rounded-[3px] text-[11px] bg-white text-[#4f0da3] hidden  my-0 mx-[4px]`}
      >
        {count}
      </span>
    </button>
  );
};

export default ProfileActivityButton;

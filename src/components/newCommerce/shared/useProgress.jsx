const Progress = ({ w }) => {
  return (
    <div
      className="relative rounded-lg w-[210px] h-[5px]"
      style={{ background: "rgba(242, 244, 247, 1)" }}
    >
      <div
        className="absolute rounded-lg left-0 bg-[#4f0da3] h-full"
        style={{ width: `${w}` }}
      ></div>
    </div>
  );
};

export default Progress;

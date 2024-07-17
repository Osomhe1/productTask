
const ActionButton = ({
  bg,
  label,
  type,
  onClick,
  loading,
  className = "act-btn-cont w-full",
  disabled,
}) => {
  
  return (
    <div className={className}>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`action-btn ${bg} w-full hover:bg-purple-700 cursor-pointer transition duration-500 text-[16px]`}
      >
        {loading ? "Loading..." : label}
      </button>
    </div>
  );
};

export default ActionButton;

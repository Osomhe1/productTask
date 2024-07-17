const InputField = ({ placeholder, type, onChange, value }) => {
  return (
    <div className="inp-cont">
      <input
        type={type}
        className="form-inp"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;

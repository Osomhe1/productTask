const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        fontSize: "12px",
        color: "red",
        letterSpacing: "1px",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;

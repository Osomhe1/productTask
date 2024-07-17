const ContainerError = ({ height = 85, unit = "vh" }) => {
  return (
    <div className={`h-[${height}${unit}] flex justify-center items-center mt-8`}>
      <h2>Please check your internet connection</h2>
    </div>
  );
};

export default ContainerError;

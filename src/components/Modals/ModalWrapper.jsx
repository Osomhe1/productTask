const ModalWrapper = ({ children }) => {
  return (
    <div className="shadow-sm w-full h-screen relative bg-[#fff] lg:w-[65%] lg:h-auto xl:w-[50%] ">
      {children}
    </div>
  );
};

export default ModalWrapper;

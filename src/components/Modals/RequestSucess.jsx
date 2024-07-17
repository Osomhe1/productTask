import useGetEventDetails from "Hooks/useGetEventDetails";

const RequestSucess = () => {

  const {handleRequestClose} = useGetEventDetails()
  return (
    <div className="success-request-container">
      <img src="images/em2.png" alt="" className="mx-auto"/>
      <div className="with-txt">
        Your withdrawal request has been recieved and is being processed
      </div>
      <button
        onClick={handleRequestClose}
        className="w-full mt-6 bg-[#4f0da3] text-[#fff] py-3 text-[14px] hover:opacity-90 rounded"
      >
        Back to home
      </button>
      
    </div>
  );
};

export default RequestSucess;

const WrongProfilePage = ({ height = 85, unit = "vh" }) => {
    return (
      <div className={`h-[${height}${unit}] flex justify-center items-center mt-8`}>
        <h2>Page does not exist</h2>
      </div>
    );
  };
  
  export default WrongProfilePage
  
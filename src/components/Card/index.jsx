

const Card = ({ icon, heading, paragraph }) => {
  return (
    <div className="mt-6 md:mt-0">
      <div className="flex gap-3 items-center">
        <div className="bg-[#f4e7ff] w-[25px] h-[25px] flex items-center justify-center rounded">
          <span className="text-purple-600">{icon}</span>
        </div>
        <h4 className="text-[18px] font-bold text-purple-700 mt-2">{heading}</h4>
      </div>

      <p className="text-[17px] mt-4 md:mt-6" >{paragraph}</p>
    </div>
  );
};

export default Card;

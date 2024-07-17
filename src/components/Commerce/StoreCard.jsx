import { BiDotsHorizontalRounded } from "react-icons/bi";

const StoreCard = ({ Data }) => {
  return (
    <>
      {Data.map((item, index) => (
        <div className="store-card-cont" key={index}>
          <div className="left-store-bx-col">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg"
              alt=""
            />
            <div className="store-det-bx">
              <div className="store-nmm">{item.name}</div>
              <div className="store-main-pro">{item.store}</div>
            </div>
          </div>
          <div className="right-cont-bx">
            <BiDotsHorizontalRounded />
          </div>
        </div>
      ))}
    </>
  );
};

export default StoreCard;

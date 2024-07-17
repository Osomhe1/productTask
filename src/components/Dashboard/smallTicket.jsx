import "./second.css";
const SmallTicketCard = ({
  handleEventDetailContainerClick,
  description,
  date,
  location,
  formatedDate,
  eventImage,
  eventId,
}) => {
  return (
    <div className="small-ticket-card">
      <div className="im-tic-con">
        <div className="live-tict-lo">
          <div className="live-tic">Live event</div>
        </div>
        <div className="live-tict-im">
          <img  className="pics" src="images/lo5.png" alt="" />
        </div>
        {eventImage !== null ? (
          <img className="pics" src={eventImage} alt="" />
        ) : (
          <img className="pics" src="images/pic1.png" alt="" />
        )}
      </div>
      <div className="tic-title">{description !== null ? description : ""}</div>
      <div className="date-loc">
        {formatedDate !== null ? formatedDate : ""} -{" "}
        {location !== null ? location : ""}
      </div>

      <div className="tic-btn-con">
        <button
          className="tick-btn"
          onClick={() => handleEventDetailContainerClick(eventId)}
        >
          Get ticket
        </button>
      </div>
    </div>
  );
};

export default SmallTicketCard;

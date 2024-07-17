import PostImage from "../../assets/images/sample-post-image.png"
import ImageLogo from "../../assets/images/logo-white.png"

import "./second.css";
const SmallTicketPromoteCard = ({
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
					<img src={ImageLogo} alt="" />
				</div>
				<img className="ticket-image" src={eventImage || PostImage} alt="" />
			</div>
			<div className="tic-title">{description !== null ? description : ""}</div>
			<div className="date-loc">
				{formatedDate !== null ? formatedDate : ""} -{" "}
				{location !== null ? location : ""}
			</div>

			<div className="tic-btn-con">
				<a
					href={`https://www.me.com`}
					className="tick-btn"
				>
					Get ticket
				</a>
			</div>
		</div>
	);
};

export default SmallTicketPromoteCard;

import { AiOutlineClose } from "react-icons/ai";

const TicRepDetail = ({ handleTicClose }) => {
  return (
    <div className="tic-cont-det">
      <div className="rep-tic-det-bx flex">
        <div className="tic-tc">Ticket details</div>
        <AiOutlineClose className="cls-post" onClick={handleTicClose} />
      </div>
      <div className="lower-box">
        <div className="row-line flex">
          <div className="buyer-id-bx">
            <div className="byr-ct">Buyer</div>
            <div className="det-byr-nm">Awoms Kelechi</div>
          </div>
          <div className="buyer-id-bx">
            <div className="byr-ct">Ticket ID</div>
            <div className="det-byr-nm">#8728891</div>
          </div>
        </div>
        <div className="ticket-det-container">
          <div className="byr-ct">Ticket status</div>
          <div className="all-row-bx flex">
            <div className="tic-btnn flex">3 tickets</div>
            <div className="tic-btnn flex regular">2 Regular</div>
            <div className="tic-btnn flex vip">1 VIP</div>
          </div>
        </div>
        <div className="amout-box">
          <div className="byr-ct">Amount paid</div>
          <div className="amount-pric"># 30,000.00</div>
        </div>
      </div>
    </div>
  );
};

export default TicRepDetail;

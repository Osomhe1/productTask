const ChatShortMessage = ({ visib, nota, name, text, handleGotoMessagBox }) => {
  return (
    <div className="short-mess-container chat-ad" onClick={handleGotoMessagBox}>
      <div className="pro-name-cont">
        <img
          src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
          alt=""
        />
        <div className="name-txt-sot">
          <div className="pro-name-tst">{name}</div>
          <div className="sot-text">{text}</div>
        </div>
      </div>
      <div className="time-unread">
        <div className={`${nota} pro-time-tx col`}>12:00pm</div>
        <div className={`${visib} unread-sq`}>5</div>
      </div>
    </div>
  );
};

export default ChatShortMessage;

const Status = ({ handleStickerStatusClick, data }) => {
  return (
    <div className="life-satus" onClick={handleStickerStatusClick}>
      <div className="em-im">
        <img
          src="https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          alt=""
        />
      </div>
      <div className="status-text">{data.name}</div>
    </div>
  );
};

export default Status;

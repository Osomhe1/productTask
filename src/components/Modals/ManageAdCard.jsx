const ManageAdCard = () => {
  return (
    <>
      {Array.from({ length: 15 }, (_, i) => i + 1).map((arr) => (
        <div className='mana-card-ad-container' key={arr}>
          <div className='ad-title'>Limited Time Offer</div>
          <div className='ad-cat-txt'>Ad category : Flash Sales</div>
          <div className='expire-date'>Expires in {arr + 1} days</div>
        </div>
      ))}
    </>
  );
};

export default ManageAdCard;

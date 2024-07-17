const HashtagModal = ({ hashtags, onHashtagClick }) => {
  return (
    <div className="hash-tag-modal-container">
      {hashtags.length === 0 ? (
        <div className="tag-hash-txt">No suggestions</div>
      ) : (
        hashtags.map((hashtag, index) => (
          <div
            key={index}
            className="tag-hash-txt"
            onClick={() => onHashtagClick(hashtag)}
          >
            {hashtag}
          </div>
        ))
      )}
    </div>
  );
};

export default HashtagModal;

const ProfileMessageLikeBox = ({ children, header, newMessage }) => {
  return (
    <div className='box_profile_message'>
      <div className='box_profile_message_top'>
        <h2>{header}</h2>

        <div>{newMessage}</div>
      </div>

      <ul className='profile_chat_messages'>{children}</ul>
    </div>
  );
};

export default ProfileMessageLikeBox;

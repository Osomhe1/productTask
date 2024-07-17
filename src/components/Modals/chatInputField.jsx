import { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import AttachModal from "./AttachModal";

const ChatInputField = ({ isUser, onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showAttachModal, setShowAttachModal] = useState(false);

  const handleAttachmentClick = () => {
    setShowAttachModal(!showAttachModal);
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter" && message.trim() !== "") {
  //     onSendMessage(message, isUser);
  //     setMessage("");
  //   }
  // };
  return (
    <>
      <div className="att-contt">{showAttachModal && <AttachModal />}</div>
      <div className={`chat-input-field ${isUser ? "user-input" : ""}`}>
        <textarea
          type="text"
          className={`mess-inpt ${isUser ? "user-message" : ""}`}
          placeholder="Type your message here"
          value={message}
          name="message"
          onChange={handleChange}
          // onKeyPress={handleKeyPress}
        />
        <GrAttachment className="att-icon" onClick={handleAttachmentClick} />
      </div>
    </>
  );
};

export default ChatInputField;

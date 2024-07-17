import { useEffect } from "react";
import { useState } from "react";
import { MdSend } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const RecInputField = ({
  isRecording,
  onStop,
  recordedAudio,
  handleDeleteItem,
}) => {
  const [audioURL, setAudioURL] = useState("");

  useEffect(() => {
    if (recordedAudio) {
      setAudioURL(URL.createObjectURL(recordedAudio));
    }
  }, [recordedAudio]);
  return (
    <>
      {/* <div className={`chat-input-field `}> */}
      <div className="pic-cont-box">
        {!audioURL && isRecording && (
          <div className="np-pic-bx">Recording...</div>
        )}
        <div className="np-pic-bx">
          {audioURL && (
            <audio controls>
              <source src={audioURL} type="audio/wav" />
              Your browser does not support the audio tag.
            </audio>
          )}
        </div>

        <hr className="ln-hr" />
        <div className="inp-sen-send">
          <MdSend className="cur" onClick={onStop} />

          <MdSend className="cur" />
          <AiFillDelete className="cur" onClick={handleDeleteItem} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default RecInputField;

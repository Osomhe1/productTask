import React, { useState } from "react";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { BsAndroid2, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

const docUrl = "https://docs.google.com/gview?url=";
const docUrlPrefix = "&embedded=true";

const extractFileName = (url) => {
  const urlObj = new URL(url);
  const path = urlObj?.pathname;
  const fileName = path.slice(path.lastIndexOf("/") + 1);

  const maxLength = 15;
  const fileExtension = fileName.slice(fileName.lastIndexOf("."));
  const nameWithoutExtension = fileName.slice(0, fileName.lastIndexOf("."));

  if (nameWithoutExtension.length > maxLength) {
    return nameWithoutExtension.slice(0, maxLength) + fileExtension;
  }

  return fileName;
};

const ProfileMedia = ({ mediaFile }) => {
  const [profileState, setProfileState] = useState(false);
  const renderFileIcon = (fileType) => {
    if (fileType?.endsWith("pdf")) {
      return <BsFillFileEarmarkPdfFill className="icon-dw pdf" size={24} />;
    }
    if (fileType?.endsWith("doc") || fileType?.endsWith("docx") || fileType?.endsWith("document")) {
      return <SiMicrosoftword className="icon-dw word" size={24} />;
    }
    if (fileType?.endsWith("xls") || fileType?.endsWith("xlsx")) {
      return <SiMicrosoftexcel className="icon-dw excel" size={24} />;
    }
    if (fileType?.endsWith("ppt")) {
      return <PiMicrosoftPowerpointLogo className="icon-dw prese" size={24} />;
    }
    if (fileType?.endsWith("exe")) {
      return <PiMicrosoftPowerpointLogo className="icon-dw prese" size={24} />;
    }
    if (fileType?.endsWith("apk")) {
      return <BsAndroid2 className="icon-dw apk" size={24} />;
    }
  };

  const handleProfileImage = () => {
    setProfileState(true);
  };

  if (mediaFile?.file_type?.includes("audio/mpeg")) {
    return (
      <div>
        <p>{extractFileName(mediaFile?.file)}</p>
        <audio controls>
          <source src={mediaFile.file} type={mediaFile.file_type} />
        </audio>
      </div>
    );
  }
  if (mediaFile?.file_type?.includes("audio/wav")) {
    return (
      <div>
        <p>Voice note</p>
        <audio controls>
          <source src={mediaFile.file} type={mediaFile.file_type} />
        </audio>
      </div>
    );
  }
  if (mediaFile?.file_type?.includes("image")) {
    return (
      <>
        {profileState && (
          <div className="user_profile_image">
            <div className="cancel_btn">
              <button onClick={() => setProfileState(false)}>
                <FaTimes className="arrow_back" />
              </button>
            </div>

            <div className="user_image_container2">
              <img src={mediaFile.file} alt="Profile" />
            </div>
          </div>
        )}
        <img
          src={mediaFile.file}
          alt=""
          className="w-full h-[400px] lg:h-[300px] cursor-pointer object-cover rounded"
          onClick={handleProfileImage}
        />
      </>
    );
  }
  if (mediaFile?.file_type?.includes("video")) {
    return (
      <video className="w-full h-[300px] object-cover rounded" muted controls>
        <source src={mediaFile.file} type={mediaFile.file_type} />
        Your browser does not support the video tag.
      </video>
    );
  }
  if (mediaFile?.file_type?.includes("application")) {
    return (
      <>
        <a
          href={docUrl + mediaFile.file + docUrlPrefix}
          rel="noopener noreferrer"
          className="document-media"
          target="_blank"
        >
          <div>{renderFileIcon(mediaFile?.file_type)}</div>
          <p>{extractFileName(mediaFile?.file)}</p>
        </a>
        <a
          href={mediaFile.file}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="document-media-btn"
        >
          <IoCloudDownloadSharp /> Download
        </a>
      </>
    );
  }
};

export default ProfileMedia;

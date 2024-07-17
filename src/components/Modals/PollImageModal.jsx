import React from "react";
import { FaTimes } from "react-icons/fa";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[999]">
      <div className="max-w-screen-lg max-h-screen overflow-auto mx-10 md:mx-0 ">
        <div
          onClick={onClose}
          className="cursor-pointer flex justify-end w-full mb-10"
        >
          <FaTimes className="text-white" size={30} />
        </div>
        <img
          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Zoomed pics"
          className="w-[600px] h-[300px] lg:h-[400px] "
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ImageModal;

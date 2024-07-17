import { useState } from "react";
import StatusModal from "../Modals/StatusModal";
import Status from "./Status";
import { FaPlus } from "react-icons/fa6";
import StickerStatusModal from "../Modals/StickerStatusModal";

const data = [
  {
    id: 1,
    name: "Christophe...",
    profile_image:
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/427117o_1cutvnri21qkbgv6keeaudspl18.jpg?w=970&ssl=1",
    images: [
      "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/427117o_1cutvnri21qkbgv6keeaudspl18.jpg?w=970&ssl=1",
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    ],
  },
  {
    id: 2,
    name: "Faith",
    profile_image: "https://example.com/your_profile_image_2.jpg",
    images: [
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/427117o_1cutvnri21qkbgv6keeaudspl18.jpg?w=970&ssl=1",
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
    ],
  },
  {
    id: 3,
    name: "WizCode",
    profile_image:
      "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
    images: [
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/427117o_1cutvnri21qkbgv6keeaudspl18.jpg?w=970&ssl=1",
    ],
  },
  {
    id: 4,
    name: "Silent",
    profile_image:
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/427117o_1cutvnri21qkbgv6keeaudspl18.jpg?w=970&ssl=1",
    images: [
      "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      "",
    ],
  },
];

const StatusContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStickerStatusModalOpen, setIsStickerStatusModalOpen] =
    useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const handleStickerStatusClick = (id) => {
    setSelectedUserId(id); // Set the selected user ID
    setIsStickerStatusModalOpen(true);
  };
  const handleCloseStickerStatusClick = () => {
    setIsStickerStatusModalOpen(false);
  };
  const handleMainContainerClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseMainContainerClick = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <div className="modal-full-container">
          <StatusModal
            handleCloseMainContainerClick={handleCloseMainContainerClick}
          />
        </div>
      )}
      {isStickerStatusModalOpen && (
        <div className="modal-full-container">
          <StickerStatusModal
            handleCloseStickerStatusClick={handleCloseStickerStatusClick}
            selectedUserId={selectedUserId}
          />
        </div>
      )}
      <div className="life-satus" onClick={handleMainContainerClick}>
        <div className="em-im">
          <FaPlus />
        </div>
        <div className="status-text">Your lifestyle</div>
      </div>
      {data.map((item, index) => (
        <Status
          key={index}
          handleStickerStatusClick={() => handleStickerStatusClick(item.id)}
          data={item}
        />
      ))}
    </>
  );
};

export default StatusContainer;

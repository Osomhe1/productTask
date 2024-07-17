import "./style.css";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../Layout/MainLayout";
import ProfileAds from "../../components/ProfileComponents/ProfileAds";
import ProfileStickersAndMessages from "../../components/ProfileComponents/ProfileStickersAndMessages";
import ManageBusinessEmpty from "../../components/ManageBusinessComponents/ManageBusinessEmpty";
import ManageBusinessLists from "../../components/ManageBusinessComponents/ManageBusinessLists";
import plus from "../../assets/profile_images/plus.png";
import ModalHeader from "../../components/Modals/ModalHeader";
import { useModal } from "Hooks/useModal";
import EditBusinessProfile from "components/BusinessProfileComponents/EditBusinessProfile";
import ModalContainer from "components/Modals/ModalContainer";
import { useCurrentBusinessLists } from "pages/BusinessProfile/useCurrentBusinessLists";
import { useOpenModal } from "Hooks/useOpenModal";
import { ManageBusinessSkeleton } from "components/ManageBusinessSkeleton";

const ManageBusiness = () => {
  const navigate = useNavigate();

  const { modal } = useModal();
  const { handleClick } = useOpenModal();

  const { businessesStatus, businesses } = useCurrentBusinessLists();

  return (
    <div className="grid grid-cols-12 gap-4 overflow-hidden">
      <div className="overflow-auto h-[90vh] col-span-8 relative">
        <ModalHeader
          header="Manage Businesses"
          onModalClose={() => navigate(-1)}
        />

        <div className="bottom_box mt-2">
          {businessesStatus === "pending" ? (
            Array.from({ length: 20 }, (_, i) => i + 1)?.map((ske) => (
              <ManageBusinessSkeleton key={ske} />
            ))
          ) : businessesStatus === "error" ? (
            "Please check your internet "
          ) : businesses?.length === 0 ? (
            <ManageBusinessEmpty />
          ) : (
            businesses?.map((business, i) => (
              <ManageBusinessLists businessData={business} key={i + 1} />
            ))
          )}
        </div>

        {businesses?.length > 0 && (
          <>
            <div
              className="absolute bottom-[20px] right-[20px] w-[62px] h-[62px] rounded-full flex items-center justify-center bg-[#4f0da3] cursor-pointer clickModalOpen"
              onClick={handleClick}
              data-modal="setting"
            >
              <img src={plus} alt="Plus" />
            </div>

            {modal.setting && (
              <ModalContainer type="setting">
                <EditBusinessProfile />
              </ModalContainer>
            )}
          </>
        )}
      </div>

      <div className="cursor-pointer col-span-1">
        <ProfileAds />
      </div>

      <div className="col-span-3">
        <ProfileStickersAndMessages />
      </div>
    </div>
  );
};

export default ManageBusiness;

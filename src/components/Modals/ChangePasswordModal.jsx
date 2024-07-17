import { useState } from "react";
import { toast } from "react-hot-toast";

import PasswordInput from "../ProfileComponents/PasswordInput";
import ModalHeader from "./ModalHeader";
import ModalWrapper from "./ModalWrapper";
import ModalButton from "./ModalButton";
import ErrorMessage from "./ErrorMessage";
import { useDeleteAccount } from "Hooks/profile/useDeleteAccount";
import { useChangePassword } from "Hooks/profile/useChangePassword";
import Spinner from "components/Spinner";
import { useModal } from "Hooks/useModal";
import { useNavigate } from "react-router-dom";

const ChangePasswordModal = ({ onModalClose }) => {
  const navigate = useNavigate();
  const { setModal } = useModal();
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const { changingStatus, updatePassword } = useChangePassword();
  const { deletingStatus, deleteAccount } = useDeleteAccount();

  // handle input change
  const handleChange = (e) => {
    // setting error to empty on input change
    setError({});

    // updating input
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.old_password) {
      return setError({
        old: true,
      });
    }

    if (!data.new_password) {
      return setError({
        new: true,
      });
    }

    if (!data.confirm_new_password) {
      return setError({
        confirm: "empty",
      });
    }

    // Checking for same new password :)
    if (data.confirm_new_password !== data.new_password) {
      return setError({
        confirm: "not-same",
      });
    }

    const { confirm_new_password, ...others } = data;

    // update function
    updatePassword(others, {
      onSuccess: (data) => {
        if (data?.detail === "Invalid token.") {
          return navigate("/Signin");
        }

        if (!data.status) {
          return setError({
            responseMessage: data.message,
          });
        }

        if (data.status) {
          setModal({});

          return toast.success(data?.data?.message);
        
        }
      },
      onError: (data) => {
        if(data?.response?.data?.message === "Incorrect old password.") {
          return toast.error(data?.response?.data?.message)
          //console.log(data?.response?.data?.message)
        }
      }
    });
  };

  // delete account
  const handleDeleteAccount = (e) => {
    e.preventDefault();

    console.log(deletingStatus);
    deleteAccount();
  };

  return (
    <ModalWrapper>
      <ModalHeader header="Change password" onModalClose={onModalClose} />

      <form className="py-[30px] px-[20px] h-[90vh] lg:p-[20px] lg:h-auto flex flex-col gap-[30px]">
        <div className="change_password_container_items">
          <h2 className="text-[15px] font-normal">Input current password</h2>

          <PasswordInput
            placeholder="Current Password"
            onChange={handleChange}
            name="old_password"
          />

          {error?.old && <ErrorMessage>Old password is required!</ErrorMessage>}
        </div>

        <div className="change_password_container_items">
          <h2 className="text-[15px] font-normal">New password</h2>

          <div>
            <PasswordInput
              placeholder="New Password"
              onChange={handleChange}
              name="new_password"
            />
            {error?.new && (
              <ErrorMessage>New password is required!</ErrorMessage>
            )}
          </div>

          <div>
            <PasswordInput
              placeholder="Confirm Password"
              onChange={handleChange}
              name="confirm_new_password"
            />

            {error?.confirm === "empty" && (
              <ErrorMessage>Confirm password is required!</ErrorMessage>
            )}

            {error?.confirm === "not-same" && (
              <ErrorMessage>
                Password and Confirm password must be the same
              </ErrorMessage>
            )}
          </div>

          <p className="text-[13px] font-light text-left">
            Password must contain Capital and small letters, number or symbols.
          </p>

          {changingStatus !== "pending" && (
            <p>
              {error?.responseMessage && (
                <ErrorMessage>{error.responseMessage}</ErrorMessage>
              )}
            </p>
          )}
        </div>

        <div className="change_password_container_items mt-[25rem] py-[5rem] px-0 lg:mt-auto">
          <ModalButton onClick={handleSubmit}>
            {changingStatus === "pending" ? <Spinner /> : "Change Password"}
          </ModalButton>

          <button
            onClick={handleDeleteAccount}
            className="text-[16px] lg:text-[20px] font-light text-[#c43d27] underline"
          >
            {deletingStatus === "pending" ? (
              <Spinner color="#c43d27" />
            ) : (
              "Delete account"
            )}
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default ChangePasswordModal;

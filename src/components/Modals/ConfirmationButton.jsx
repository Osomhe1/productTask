import { useModal } from 'Hooks/useModal';

import check from '../../assets/profile_images/check-mark-button.png';
import ModalButton from './ModalButton';

const ConfirmationButton = () => {
  const { setModal } = useModal();

  function handleClick() {
    setModal({});
  }

  return (
    <div className='confirmation_modal'>
      <div className='confirmation'>
        <img src={check} alt='' />

        <h1>Request sent</h1>

        <p>Profile Verification takes up to a weeks or more at times.</p>

        <div style={{ width: '60%' }}>
          <ModalButton onClick={handleClick}>Done</ModalButton>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationButton;

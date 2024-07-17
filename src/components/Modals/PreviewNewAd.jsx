import './third.css';
import ModalHeader from './ModalHeader';
import ModalWrapper from './ModalWrapper';
import ModalButton from './ModalButton';

const PreviewNewAd = ({ onModalClose }) => {
  return (
    <ModalWrapper>
      <ModalHeader header='Advert Preview' onModalClose={onModalClose} />

      <div className='preview_ad'>
        <div className='preview_advert_summary'>
          <div>
            <div className='head'>Advert Title</div>
            <div className='text'>2023 General election</div>
          </div>

          <div>
            <div className='head'>Category</div>
            <div className='text'>Homepage leaderboard</div>
          </div>

          <div>
            <div className='head'>Duration</div>
            <div className='text'>1 month</div>
          </div>

          <div>
            <div className='head'>Advert Image</div>
            <img src='images/aduba.png' alt='' />
          </div>

          <div>
            <div className='head'>Cost</div>
            <div className='text'>#350,000</div>
          </div>
        </div>

        <div className='pay_now_button'>
          <ModalButton>Pay now</ModalButton>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default PreviewNewAd;

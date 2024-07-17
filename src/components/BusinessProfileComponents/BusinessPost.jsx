import { FaStar } from 'react-icons/fa';
import burger from '../../assets/profile_images/burger.jpeg';

const BusinessPost = () => {
  return (
    <div className='business_posts_container_post'>
      <div className='business_posts_container_post_top'>
        <div className='createdBy'>You</div>
        <div className='time'>2 hrs ago</div>
      </div>

      <div className='business_posts_container_post_middle'>
        <img src={burger} alt='Burger' />
      </div>

      <h1>Burger Small</h1>

      <div className='business_posts_container_post_bottom'>
        <div className='ratings'>
          <FaStar className='star' /> <span>4.5</span>
        </div>

        <div className='price'>₦20,000</div>
      </div>
    </div>
  );
};

export default BusinessPost;

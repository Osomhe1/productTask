import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import cover from "../../assets/profile_images/profile-cover.png";
// import { TimePicker } from 'antd';

const BusinessProfileDetails = () => {
  const [businessState, setBusinessState] = useState(false);

  const handleBusinessImage = () => {
    setBusinessState(true);
  };

  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {businessState && (
        <div className="user_profile_image">
          <div className="cancel_btn">
            <button onClick={() => setBusinessState(false)}>
              <IoArrowBackOutline className="arrow_back" />
            </button>
          </div>

          <div className="user_image_container">
            <img
              src="https://images.unsplash.com/photo-1466119408458-cf3ad09fc676?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2xpbSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
      )}

      <div className="cover_image">
        <img src={cover} alt="Cover" />
      </div>

      <div className="profile_details">
        <img
          src="https://images.unsplash.com/photo-1466119408458-cf3ad09fc676?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2xpbSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Profile"
          onClick={handleBusinessImage}
        />

        <h1>Charlotte Caria Faith</h1>

        <div className="location_expertise">
          <span>Product Designer</span>
          <span>Lagos, Nigeria</span>
        </div>

        <div className="business_analyses">
          <div>
            <span>Posts</span>
            <h2>570</h2>
          </div>

          <div>
            <span>Stickers</span>
            <h2>23m</h2>
          </div>

          <div>
            <span>Sticking</span>
            <h2>23k</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileDetails;

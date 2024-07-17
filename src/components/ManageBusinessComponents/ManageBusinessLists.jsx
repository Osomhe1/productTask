import { Link } from "react-router-dom";
import business from "../../assets/profile_images/business_image.png";
import dots from "../../assets/profile_images/DotsThree.png";

const ManageBusinessLists = ({ businessData }) => {
  console.log(businessData);

  return (
    <Link className="business_list no-underline">
      <div className="business_list_left">
        <img src={business} alt="" />

        <div>
          <h1>{businessData?.business_name}</h1>
          <p>{businessData?.user?.email}</p>
        </div>
      </div>

      <img src={dots} alt="Three Dots" className="business_list_right" />
    </Link>
  );
};

export default ManageBusinessLists;

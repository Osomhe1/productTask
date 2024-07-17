import { useEffect, useState } from "react";
import Categorynav from "../../shared/category";
import { useLocation } from "react-router-dom";
const MobileNav = () => {
  const location = useLocation();
  const [Cname, setCname] = useState(true);

  useEffect(() => {
    switch (!location.pathname) {
      case "/commerce":
        setCname(false);
        break;
      case "/commerce/":
        setCname(false);
        break;
      default:
        setCname(true);
    }
  }, [location]);
  console.log(Cname);
  return (
    <div
      className={`${
        !Cname ? "dissapear_mobile" : ""
      } sticky top-[0px] z-[30] mobile_category_container`}
    >
      <div className="bg-[rgb(79,13,163)] flex gap-x-[1.6rem] pt-[1rem] p-b-[1rem] px-[1.4rem] overflow-x-auto mobile_category">
        <Categorynav />
      </div>
    </div>
  );
};

export default MobileNav;

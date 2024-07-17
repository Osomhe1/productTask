import { BusinessesNearbyApi } from "api/services/connect";
import Spin from "components/Spin/Spin";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BusinessCard = () => {
  const [bizAroundLoading, setBizAroundLoading] = useState(true);
  const [BizAround, setBizAround] = useState([]);

  const nearbyBusinesses = async () => {
    try {
      const res = await BusinessesNearbyApi();

      if (res.data.status) {
        setBizAround(res.data.data);
      }
    } catch (error) {
      console.log("nearbyBusinesses", error);
      toast.error(
        error.response.data.message ||
          error.response.message ||
          "Something went wrong!"
      );
    } finally {
      setBizAroundLoading(false);
    }
  };

  useEffect(() => {
    nearbyBusinesses();
  }, []);
  return (
    <>
      {bizAroundLoading ? (
        <Spin />
      ) : (
        <>
          {BizAround.length === 0 ? (
            <p className="text-center py-4">No business around you</p>
          ) : (
            BizAround.map((biz, index) => {
              return (
                <div key={index} className="busin-small-card-container">
                  <div className="bus-loggo">
                    <img
                      src={
                        biz?.cover_image ||
                        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
                      }
                      alt="business_image"
                    />
                  </div>
                  <div className="busi-name-txt mt-2">
                    {biz?.business_name || "Default - Happy burger joint"}
                  </div>
                </div>
              );
            })
          )}
        </>
      )}
    </>
  );
};

export default BusinessCard;

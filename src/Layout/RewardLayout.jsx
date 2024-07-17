import { Outlet } from "react-router-dom";

const list =
  "h-[52px] py-[10px] px-[5px] rounded-[5px] bg-[#ffff] flex items-center gap-[10px]";

const listFirstSpan =
  "py-[5px] px-[9px] rounded-[5px] flex justify-center items-center text-[16px] font-light bg-gradient-to-tr from-[#ff8a15] to-[#ff8a1500]";

const listLastSpan = "text-[14px] font-light text-[#403f3f]";

const RewardLayout = () => {
  return (
    <div className="flex">
      <div className="flex-[4_4_0%]">
        <Outlet />
      </div>

      <div className="hidden flex-[2_2_0%] lg:block" id="reward_left_container">
        <div className="w-full h-[275px] py-[24px] px-[9px] rounded-[10px] bg-[#d0d5dd] flex flex-col gap-[20px]">
          <h2 className="text-[20px] font-medium text-center">How to earn</h2>

          <ul className="p-0 flex flex-col gap-[10px]">
            <li className={list}>
              <span className={listFirstSpan}>1</span>{" "}
              <span className={listLastSpan}>
                Share your referral link with your friends
              </span>
            </li>

            <li className={list}>
              <span className={listFirstSpan}>2</span>{" "}
              <span className={listLastSpan}>
                Your friend clicks and registers through your referral link
              </span>
            </li>

            <li className={list}>
              <span className={listFirstSpan}>3</span>{" "}
              <span className={listLastSpan}>You received your reward</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RewardLayout;

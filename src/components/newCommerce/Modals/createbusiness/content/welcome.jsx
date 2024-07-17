import Buysell from "assets/images/BuySell.png";
import Header from "components/newCommerce/typography/txtHeader";
import Description from "components/newCommerce/typography/txtDescription";
import { useEffect, useState } from "react";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
const Welcomebusiness = ({ click, datas }) => {
  const [bustType, setbustype] = useState({ bustype: "" });
  const [isdisable, setisdisable] = useState(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setbustype((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    // console.log(bustType);
    const isfilled = Object.values(bustType).every((val) => val.trim() !== "");

    setisdisable(!isfilled);
    datas(bustType);
  }, [bustType, datas]);
  return (
    <div
      className="pt-[10%] w-full grid grid-flow-row gap-y-3 "
      style={{ placeItems: "center" }}
    >
      <div>
        <img src={Buysell} alt="welcome-screen" />
      </div>

      <Header
        title={"Welcome to Commerce"}
        fw={"700"}
        fs={"2.5rem"}
        cl={"#000000"}
      />
      <Description
        title={"Ready to transform your business? Choose your path below"}
        align={"center"}
        cl={"#000000"}
        fs={"1.6rem"}
        sx={{ maxWidth: "30ch" }}
      />

      {/* bustype-form */}
      <div className="pt-5 flex px-[5%] justify-between items-center w-full gap-x-5">
        {/* for-company */}
        <div className="flex-[5]">
          <label
            htmlFor="company"
            className="cursor-pointer flex rounded-lg bg-[#F5F5F5] px-4 py-3 gap-x-3 "
          >
            <input
              type="radio"
              name="bustype"
              id="company"
              value={"Company"}
              className="w-[20px]"
              onChange={handleChange}
            />
            <span className="text-[1.5rem] text-[#2C2C2E]">Company</span>
          </label>
        </div>
        {/* for-individual */}
        <div className="flex-[5]">
          <label
            htmlFor="Individual"
            className="cursor-pointer flex rounded-lg  bg-[#F5F5F5] px-4 py-3 gap-x-4 justify-start"
          >
            <input
              type="radio"
              name="bustype"
              id="Individual"
              value={"Individual"}
              className="w-[20px]"
              onChange={handleChange}
            />
            <span className="text-[1.5rem] text-[#2C2C2E]">Individual</span>
          </label>
        </div>
      </div>
      {/* action-button */}
      <div>
        <ButtonSide
          title="Continue"
          bg="#4F0DA3"
          cl="#ffff"
          isDisabled={isdisable}
          styles={{
            paddingInline: "10rem",
            marginTop: "5rem",
            paddingBlock: ".9rem",
            fontSize: "1.4rem",
          }}
          br="5px"
          click={click}
        />
      </div>
    </div>
  );
};

export default Welcomebusiness;

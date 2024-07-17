import SellHeader from "components/newCommerce/shared/sellHeader";
import { useEffect, useState } from "react";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
export const ReportItem = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");

  //onchanging text-area
  const handleChange = (e) => {
    setVal(e.target.value);
    // updating-count-words

    setCount(val.length);
  };

  //strictly-updating count state
  useEffect(() => {
    val === "" && setCount(0);
  }, [val]);
  return (
    <div>
      <SellHeader title="Report Item" hideArr={true} hide={false} />
      <div className="px-4 mt-6 pb-4">
        <div className="flex flex-col items-center justify-center mx-auto pt-3 px-[20%] gap-5">
          <div className="relative w-full">
            <textarea
              onChange={handleChange}
              value={val}
              maxLength={500}
              className="bg-[#4f0da308] text-[black] text-[13px] border-none rounded-md px-3 py-4 font-[Ubuntu]  w-[100%] resize-none placeholder:font-[ubuntu] placeholder:text-[#c4c4c4] placeholder:text-[13px]"
              name="review"
              placeholder="Share your experience"
              id="review"
              cols="100"
              rows="8"
            ></textarea>
            <p className="absolute bottom-[0.15rem] text-[13px] text-[#c4c4c4] right-3">{`${count}/500 words`}</p>
          </div>
          <div className="mt-1">
            {/* call-button-to-update fields and send as API */}
            <ButtonSide
              title="Report item"
              bg="#4f0da3"
              cl="#ffff"
              jc="initial"
              styles={{ paddingInline: "5rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Report-sellser

export const Reportseller = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");

  //onchanging text-area
  const handleChange = (e) => {
    setVal(e.target.value);
    // updating-count-words

    setCount(val.length);
  };

  //strictly-updating count state
  useEffect(() => {
    val === "" && setCount(0);
  }, [val]);
  return (
    <div>
      <SellHeader title="Report seller" hideArr={true} hide={false} />
      <div className="px-4 mt-6 pb-4">
        <div className="flex flex-col items-center justify-center mx-auto pt-3 px-[20%] gap-5">
          <div className="relative w-full">
            <textarea
              onChange={handleChange}
              value={val}
              maxLength={500}
              className="bg-[#4f0da308] text-[black] text-[13px] border-none rounded-md px-3 py-4 font-[Ubuntu]  w-[100%] resize-none placeholder:font-[ubuntu] placeholder:text-[#c4c4c4] placeholder:text-[13px]"
              name="review"
              placeholder="Share your experience"
              id="review"
              cols="100"
              rows="8"
            ></textarea>
            <p className="absolute bottom-[0.15rem] text-[13px] text-[#c4c4c4] right-3">{`${count}/500 words`}</p>
          </div>
          <div className="mt-1">
            {/* call-button-to-update fields and send as API */}
            <ButtonSide
              title="Report seller"
              bg="#4f0da3"
              cl="#ffff"
              jc="initial"
              styles={{ paddingInline: "5rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

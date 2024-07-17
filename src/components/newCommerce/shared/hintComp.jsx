import Stacked from "./Stacked";
import { IoIosArrowForward } from "react-icons/io";

const Hint = ({ title }) => {
  return (
    <Stacked
      d="row"
      styles={{ padding: ".6rem", cursor: "pointer", borderRadius: "2px" }}
      ai="center"
      jc="space-between"
      bg="rgba(180, 105, 239, 0.1)"
    >
      <div className="self-center">
        <p className="block text-[1.45rem] text-[black] mb-[0!important]">
          {title}
        </p>
      </div>
      <IoIosArrowForward fontSize="20px" />
    </Stacked>
  );
};

export default Hint;

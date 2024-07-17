import { Fab } from "@mui/material";
import Stacked from "./Stacked";
import Navcategory from "./navCategory";
import { Link } from "react-router-dom";

export const Category = ({ src, title }) => {
  const fabStyles = {
    background: "#fff",
    width: "50px",
    height: "50px",
    zIndex: "1",
  };
  return (
    <>
      <Stacked d="column" g="4px" ai="center">
        <Fab sx={fabStyles}>
          <img src={src} alt="icon" width={25} height={25} />
        </Fab>
        <p
          style={{
            color: "#ffff",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          {title}
        </p>
      </Stacked>
    </>
  );
};

const Categorynav = () => {
  return (
    <>
      {Navcategory.map((category) => {
        return (
          <Link
            to={`/commerce/${category.title.toLocaleLowerCase()}`}
            key={category.id}
            style={{ textDecoration: "none" }}
          >
            <Category src={category.icon} title={category.title} />
          </Link>
        );
      })}
    </>
  );
};
export default Categorynav;

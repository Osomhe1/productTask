import { Button } from "@mui/material";
export const ButtonSide = ({
  title,
  bg,
  cl,
  styles,
  align,
  w,
  type,
  route,
  click,
  jc,
  cp,
  className,
  br,
  bs,
  isDisabled,
  pb,
  start,
}) => {
  return (
    <>
      <Button
        component={cp}
        type={type}
        to={route}
        title={title}
        pl={2}
        variant="contained"
        className={className}
        disabled={isDisabled}
        startIcon={start}
        sx={{
          width: w,
          textTransform: "capitalize",
          justifyContent: jc || "flex-start",
          textAlign: `${align}`,
          fontFamily: "Ubuntu",
          fontSize: "14px",
          borderRadius: br || "10px",
          paddingBlock: pb || ".5rem",
          background: bg,
          color: cl,
          boxShadow: bs || "inherit",
          ...styles,
        }}
        onClick={click}
      >
        {title}
      </Button>
    </>
  );
};

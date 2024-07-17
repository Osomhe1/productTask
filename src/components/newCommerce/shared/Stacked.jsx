import { Stack } from "@mui/material";

const Stacked = ({
  children,
  d,
  jc,
  ai,
  g,
  pt,
  pl,
  pr,
  pb,
  fw,
  bg,
  br,
  p,
  cname,
  styles,
}) => {
  return (
    <>
      <Stack
        className={cname}
        direction={d}
        justifyContent={jc}
        alignItems={ai}
        flexWrap={fw}
        gap={g}
        bgcolor={bg}
        padding={p}
        sx={{
          paddingTop: pt,
          paddingLeft: pl,
          paddingRight: pr,
          paddingBottom: pb,
          borderRadius: br,
          ...styles,
        }}
      >
        {children}
      </Stack>
    </>
  );
};
export default Stacked;

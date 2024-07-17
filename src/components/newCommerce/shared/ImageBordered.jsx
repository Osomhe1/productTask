const Pic = ({ att, look, alt, rad, styles }) => {
  const initials = {
    // use initial 12px if udefined
    borderRadius: rad || "12px",
    ...styles,
  };
  return (
    <>
      <img className={att} src={look} alt={alt} style={initials} />
    </>
  );
};

export default Pic;

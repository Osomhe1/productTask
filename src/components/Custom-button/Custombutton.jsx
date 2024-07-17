import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Custombutton = ({
	name,
	disabled,
	type,
	className,
	onClick,
}) => {
	return (
		<>
			<button
				disabled={disabled ?? false}
				type={type}
				className={className ? className : ""}
				onClick={onClick}
			>
				{disabled && <CircularProgress size={20} color="inherit"/>} {name}
			</button>
		</>
	);
};

export default Custombutton;

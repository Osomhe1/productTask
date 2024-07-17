import React from "react";
// import { Box, Radio } from "@mui/material";
import Stacked from "../shared/Stacked";
import Description from "../typography/txtDescription";
const sizeArr = ["24", "26", "28", "32", "34", "36", "40", "42", "44"];
const colorArr = [
  "Black",
  "White",
  "Blue",
  "Yellow",
  "Red",
  "Green",
  "Purple",
  "Pink",
];
const weightArr = ["Small", "Medium", "Large"];
// label-style-for-all-labels
const labelStyle = {
  fontSise: "12px",
  fontWeight: "500",
  fontFamily: "Ubuntu",
  cursor: "pointer",
};
export const Sizevariant = ({ content }) => {
  return (
    <>
      <Stacked
        d="column"
        g=".8rem"
        bg="rgb(79 13 163 / .1)"
        styles={{ borderRadius: "5px" }}
        p="15px 10px"
        ai="start"
      >
        <Description
          fw="500"
          title="Size"
          sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 1)" }}
        />
        <Stacked d="row" g="1rem" styles={{ flexWrap: "wrap" }} ai="center">
          {(content || sizeArr).map((sizes, index) => {
            return (
              <React.Fragment key={index}>
                <Stacked d="row" ai="center" g=".4rem">
                  <input
                    type="radio"
                    style={{ color: "rgba(0, 0, 0, 1)" }}
                    name={`Size`}
                    id={`S${sizes}`}
                  />
                  <label
                    className="label_style"
                    htmlFor={`S${sizes}`}
                    style={labelStyle}
                  >
                    {sizes}
                  </label>
                </Stacked>
              </React.Fragment>
            );
          })}
        </Stacked>
      </Stacked>
    </>
  );
};

export const Colorvariant = ({ content }) => {
  return (
    <>
      <Stacked
        d="column"
        g=".8rem"
        bg="rgb(79 13 163 / .1)"
        styles={{ borderRadius: "5px" }}
        p="15px 10px"
        ai="start"
      >
        <Description
          fw="500"
          title="Colour"
          sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 1)" }}
        />
        <Stacked d="row" g="1.1rem" styles={{ flexWrap: "wrap" }} ai="center">
          {(content || colorArr).map((colors, index) => {
            return (
              <React.Fragment key={index}>
                <Stacked d="row" ai="center" g=".4rem">
                  <input
                    type="radio"
                    style={{ color: "rgba(0, 0, 0, 1)" }}
                    name={`Color`}
                    id={`C${colors}`}
                  />
                  <label
                    className="label_style"
                    htmlFor={`C${colors}`}
                    style={labelStyle}
                  >
                    {colors}
                  </label>
                </Stacked>
              </React.Fragment>
            );
          })}
        </Stacked>
      </Stacked>
    </>
  );
};

export const Weightvariant = ({ content }) => {
  return (
    <>
      <Stacked
        d="column"
        g=".8rem"
        bg="rgb(79 13 163 / .1)"
        styles={{ borderRadius: "5px" }}
        p="15px 10px"
        ai="start"
      >
        <Description
          fw="500"
          title="Weight"
          sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 1)" }}
        />
        <Stacked d="row" g="1.1rem" styles={{ flexWrap: "wrap" }} ai="center">
          {(content || weightArr).map((weight, index) => {
            return (
              <React.Fragment key={index}>
                <Stacked d="row" ai="center" g=".4rem">
                  <input
                    type="radio"
                    style={{ color: "rgba(0, 0, 0, 1)" }}
                    name={`Weight`}
                    id={`W${weight}`}
                  />
                  <label
                    className="label_style"
                    htmlFor={`W${weight}`}
                    style={labelStyle}
                  >
                    {weight}
                  </label>
                </Stacked>
              </React.Fragment>
            );
          })}
        </Stacked>
      </Stacked>
    </>
  );
};

import { Fragment, useState, useEffect } from "react";
import Stacked from "components/newCommerce/shared/Stacked";
import { Checkbox } from "@mui/material";
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

const rgap = {
  rowGap: "0",
};
export const Sizevariantsell = ({ sizedata }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleToggle = (event) => {
    const size = event.target.value;
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size]
    );
  };

  useEffect(() => {
    sizedata(selectedSizes);
  }, [selectedSizes, sizedata]);

  return (
    <Stacked d="row" styles={{ flexWrap: "wrap" }} ai="center">
      {sizeArr.map((size, index) => (
        <Fragment key={index}>
          <Stacked d="row" ai="center" cname={rgap}>
            <Checkbox
              inputProps={{}}
              style={{ color: "#4f0da3" }}
              name={`SizeSell`}
              id={`S${size}`}
              value={size}
              checked={selectedSizes.includes(size)}
              onChange={handleToggle}
              size="medium"
            />

            <label
              className="label_style"
              htmlFor={`S${size}`}
              style={labelStyle}
            >
              {size}
            </label>
          </Stacked>
        </Fragment>
      ))}
      {selectedSizes.length > 0 && (
        <div>Selected Sizes: {selectedSizes.join(", ")}</div>
      )}
    </Stacked>
  );
};

export const ColorvariantSell = ({ colorPick }) => {
  const [selectedColor, setSelectedCol] = useState([]);

  const handleToggle = (event) => {
    const color = event.target.value;
    setSelectedCol((prevSelectedSizes) =>
      prevSelectedSizes.includes(color)
        ? prevSelectedSizes.filter((s) => s !== color)
        : [...prevSelectedSizes, color]
    );
  };

  useEffect(() => {
    colorPick(selectedColor);
  }, [selectedColor, colorPick]);
  return (
    <Stacked d="row" styles={{ flexWrap: "wrap" }} ai="center">
      {colorArr.map((colors, index) => {
        return (
          <Fragment key={index}>
            <Stacked d="row" ai="center" cname={rgap}>
              <Checkbox
                inputProps={{}}
                style={{ color: "#4f0da3" }}
                name={`ColorSell`}
                id={`C${colors}`}
                value={colors}
                checked={selectedColor.includes(colors)}
                onChange={handleToggle}
                size="medium"
              />

              <label
                className="label_style"
                htmlFor={`C${colors}`}
                style={labelStyle}
              >
                {colors}
              </label>
            </Stacked>
          </Fragment>
        );
      })}
      {selectedColor.length > 0 && (
        <div>Selected color: {selectedColor.join(", ")}</div>
      )}
    </Stacked>
  );
};

export const WeightvariantSell = ({ weightPick }) => {
  const [selectedWeight, setSelectedWght] = useState([]);

  const handleToggle = (event) => {
    const weight = event.target.value;
    setSelectedWght((prevSelectedSizes) =>
      prevSelectedSizes.includes(weight)
        ? prevSelectedSizes.filter((s) => s !== weight)
        : [...prevSelectedSizes, weight]
    );
  };

  useEffect(() => {
    weightPick(selectedWeight);
  }, [selectedWeight, weightPick]);
  return (
    <Stacked d="row" g="1.1rem" styles={{ flexWrap: "wrap" }} ai="center">
      {weightArr.map((weight, index) => {
        return (
          <Fragment key={index}>
            <Stacked d="row" ai="center" cname={rgap}>
              <Checkbox
                inputProps={{}}
                style={{ color: "#4f0da3" }}
                name={`Weight`}
                id={`W${weight}`}
                value={weight}
                checked={selectedWeight.includes(weight)}
                onChange={handleToggle}
                size="medium"
              />
              <label
                className="label_style"
                htmlFor={`W${weight}`}
                style={labelStyle}
              >
                {weight}
              </label>
            </Stacked>
          </Fragment>
        );
      })}
      {selectedWeight.length > 0 && (
        <div>Selected Weight: {selectedWeight.join(", ")}</div>
      )}
    </Stacked>
  );
};

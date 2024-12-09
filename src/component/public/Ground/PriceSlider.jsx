import React from "react";
import Slider from "@mui/material/Slider";
function PriceSlider() {
  const [range, setRange] = React.useState([0, 3000]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <div className="w-full space-y-4">
      <div className="price-input text-sm md:text-base">
        Rs. {range[0]} - Rs. {range[1]}
      </div>
      <div className="slider flex space-x-4 items-center">
        <Slider
          value={range}
          onChange={handleChanges}
          valueLabelDisplay="auto"
          min={0}
          max={3000}
          step={10}
        />{" "}
      </div>
    </div>
  );
}
export default PriceSlider;

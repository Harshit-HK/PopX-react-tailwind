import React from "react";

const Radio = ({value}) => {
  return (
    <label className="flex items-center gap-[14px]">
      <input
        type="radio"
        name="agency"
        value={value}
        className="accent-violet-500 w-[25px] h-[25px]"
      />
      <span>{value}</span>
    </label>
  );
};

export default Radio;

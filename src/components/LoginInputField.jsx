import React from "react";

const LoginInputField = ({type, label}) => {
  return (
    <div className="relative">
      <label
        htmlFor= {type}
        className="absolute bg-[#f8f8f8] top-[-12px] left-3 text-[15px] text-violet-700 w-28 px-1"
      >
        {label}
      </label>
      <input
        type={type}
        name={type}
        placeholder = {`Enter ${label.toLowerCase()}`}
        className=" bg-[#f8f8f8] w-full my-[2px] px-[18px] py-5 border border-[#cccccc] rounded-lg h-[45px] focus:outline-none"
      />
    </div>
  );
};

export default LoginInputField;

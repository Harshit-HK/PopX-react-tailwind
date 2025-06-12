import React from "react";

const CreateAccountInputField = ({ label, type }) => {
  return (
    <div className="relative">
      <label
        htmlFor={type}
        className="absolute bg-[#f8f8f8] top-[-12px] left-3 text-[15px] text-violet-700 w-[120px] pl-1"
      >
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        name={type}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="w-full my-[2px] px-[18px] py-5 border border-[#cccccc] bg-[#f8f8f8] rounded-lg h-[45px] focus:outline-none"
      />
    </div>
  );
};

export default CreateAccountInputField;

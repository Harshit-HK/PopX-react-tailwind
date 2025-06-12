import React from "react";
import { useNavigate } from "react-router-dom";
import CreateAccountInputField from "../components/CreateAccountInputField";
import Radio from "../components/Radio";

const CreateAccount = () => {
  const navigate = useNavigate();

    const handleSubmit = (e) => {
  e.preventDefault();
  navigate('/profile')
};

  return (
    <div>
      <div className="w-full bg-[#f8f8f8] p-[23px]">
        <h2 className="text-[32px] font-medium mb-6 text-gray-900 w-64 pt-[21px] pb-2 leading-[42px]">
          Create your PopX account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[30px]">
            <CreateAccountInputField label={"Full Name"} type={"name"} />
            <CreateAccountInputField label={"Phone number"} type={"tel"} />
            <CreateAccountInputField label={"Email address"} type={"email"} />
            <CreateAccountInputField label={"Password "} type={"password"} />
            <CreateAccountInputField label={"Company name"} type={"text"} />
          </div>
          <div className="mt-4  ">
            <p className="tracking-[-0.005em] text-[15px]">
              Are you an Agency?
              <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-7 mt-[9px]">
              <Radio value={"Yes"}/>
              <Radio value={"No"}/>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#6709ff] text-white text-lg p-3  rounded-md font-semibold mt-[247px] mb-3"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

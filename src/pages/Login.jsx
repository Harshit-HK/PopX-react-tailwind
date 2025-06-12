import React from "react";
import {useNavigate} from 'react-router-dom'
import LoginInputField from "../components/LoginInputField";
import Button from "../components/Button";
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();
  // validate + navigate 
};
  return (
    <div className="">
      <div className="w-full p-[23px]">
        <h2 className="text-[32px] font-medium mb-1 text-gray-900 w-72 pt-[21px] pb-2 leading-[42px]">
          Signin to your PopX account
        </h2>
        <p className="text-gray-500 text-[21px] leading-[30px] font-normal mb-9 w-72 tracking-[-0.005em]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            
            <LoginInputField type={"email"} label={"Email Address"}/> 

            <LoginInputField type={"password"} label={"Password"}/> 

          </div>

          <button
            type="submit"
            className="w-full bg-[#cccccc] text-white text-lg p-3 mt-[14px] rounded-md font-semibold"
            onClick={()=>navigate('/profile')}
          >
            Login
          </button>

          <Button />
        </form>
      </div>
    </div>
  );
};

export default Login;

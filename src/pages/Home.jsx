import React from "react";
import Button from "../components/Button";
const Home = () => {
  return (
    <div className="">
      <div className=" pt-[620px] p-6 pb-12">
        <h2 className="text-[32px] font-medium mb-1 text-gray-900">
          Welcome to PopX
        </h2>
        <p className="text-gray-500 text-[20.5px] leading-[30px] pb-1 font-normal mb-7 w-72">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <Button
          navigation="/create"
          bgColor="bg-[#6709ff]"
          textColor="text-white"
          content="Create Account"
        />

        <Button
          navigation="/login"
          bgColor="bg-violet-300"
          textColor="text-black"
          content="Already Registered? Login"
        />
      </div>
    </div>
  );
};

export default Home;

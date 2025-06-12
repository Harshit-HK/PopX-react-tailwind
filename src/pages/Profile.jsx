import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="bg-white h-[80px] py-7 text-[21px] px-[16px] tracking-[-0.005em] shadow-sm">
        Account Settings
      </div>

      <div className=" ml-[23px] my-8 ">
        <div className="flex">
          <div className="relative">
              <img className="absolute w-6 rounded-full bottom-2 right-4" src="https://i.pinimg.com/736x/81/d2/97/81d2972da623d297d0599addda00eb13.jpg" alt="" />
            <img
              className="h-[90px] rounded-full mr-5"
              src="https://res.cloudinary.com/dyjopn2oc/image/upload/v1749744578/j7cfnrsq5j9hbxzeh3f6.jpg"
              alt="user"
            />
          </div>
          <div>
            <p className="font-semibold text-[17px] leading-5">Marry Doe</p>
            <p className=" leading-9">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="mt-[29px] leading-[25px]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;

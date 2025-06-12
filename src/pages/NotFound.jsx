// src/pages/NotFound.jsx
import React from "react";
import Button from "../components/Button";

const NotFound = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-[80px] font-bold text-violet-600 mb-2">404</h1>
      <p className="text-2xl text-gray-800 mb-4">Page Not Found</p>
      <p className="text-gray-500 mb-6 max-w-md">
        Oops! The page you're looking for doesn't exist. Maybe the URL is wrong or the page was removed.
      </p>
        <Button
          navigation="/"
          bgColor="bg-[#6709ff]"
          textColor="text-white"
          content="Go to Homepage"
        />
    </div>
  );
};

export default NotFound;

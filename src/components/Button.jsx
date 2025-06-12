import React from "react";
import {useNavigate} from 'react-router-dom'

const Button = ({navigation, bgColor, textColor, content}) => {

  const navigate = useNavigate();

  return (
    <div>
      <button
        className={`w-full ${bgColor} ${textColor} text-[18.5px] p-3 rounded-md font-medium mb-3`}
        onClick={() => navigate(navigation)}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;

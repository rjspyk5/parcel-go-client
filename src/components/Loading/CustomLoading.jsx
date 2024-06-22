import React from "react";
import { Rings } from "react-loader-spinner";

export const CustomLoading = ({ text }) => {
  return (
    <div className=" w-full h-screen absolute items-center justify-center flex">
      <div className=" w-full items-center justify-center flex flex-col h-screen absolute bg-white  bg-opacity-80">
        <Rings
          visible={true}
          height="96"
          width="96"
          color="#f15a25"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className="font-semibold text-2xl"> {text}</p>
      </div>
    </div>
  );
};

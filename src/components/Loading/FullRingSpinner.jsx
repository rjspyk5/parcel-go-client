import React from "react";
import { Rings } from "react-loader-spinner";

export const FullRingSpinner = () => {
  return (
    <div className="flex min-h-screen items-center flex-col justify-center">
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#f15a25"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className="font-semibold text-2xl"> Loading</p>
    </div>
  );
};

import { ReactCount } from "@/components/ReactCount/ReactCount";
import door from "../../../assets/image/icon/door.png";
import fast from "../../../assets/image/icon/fast.png";
import sequre from "../../../assets/image/icon/sequre.png";
import { useEffect, useState } from "react";
import { useAxiosSequre } from "@/Hooks/useAxiosSequre";

export const FeaturedSection = ({ count }) => {
  const axiosSequre = useAxiosSequre();

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-14 lg:grid-cols-3">
      <div className="border flex flex-col justify-center gap-3 items-center shadow-lg backdrop-blur-md rounded-md p-10 text-center">
        <h2 className="font-bold text-2xl">Fast delivery</h2>
        <img className="w-20 h-10 my-4" src={fast} alt="" />
        <h1 className="max-w-xs text-sm opacity-70 ">
          Experience lightning-fast parcel shipping with our expedited service.
          Get your packages delivered promptly and efficiently, ensuring your
          items reach their destination in record time.
        </h1>

        <div className="flex text-lg font-bold gap-2 items-center">
          Successfully delivered{" "}
          <ReactCount endCount={count.totalDelivered} refName="counter" />
        </div>
      </div>
      <div className="border flex flex-col justify-center gap-3 items-center shadow-lg backdrop-blur-md rounded-md p-10 text-center">
        <h2 className="font-bold text-2xl">Parcel Safety</h2>
        <img className="w-24 h-20" src={sequre} alt="" />
        <h1 className="max-w-xs text-sm opacity-70 ">
          Ensure the safety and security of your parcels with our robust
          delivery protocols and protective measures
        </h1>

        <div className="flex text-lg font-bold gap-2 items-center">
          Total Booked
          <ReactCount endCount={count.totalBooked} refName="counter2" />
        </div>
      </div>
      <div className="border flex flex-col justify-center gap-3 items-center shadow-lg backdrop-blur-md rounded-md p-10 text-center">
        <h2 className="font-bold text-2xl">Door to Door delivery</h2>
        <img className="w-20 h-10 my-4" src={door} alt="" />
        <h1 className="max-w-xs text-sm opacity-70 ">
          Enjoy the convenience of seamless parcel delivery from the sender's
          doorstep to the recipient's, ensuring a hassle-free experience for
          both parties.
        </h1>

        <div className="flex text-lg font-bold gap-2 items-center">
          Total User
          <ReactCount endCount={count.totalUser} refName="counter3" />
        </div>
      </div>
    </div>
  );
};

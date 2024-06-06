import { useAuth } from "@/Hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import moment from "moment";
import { useAxiosPublic } from "@/Hooks/useAxiosPublic";

const schema = yup
  .object({
    recieverName: yup.string(),
    recieverAdressLatitute: yup.number(),
    recieverAdressLongitude: yup.number(),
  })
  .required();

export const BookParcels = () => {
  const axiosPublic = useAxiosPublic();
  const {
    user: { displayName, email },
  } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [parcelWeight, setParcelWeight] = useState(0);
  const parcel = register("parcelWeight");
  const price =
    parcelWeight > 0
      ? parcelWeight > 2
        ? 150
        : parcelWeight * 50
      : parcelWeight;

  const onSubmit = async (data) => {
    data.senderName = displayName;
    data.senderEmail = email;
    data.parcelWeight = parcelWeight;
    data.price = price;
    data.bookingDate = moment().format("YYYY-MM-DD");
    data.status = "pending";
    const result = await axiosPublic.post("/booking", data);
    if (result.status === 200) {
      alert("booking successfull");
    }
  };

  const [price, setprice] = useState(0);
  const parcelWeight = register("parcelWeight");

  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            From
          </h2>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Name</label>
              <input
                {...register("senderName")}
                disabled
                defaultValue={displayName}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">Email</label>
              <input
                {...register("senderEmail")}
                disabled
                defaultValue={email}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Mobile Number<span className="text-red-500">*</span>
              </label>
              <input
                required
                {...register("senderNumber")}
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <h2 className="text-lg my-8 font-semibold text-gray-700 capitalize dark:text-white">
            To
          </h2>

          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                required
                {...register("recieverName")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.recieverName && (
                <p role="alert" className="text-red-500">
                  {errors.recieverName?.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Mobile Number<span className="text-red-500">*</span>
              </label>
              <input
                {...register("recieverNumber")}
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Delivery Adress<span className="text-red-500">*</span>
              </label>
              <input
                required
                {...register("recieverDeliveryAdress")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Adress Latitute<span className="text-red-500">*</span>
              </label>
              <input
                required
                {...register("recieverAdressLatitute")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />

              {errors?.recieverAdressLatitute?.ref?.value === "" ? (
                <p role="alert" className="text-red-500">
                  This filed is requiered
                </p>
              ) : (
                <p role="alert" className="text-red-500">
                  Value must be number type
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Adress Longitude<span className="text-red-500">*</span>
              </label>
              <input
                required
                {...register("recieverAdressLongitude")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />

              {errors?.recieverAdressLongitude?.ref?.value === "" ? (
                <p role="alert" className="text-red-500">
                  This filed is requiered
                </p>
              ) : (
                <p role="alert" className="text-red-500">
                  Value must be number type
                </p>
              )}
            </div>
          </div>

          <h2 className="text-lg my-8 font-semibold text-gray-700 capitalize dark:text-white">
            Parcel Details
          </h2>

          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Parcel Type
              </label>
              <input
                {...register("parcleType")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Parcel Weight(kg)<span className="text-red-500">*</span>
              </label>
              <input
                required
                onChange={(e) => {
                  parcel.onChange(e);
                  setParcelWeight(e.target.value);
                }}
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Requested Date
              </label>
              <input
                required
                {...register("reqDeliveryDate")}
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <p>Estimated price :{price}</p>
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Book Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

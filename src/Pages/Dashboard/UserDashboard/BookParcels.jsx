import { useAuth } from "@/Hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    senderNumber: yup.number().integer().required(),
    recieverNumber: yup.number().integer(),
    recieverName: yup.string().required(),
    recieverAdressLatitute: yup.number(),
    recieverAdressLongitude: yup.number(),
  })
  .required();

export const BookParcels = () => {
  const {
    user: { displayName, email },
  } = useAuth();
  console.log(displayName, email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    data.senderName = displayName;
    data.senderEmail = email;
    console.log(data);
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
                value={displayName}
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
                {...register("senderNumber", { min: 9 })}
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />{" "}
              {errors.senderNumber && (
                <p role="alert" className="text-red-500">
                  {errors.senderNumber?.message}
                </p>
              )}
              {errors.senderNumber?.type === "min" && (
                <span className="text-red-500">
                  Minimum length have to be 10
                </span>
              )}
            </div>
          </div>
          <h2 className="text-lg my-8 font-semibold text-gray-700 capitalize dark:text-white">
            To
          </h2>

          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Name</label>
              <input
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
                Number<span className="text-red-500">*</span>
              </label>
              <input
                {...register("recieverNumber")}
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.recieverNumber && (
                <p role="alert" className="text-red-500">
                  {errors.recieverNumber?.message}
                </p>
              )}
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
                Adress Latitute
              </label>
              <input
                {...register("recieverAdressLatitute")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.recieverAdressLatitute && (
                <p role="alert" className="text-red-500">
                  {errors.recieverAdressLatitute?.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Adress Longitude
              </label>
              <input
                {...register("recieverAdressLongitude")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.recieverAdressLongitude && (
                <p role="alert" className="text-red-500">
                  {errors.recieverAdressLongitude?.message}
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
                onChange={(e) => {
                  parcelWeight.onChange(e);
                  setprice(e.target.value);
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
                {...register("reqDeliveryDate")}
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <p>
              Estimated price :
              {price > 0 ? (price > 2 ? 150 : price * 50) : price}
            </p>
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Book Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

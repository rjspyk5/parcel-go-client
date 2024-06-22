import { useAuth } from "@/Hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";
import { useAxiosPublic } from "@/Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  senderNumber: yup
    .string()
    .required("This field is required")
    .matches(/^[0-9]+$/, "Phone number must be digits only"),
  recieverName: yup.string().required(),
  recieverNumber: yup
    .string()
    .required("This field is required")
    .matches(/^[0-9]+$/, "Phone number must be digits only"),
  recieverDeliveryAdress: yup.string().required(),
  recieverAdressLatitute: yup
    .number()
    .typeError("Latitude must be a number")
    .required("This field is required"),
  recieverAdressLongitude: yup
    .number()
    .typeError("Longitude must be a number")
    .required("This field is required"),
  parcleType: yup.string().required(),
  parcelWeight: yup.number().min(1),
  reqDeliveryDate: yup.date().required(),
});

export const BookParcels = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const parcelWeight = watch("parcelWeight", 0);
  const price =
    parcelWeight > 0 ? (parcelWeight > 2 ? 150 : parcelWeight * 50) : 0;

  const onSubmit = async (data) => {
    data.senderName = user.displayName;
    data.senderEmail = user.email;
    data.parcelWeight = parcelWeight;
    data.price = price;
    data.bookingDate = moment().format("YYYY-MM-DD");
    data.status = "pending";

    try {
      const result = await axiosPublic.post("/booking", data);
      if (result.status === 200) {
        Swal.fire({
          text: " Sucessfully Booking",
          icon: "success",
        });
        reset();
        navigate("/dashboard/myparcel");
      }
    } catch (error) {
      Swal.fire({
        text: "Something went wrong try again",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="w-full py-5 px-2 sm:px-4 lg:px-6">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-lg">
            <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-t-lg">
              <div className="md:p-6 p-3 bg-accent  border-b border-gray-200 dark:border-gray-700">
                <h1 className="md:text-3xl text-xl font-bold  text-center">
                  Book Parcel
                </h1>
                <p className="mt-2 text-sm  text-center">
                  Fill up the form for booking a parcel
                </p>
              </div>
            </div>

            <form className="md:p-8 p-3" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
                Sender Information
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    value={user.displayName}
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("senderNumber")}
                    type="text"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring ${
                      errors.senderNumber
                        ? "border-red-500"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                  />
                  {errors.senderNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.senderNumber.message}
                    </p>
                  )}
                </div>
              </div>

              <h2 className="text-lg font-semibold text-gray-700 dark:text-white mt-6 mb-2">
                Receiver Information
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Receiver's Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("recieverName")}
                    type="text"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring ${
                      errors.recieverName
                        ? "border-red-500"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                  />
                  {errors.recieverName && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Receiver's Phone Number
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("recieverNumber")}
                    type="text"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring ${
                      errors.recieverNumber
                        ? "border-red-500"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                  />
                  {errors.recieverNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.recieverNumber.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Delivery Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("recieverDeliveryAdress")}
                    type="text"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring ${
                      errors.recieverDeliveryAdress
                        ? "border-red-500"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                  />
                  {errors.recieverDeliveryAdress && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Address Latitude<span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("recieverAdressLatitute")}
                    type="text"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring ${
                      errors.recieverAdressLatitute
                        ? "border-red-500"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                  />
                  {errors.recieverAdressLatitute && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.recieverAdressLatitute.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Address Longitude<span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("recieverAdressLongitude")}
                    type="text"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring ${
                      errors.recieverAdressLongitude
                        ? "border-red-500"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                  />
                  {errors.recieverAdressLongitude && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.recieverAdressLongitude.message}
                    </p>
                  )}
                </div>
              </div>

              <h2 className="text-lg font-semibold text-gray-700 dark:text-white mt-6 mb-2">
                Parcel Details
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Parcel Type<span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("parcleType")}
                    type="text"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring ${
                      errors.parcleType
                        ? "border-red-500"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                  />
                  {errors.parcleType && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Parcel Weight (kg)<span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("parcelWeight")}
                    type="number"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring ${
                      errors.parcelWeight
                        ? "border-red-500"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                  />
                  {errors.parcelWeight && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.parcelWeight.type === "typeError" &&
                        "This field is required"}
                      {errors.parcelWeight.type === "min" &&
                        "Parcel weight must be greater than zero"}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200">
                    Requested Delivery Date
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("reqDeliveryDate")}
                    type="date"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring ${
                      errors.reqDeliveryDate
                        ? "border-red-500"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                  />
                  {errors.reqDeliveryDate && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col md:flex-row gap-2 items-center justify-between">
                <p className="text-lg  text-gray-700 dark:text-gray-200">
                  Estimated Price:{" "}
                  <span className="font-semibold">{price} Tk</span>
                </p>
                <button
                  type="submit"
                  className="px-4 w-full md:w-auto py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

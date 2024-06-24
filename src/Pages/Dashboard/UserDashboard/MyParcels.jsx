import { useAuth } from "@/Hooks/useAuth";
import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { RingSpinner } from "@/components/Loading/RingSpinner";
import { ModalForReview } from "@/components/ModalForReview/ModalForReview";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const MyParcels = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSequre = useAxiosSequre();
  const [filter, setfilter] = useState("all");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myparcel", filter],
    queryFn: async () => {
      const result = await axiosSequre.get(`/bookings/${user?.email}`);
      if (filter === "all") {
        return result.data;
      } else {
        return result?.data?.filter((el) => el.status === filter);
      }
    },
  });

  const handleCancel = async (id, status) => {
    if (status === "pending") {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to cancel this booking",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#07db55",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      })
        .then((result) => {
          if (result.isConfirmed) {
            return axiosSequre.patch(`/booking/${id}`, {
              status: "canceled",
            });
          }
        })
        .then((result) => {
          refetch();
          if (result?.data.acknowledged) {
            Swal.fire({
              text: "Booking Canceled Sucessfully",
              icon: "success",
            });
          }
        });
    }
  };
  return (
    <>
      <Fade>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full md:py-5 py-3 px-3 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-t-lg">
              <div className="md:p-6 p-3 bg-accent  border-b border-gray-200 dark:border-gray-700">
                <h1 className="md:text-3xl text-xl font-bold my-3 text-center">
                  My Parcel
                </h1>
                <p className="mt-2 text-sm  text-center">
                  View and manage your parcels.
                </p>
                <div className="flex  mt-4 justify-end">
                  <select
                    onChange={(e) => setfilter(e.target.value)}
                    className="border rounded-md  bg-white dark:bg-gray-700 md:p-2 p-1"
                  >
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="delivered">Delivered</option>
                    <option value="On the way">On the Way</option>
                    <option value="canceled">Canceled</option>
                    <option value="return">Return</option>
                  </select>
                </div>
              </div>
            </div>

            {isLoading ? (
              <RingSpinner />
            ) : !isLoading && data.lenght < 1 ? (
              <p className="min-h-96 flex justify-center items-center text-2xl md:text-3xl">
                No Parcel available
              </p>
            ) : (
              <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md ">
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden border-b border-gray-200 dark:border-gray-700">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                          <thead className="bg-orange-500 text-white">
                            <tr>
                              <th
                                scope="col"
                                className="md:px-6 px-2 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                              >
                                Parcel Type
                              </th>
                              <th
                                scope="col"
                                className="md:px-6 px-2 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                              >
                                Req. Delivery Date
                              </th>
                              <th
                                scope="col"
                                className="md:px-6 px-2py-3 text-left text-xs md:text-sm  font-normal tracking-wider"
                              >
                                Approx. Delivery Date
                              </th>
                              <th
                                scope="col"
                                className="md:px-6 px-2 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                              >
                                Booking Date
                              </th>
                              <th
                                scope="col"
                                className="md:px-6 px-2 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                              >
                                Delivery HeroID
                              </th>
                              <th
                                scope="col"
                                className="md:px-6 px-2 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="md:px-6 px-2 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            {data?.map((el) => (
                              <tr
                                key={el._id}
                                className="transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                              >
                                <td className="md:px-6 px-2 py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                                  {el.parcleType}
                                </td>
                                <td className="md:px-6 px-2 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                  {el?.reqDeliveryDate
                                    ? new Date(el.reqDeliveryDate)
                                        .toISOString()
                                        .split("T")[0]
                                    : "N/A"}
                                </td>
                                <td className="md:px-6 px-2py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                  {el.approxDeliveryDate}
                                </td>
                                <td className="md:px-6 px-2 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                  {el.bookingDate}
                                </td>
                                <td className="md:px-6 px-2 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                  {el.deliveryHeorId || "Not assigned"}
                                </td>
                                <td className="md:px-6 px-2 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                  {el.status}
                                </td>
                                <td className="md:px-6 px-2 py-4 space-x-1 flex text-xs md:text-sm font-medium">
                                  {el.status === "pending" && (
                                    <>
                                      <button
                                        type="button"
                                        disabled={
                                          el.status === "pending" ? false : true
                                        }
                                        onClick={() =>
                                          navigate(
                                            `/dashboard/update/${el._id}`
                                          )
                                        }
                                        className="bg-blue-500 w-full hover:bg-blue-600 text-white px-1 py-1 rounded-md"
                                      >
                                        Update
                                      </button>
                                      <button
                                        type="button"
                                        disabled={
                                          el.status === "pending" ? false : true
                                        }
                                        onClick={() =>
                                          handleCancel(el._id, el.status)
                                        }
                                        className="bg-red-500 w-full hover:bg-red-600 text-white px-1 py-1 rounded-md"
                                      >
                                        Cancel
                                      </button>
                                    </>
                                  )}
                                  {el.status === "delivered" && (
                                    <ModalForReview
                                      devieryHeroId={el.deliveryHeorId}
                                    />
                                  )}
                                  {el.status !== "canceled" && (
                                    <button
                                      onClick={() =>
                                        navigate("/dashboard/payment")
                                      }
                                      type="button"
                                      className="bg-green-500 w-full hover:bg-green-600 text-white px-2 py-1 rounded-md"
                                    >
                                      Pay
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Fade>
    </>
  );
};

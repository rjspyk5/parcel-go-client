import { useAuth } from "@/Hooks/useAuth";
import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { ModalForReview } from "@/components/ModalForReview/ModalForReview";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const MyParcels = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSequre = useAxiosSequre();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myparcel"],
    queryFn: async () => {
      const result = await axiosSequre.get(`/bookings/${user?.email}`);
      return result.data;
    },
  });

  const handleCancel = async (id, status) => {
    if (status === "pending") {
      const result = await axiosSequre.delete(`/booking/${id}`);
      if (result.data.acknowledged) {
        refetch();
        alert("cancel booking successfull");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-lg">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden border-b border-gray-200 dark:border-gray-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-orange-600 text-white">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                          >
                            Parcel Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                          >
                            Req. Delivery Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs md:text-sm  font-normal tracking-wider"
                          >
                            Approx. Delivery Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                          >
                            Booking Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                          >
                            Delivery HeroID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs md:text-sm font-normal  tracking-wider"
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
                            <td className="px-6 py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                              {el.parcleType}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {
                                new Date(el?.reqDeliveryDate)
                                  .toISOString()
                                  .split("T")[0]
                              }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {el.approxDeliveryDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {el.bookingDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {el.deliveryHeorId || "Not assigned"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {el.status}
                            </td>
                            <td className="px-6 py-4 space-x-1 flex text-xs md:text-sm font-medium">
                              {el.status === "pending" && (
                                <>
                                  <button
                                    type="button"
                                    disabled={
                                      el.status === "pending" ? false : true
                                    }
                                    onClick={() =>
                                      navigate(`/dashboard/update/${el._id}`)
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
                              <button
                                type="button"
                                disabled={
                                  el.status === "pending" ? false : true
                                }
                                className="bg-green-500 w-full hover:bg-green-600 text-white px-2 py-1 rounded-md"
                              >
                                Pay
                              </button>
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
        </div>
      </div>

      {/* <div className=" overflow-x-auto">
        <table className=" divide-y divide-gray-200  w-full dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="md:px-3 px-1 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Parcel Type
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Req. Delivery Date
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Approx. Delivery Date
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Booking Date
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal  text-left  text-gray-500 dark:text-gray-400">
                Delivery HeroID
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Status
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            {data?.map((el) => (
              <tr key={el._id}>
                <td className="md:px-3 px-1  py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                  {el.parcleType}
                </td>
                <td className="px-1 md:px-3 py-4 text-xs md:text-smfont-medium text-gray-700 ">
                  {el.reqDeliveryDate}
                </td>
                <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                  {el.approxDeliveryDate || "pending"}
                </td>
                <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 ">
                  {el.bookingDate}
                </td>
                <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 ">
                  {el.assignedDeliveryHero || "not assigned yet"}
                </td>
                <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                  {el.status}
                </td>
                <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                  <div className="flex items-center gap-x-2">
                    <button
                      type="button"
                      disabled={el.status === "pending" ? false : true}
                      onClick={() => handleCancel(el._id, el.status)}
                      className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                    <input
                      value="Update"
                      type="button"
                      disabled={el.status === "pending" ? false : true}
                      onClick={() => navigate(`/dashboard/update/${el._id}`)}
                      className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                    />
                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                      <h2 className="text-sm font-normal text-emerald-500">
                        Pay
                      </h2>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
};

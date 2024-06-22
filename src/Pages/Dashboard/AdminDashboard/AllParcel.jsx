import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useDeliveryMan } from "@/Hooks/useDeliveryMan";
import { RingSpinner } from "@/components/Loading/RingSpinner";
import { Modal } from "@/components/Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const AllParcel = () => {
  const [deliveryHeros, deliveryManLoading] = useDeliveryMan();
  const [loading, setLoading] = useState(true);

  const axiosSequre = useAxiosSequre();
  const [allParcel, setAllParcel] = useState([]);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["allParcels"],
    queryFn: async () => {
      const result = await axiosSequre.get("/bookings");
      setAllParcel(result.data);
      setLoading(false);
      return result.data;
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    const startDate = e.target.startDate.value;
    const endDate = e.target.endDate.value;
    axiosSequre
      .get(`/bookings?start=${startDate}&end=${endDate}`)
      .then((result) => setAllParcel(result.data))
      .then(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full py-5 px-2 sm:px-4 lg:px-6">
        <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-lg">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-t-lg">
            <div className="p-6  pb-0 bg-accent border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                All Parcel
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                Manage and track all your parcels in one place.
              </p>
              <div className="my-5 pt-4">
                <form
                  className="flex md:justify-end flex-col md:flex-row gap-4 md:items-center"
                  onSubmit={handleSearch}
                >
                  <div className="flex flex-col md:flex-row gap-2 md:items-center items-start">
                    <label htmlFor="startDate">From</label>
                    <input
                      required
                      className="px-2 w-full py-1 border text-black font-semibold rounded-md"
                      type="date"
                      name="startDate"
                      id="startDate"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:items-center items-start">
                    <label htmlFor="endDate">To </label>
                    <input
                      required
                      className="px-2 w-full text-black font-semibold py-1 border rounded-md"
                      type="date"
                      name="endDate"
                      id="endDate"
                    />
                  </div>

                  <input
                    type="submit"
                    className="bg-orange-600 px-3 py-[6px] text-white rounded-md text-center"
                    value="Search"
                  />
                </form>
              </div>
            </div>
          </div>

          {loading ? (
            <RingSpinner />
          ) : (
            <div className="overflow-x-auto  shadow-xl">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-orange-500">
                  <tr>
                    <th className="md:px-3 px-1 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                      User's Name
                    </th>
                    <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                      Mobile
                    </th>
                    <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                      Booking Date
                    </th>
                    <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                      Req. Delivery Date
                    </th>
                    <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                      Cost
                    </th>
                    <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                      Status
                    </th>
                    <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {allParcel &&
                    allParcel.map((el) => (
                      <tr
                        key={el._id}
                        className="transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <td className="md:px-3 px-1 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {el.senderName}
                        </td>
                        <td className="px-1 md:px-3 py-4 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                          {el.senderNumber}
                        </td>
                        <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                          {el.bookingDate}
                        </td>
                        <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                          {
                            new Date(el.reqDeliveryDate)
                              .toISOString()
                              .split("T")[0]
                          }
                        </td>
                        <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                          {el.price}
                        </td>
                        <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                          {el.status}
                        </td>
                        <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                          <button
                            className={`  text-white px-2 py-1 rounded-md ${
                              el.status === "canceled" ||
                              el.status === "delivered"
                                ? "bg-orange-300"
                                : "bg-orange-600 hover:bg-orange-700 "
                            }`}
                            disabled={
                              el.status === "canceled" ||
                              el.status === "delivered"
                                ? true
                                : false
                            }
                          >
                            <Modal
                              deliveryHeroData={{
                                deliveryHeros,
                                deliveryManLoading,
                                bookingId: el._id,
                                refetch,
                              }}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

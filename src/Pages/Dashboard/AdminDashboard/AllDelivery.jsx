import { useDeliveryMan } from "@/Hooks/useDeliveryMan";
import { RingSpinner } from "@/components/Loading/RingSpinner";
import { Fade } from "react-awesome-reveal";
export const AllDelivery = () => {
  const [alluser, isLoading] = useDeliveryMan();
  return (
    <Fade>
      <div className="flex justify-center items-center">
        <div className="w-full py-8 px-2 sm:px-4 lg:px-6">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-lg">
            <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-t-lg">
              <div className="md:p-8 p-4 bg-accent border-b border-gray-200 dark:border-gray-700">
                <h1 className="md:text-3xl text-xl font-bold text-gray-900 dark:text-white text-center">
                  All Delivery Men
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                  Manage and track all delivery personnel in one place.
                </p>
              </div>
            </div>

            {isLoading ? (
              <RingSpinner />
            ) : !isLoading && alluser.length < 1 ? (
              <p className="min-h-96 flex justify-center items-center text-2xl md:text-3xl">
                No DeliveryMan Available
              </p>
            ) : (
              <div className="overflow-x-auto shadow-xl">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-orange-500">
                    <tr>
                      <th className="md:px-3 px-1 md:py-3 py-1  text-xs md:text-sm font-normal text-left text-white">
                        Name
                      </th>
                      <th className="px-1 md:px-3 md:py-3 py-1  text-xs md:text-sm font-normal text-left text-white">
                        Mobile
                      </th>
                      <th className="px-1 md:px-3 md:py-3 py-1  text-xs md:text-sm font-normal text-left text-white">
                        Number of Parcel Delivered
                      </th>
                      <th className="px-1 md:px-3 md:py-3 py-1  text-xs md:text-sm font-normal text-left text-white">
                        Average Review
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {alluser.map((el) => (
                      <tr
                        key={el._id}
                        className="transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <td className="md:px-3 px-1 md:py-3 py-1  text-xs md:text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {el.name}
                        </td>
                        <td className="px-1 md:px-3 md:py-3 py-1  text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                          {el.number || "not given"}
                        </td>
                        <td className="px-1 md:px-3 md:py-3 py-1  text-xs md:text-sm text-gray-500 dark:text-gray-300">
                          {el.totalDelivered || 0}
                        </td>
                        <td className="px-1 md:px-3 md:py-3 py-1  text-xs md:text-sm text-gray-500 dark:text-gray-300">
                          {el.averageReview || 0}
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
    </Fade>
  );
};

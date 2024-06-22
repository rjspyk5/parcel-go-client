import { useDeliveryMan } from "@/Hooks/useDeliveryMan";
import { RingSpinner } from "@/components/Loading/RingSpinner";

export const AllDelivery = () => {
  const [alluser, isLoading] = useDeliveryMan();

  return (
    <div className="flex justify-center items-center">
      <div className="w-full py-8 px-2 sm:px-4 lg:px-6">
        <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-lg">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-t-lg">
            <div className="p-8 bg-accent border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                All Delivery Men
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                Manage and track all delivery personnel in one place.
              </p>
            </div>
          </div>

          {isLoading ? (
            <RingSpinner />
          ) : (
            <div className="overflow-x-auto shadow-xl">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-orange-500">
                  <tr>
                    <th className="md:px-3 px-1 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                      Name
                    </th>
                    <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                      Mobile
                    </th>
                    <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                      Number of Parcel Delivered
                    </th>
                    <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
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
                      <td className="md:px-3 px-1 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {el.name}
                      </td>
                      <td className="px-1 md:px-3 py-4 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {el.number || "not given"}
                      </td>
                      <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                        {el.totalDelivered || 0}
                      </td>
                      <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
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
  );
};

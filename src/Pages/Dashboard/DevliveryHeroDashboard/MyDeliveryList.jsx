import { useAuth } from "@/Hooks/useAuth";
import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { ModalForMap } from "@/components/ModalForMap/ModalForMap";
import { useQuery } from "@tanstack/react-query";

export const MyDeliveryList = () => {
  const [role] = useRoleCheker();
  const axiosSequre = useAxiosSequre();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["assignedHeroDeliveries"],
    queryFn: async () => {
      const result = await axiosSequre.get(`/assignedHero/${role?._id}`);
      return result.data;
    },
  });

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-3xl mb-4">My Delivery</h1>
      <div className=" overflow-x-auto rounded-md shadow-xl">
        <table className=" divide-y divide-gray-200  w-full dark:divide-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="md:px-3 px-1 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Sender name
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Sender Number
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Receivers Name
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Recivers Number
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Reciver Adress
              </th>

              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Req. Date
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal  text-left  text-gray-500 dark:text-gray-400">
                Approx. Date
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Map
              </th>

              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            {!isLoading &&
              data?.map((el) => {
                return (
                  <tr key={el._id}>
                    <td className="md:px-3 px-1  py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      {el.senderName}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-smfont-medium text-gray-700 ">
                      {el.senderNumber}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                      {el.recieverName}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                      {el.recieverNumber}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                      {el.recieverDeliveryAdress}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 ">
                      {el.reqDeliveryDate}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 ">
                      {el.approxDeliveryDate}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                      <ModalForMap
                        adress={el.recieverDeliveryAdress}
                        lon={el.recieverAdressLongitude}
                        lat={el.recieverAdressLatitute}
                      />
                    </td>

                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                      <div className="flex items-center gap-x-2">
                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
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
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </button>
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          <h2 className="text-sm font-normal text-emerald-500">
                            Deliverd
                          </h2>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

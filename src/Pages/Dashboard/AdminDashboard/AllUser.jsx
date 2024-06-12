import { useUser } from "@/Hooks/useUser";
import { SectionHeading } from "@/components/sectionHeading/SectionHeading";
import { useState } from "react";
export const AllUser = () => {
  const [user, isLoading, refetch] = useUser();
  const [perPageView, setperPageView] = useState(5);
  const totalPage = user?.userCount / perPageView;
  // const pages = [...Array(totalPage).keys()];
  // console.log(pages);
  // console.log(totalPage);

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-3xl mb-4">All Users</h1>

      <div className=" overflow-x-auto rounded-md shadow-xl">
        <table className=" divide-y divide-gray-200 rounded-md  w-full dark:divide-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="md:px-3 px-1 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                User's Name
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Phone Number
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Number Of Parcel Booked
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Spented Amount
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            {user?.result?.map((el) => {
              return (
                <tr key={el._id}>
                  <td className="md:px-3 px-1  py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    {el.name}
                  </td>
                  <td className="px-1 md:px-3 py-4 text-xs md:text-smfont-medium text-gray-700 ">
                    {el.number}
                  </td>
                  <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    {el.numberOfParcelBooked}
                  </td>
                  <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 ">
                    {el.totalSpendMoney}
                  </td>
                  <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                    <button>Make Admin</button>
                    <button>Make DeliveryHero</button>
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

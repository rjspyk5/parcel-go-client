import { useUser } from "@/Hooks/useUser";
import { useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useLoaderData } from "react-router-dom";

export const AllUser = () => {
  const { userCount } = useLoaderData();
  const axiosSequre = useAxiosSequre();
  const [user, setuser] = useState([]);
  const [perPageView, setperPageView] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);
  const totalPage = userCount && Math.ceil(userCount / perPageView);
  const pages = [...Array(totalPage).keys()];

  useEffect(() => {
    axiosSequre
      .get(`/user?page=${currentPage}&size=${perPageView}`)
      .then((result) => {
        setuser(result.data);
      });
  }, [currentPage]);

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
            {user?.map((el) => {
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
      <Pagination>
        <PaginationContent>
          <button
            onClick={() => currentPage > 1 && setcurrentPage(currentPage - 1)}
          >
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
          </button>

          {pages.map((el) => {
            return (
              <button key={el} onClick={() => setcurrentPage(el + 1)}>
                <PaginationItem>
                  <PaginationLink
                    className={currentPage === el + 1 && "bg-[#f15a25]"}
                  >
                    {el + 1}
                  </PaginationLink>
                </PaginationItem>
              </button>
            );
          })}
          <button
            onClick={() =>
              currentPage < totalPage && setcurrentPage(currentPage + 1)
            }
          >
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </button>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

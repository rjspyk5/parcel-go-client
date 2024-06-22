import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { RingSpinner } from "@/components/Loading/RingSpinner";

export const AllUser = () => {
  const { userCount } = useLoaderData();
  const axiosSequre = useAxiosSequre();
  const [user, setUser] = useState([]);
  const [perPageView, setPerPageView] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = userCount && Math.ceil(userCount / perPageView);
  const pages = [...Array(totalPage).keys()];
  const [loading, setLoading] = useState(true);

  const handleManage = async (id, role) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this action?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          setLoading(true);
          const result = await axiosSequre.patch(`/user/${id}`, {
            role: role,
          });
          return result;
        }
      })
      .then((result) => {
        if (result.data.acknowledged) {
          setLoading(false);
          Swal.fire({
            text: "User Changed Successfully",
            icon: "success",
          });
        }
      });
  };

  useEffect(() => {
    axiosSequre
      .get(`/user?page=${currentPage}&size=${perPageView}`)
      .then((result) => {
        setUser(result.data);
      })
      .then(() => setLoading(false));
  }, [currentPage, perPageView, handleManage]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full py-8 px-2 sm:px-4 lg:px-6">
        <div className="bg-white  dark:bg-gray-900 overflow-hidden shadow-md rounded-lg">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-t-lg">
            <div className="p-6 bg-accent border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                All Users
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                Manage and track all users in one place.
              </p>
            </div>
          </div>

          {loading ? (
            <RingSpinner />
          ) : (
            <>
              {user.length > 0 ? (
                <>
                  <div className="overflow-x-auto ">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-orange-500">
                        <tr>
                          <th className="md:px-3 px-1 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                            User's Name
                          </th>
                          <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                            Phone Number
                          </th>
                          <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                            Number Of Parcel Booked
                          </th>
                          <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                            Spent Amount
                          </th>
                          <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left text-white">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {user.map((el) => (
                          <tr
                            key={el._id}
                            className="transition-colors hover:bg-gray-100  dark:hover:bg-gray-800"
                          >
                            <td className="md:px-3 px-1 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {el.name}
                            </td>
                            <td className="px-1 md:px-3 py-4 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                              {el.number}
                            </td>
                            <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                              {el.numberOfParcelBooked}
                            </td>
                            <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                              {el.totalSpendMoney}
                            </td>
                            <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                              <button
                                onClick={() => handleManage(el._id, "admin")}
                                className="text-white bg-green-500 hover:bg-green-600 px-2 py-1 rounded-lg"
                              >
                                Make Admin
                              </button>
                              <br />
                              <button
                                onClick={() =>
                                  handleManage(el._id, "deliveryHero")
                                }
                                className="text-white bg-orange-500 hover:bg-orange-600 px-2 py-1 rounded-lg mt-2"
                              >
                                Make DeliveryMan
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Pagination className="my-8">
                    <PaginationContent>
                      <button
                        onClick={() =>
                          currentPage > 1 && setCurrentPage(currentPage - 1)
                        }
                      >
                        <PaginationItem>
                          <PaginationPrevious />
                        </PaginationItem>
                      </button>

                      {pages.map((el) => (
                        <button key={el} onClick={() => setCurrentPage(el + 1)}>
                          <PaginationItem>
                            <PaginationLink
                              className={
                                currentPage === el + 1 &&
                                "bg-[#f15a25] text-white"
                              }
                            >
                              {el + 1}
                            </PaginationLink>
                          </PaginationItem>
                        </button>
                      ))}
                      <button
                        onClick={() =>
                          currentPage < totalPage &&
                          setCurrentPage(currentPage + 1)
                        }
                      >
                        <PaginationItem>
                          <PaginationNext />
                        </PaginationItem>
                      </button>
                    </PaginationContent>
                  </Pagination>
                </>
              ) : (
                <p className="min-h-96 flex justify-center items-center text-2xl md:text-3xl">
                  No user found
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

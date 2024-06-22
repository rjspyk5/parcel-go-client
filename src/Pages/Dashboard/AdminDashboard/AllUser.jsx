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
import Swal from "sweetalert2";
import { RingSpinner } from "@/components/Loading/RingSpinner";
export const AllUser = () => {
  const { userCount } = useLoaderData();
  const axiosSequre = useAxiosSequre();
  const [user, setuser] = useState([]);
  const [perPageView, setperPageView] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);
  const totalPage = userCount && Math.ceil(userCount / perPageView);
  const pages = [...Array(totalPage).keys()];
  const [loading, setLoading] = useState(true);

  const handleManage = async (id, rolee) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this action??",
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
            role: rolee,
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
        setuser(result.data);
      })
      .then(() => setLoading(false));
  }, [currentPage, perPageView, handleManage]);

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-3xl mb-4">All Users</h1>

      {loading ? (
        <RingSpinner />
      ) : (
        <>
          {user.length > 0 ? (
            <>
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
                          <td className="px-1 md:px-3 py-4   ">
                            <button
                              onClick={() => handleManage(el._id, "admin")}
                              className=" text-orange-700 text-[10px] sm:text-sm md:text-sm bg-[#ff880025] px-2 rounded-lg py01"
                            >
                              Make Admin
                            </button>
                            <br />
                            <button
                              onClick={() =>
                                handleManage(el._id, "deliveryHero")
                              }
                              className=" text-orange-700 text-[10px] sm:text-sm md:text-sm mt-2 bg-[#ff880027] px-2 rounded-lg"
                            >
                              Make DeliveryMan
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <Pagination className="my-8">
                <PaginationContent>
                  <button
                    onClick={() =>
                      currentPage > 1 && setcurrentPage(currentPage - 1)
                    }
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
                            className={
                              currentPage === el + 1 &&
                              "bg-[#f15a25] text-white"
                            }
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
            </>
          ) : (
            <p className="min-h-96 flex justify-center items-center text-2xl md:text-3xl">
              No user found
            </p>
          )}
        </>
      )}
    </div>
  );
};

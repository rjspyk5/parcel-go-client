import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { ModalForMap } from "@/components/ModalForMap/ModalForMap";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";

export const MyDeliveryList = () => {
  const [role] = useRoleCheker();
  const [loading, setloading] = useState(false);
  const axiosSequre = useAxiosSequre();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["assignedHeroDeliveries"],
    queryFn: async () => {
      const result = await axiosSequre.get(`/assignedHero/${role?._id}`);
      return result.data;
    },
  });
  const handleManageDelivery = async (status, id) => {
    let text;
    if (status === "delivered") {
      text = "marked it as delivered";
    } else {
      text = "cancel this delivery";
    }
    Swal.fire({
      title: "Are you sure?",
      text: `You want to ${text}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2cc951",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          setloading(true);
          const result = await axiosSequre.patch(`/booking/${id}`, {
            status: status,
          });
          return result;
        }
      })
      .then((result) => {
        if (result?.data?.acknowledged) {
          refetch();
          setloading(false);
          Swal.fire({
            text: `Sucessfully ${text}`,
            icon: "success",
          });
        }
      });
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="w-full py-8 px-2 sm:px-4 lg:px-6">
        <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-lg">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-t-lg">
            <div className="p-6 bg-accent border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                My Delivery List
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                Manage and track all your deliveries in one place.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-orange-600 text-white">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs md:text-sm font-normal tracking-wider">
                          Sender Name
                        </th>
                        <th className="px-4 py-2 text-left text-xs md:text-sm font-normal tracking-wider">
                          Sender Number
                        </th>
                        <th className="px-4 py-2 text-left text-xs md:text-sm font-normal tracking-wider">
                          Receiver Name
                        </th>
                        <th className="px-4 py-2 text-left text-xs md:text-sm font-normal tracking-wider">
                          Receiver Number
                        </th>
                        <th className="px-4 py-2 text-left text-xs md:text-sm font-normal tracking-wider">
                          Receiver Address
                        </th>
                        <th className="px-4 py-2 text-left text-xs md:text-sm font-normal tracking-wider">
                          Req. Date
                        </th>
                        <th className="px-4 py-2 text-left text-xs md:text-sm font-normal tracking-wider">
                          Approx. Date
                        </th>
                        <th className="px-4 py-2 text-left text-xs md:text-sm font-normal tracking-wider">
                          Map
                        </th>
                        <th className="px-4 py-2 text-left text-xs md:text-sm font-normal tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {!isLoading &&
                        data?.map((el) => (
                          <tr
                            key={el._id}
                            className="transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            <td className="px-4 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                              {el.senderName}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {el.senderNumber}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {el.recieverName}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-xs md:text-sm">
                              {el.recieverNumber}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-xs md:text-sm">
                              {el.recieverDeliveryAdress}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {
                                new Date(el?.reqDeliveryDate)
                                  .toISOString()
                                  .split("T")[0]
                              }
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {el.approxDeliveryDate}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-xs md:text-sm">
                              <ModalForMap
                                adress={el.recieverDeliveryAdress}
                                lon={el.recieverAdressLongitude}
                                lat={el.recieverAdressLatitute}
                              />
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-xs md:text-sm">
                              {el.status === "delivered" ? (
                                <span className="px-2 py-1 rounded-md text-green-600 bg-[#55e25546]">
                                  Delivered
                                </span>
                              ) : el.status === "canceled" ? (
                                <span className="px-2 py-1 rounded-md text-red-600 bg-[#e73c1d1a]">
                                  Canceled
                                </span>
                              ) : (
                                <>
                                  <div className="flex items-center gap-x-1">
                                    <span
                                      onClick={() =>
                                        handleManageDelivery(
                                          "delivered",
                                          el?._id
                                        )
                                      }
                                    >
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="bg-green-500 text-white hover:text-white hover:bg-green-600"
                                      >
                                        Delivery
                                      </Button>
                                    </span>
                                    <span
                                      onClick={() =>
                                        handleManageDelivery(
                                          "canceled",
                                          el?._id
                                        )
                                      }
                                    >
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="bg-red-500 text-white hover:text-white hover:bg-red-600"
                                      >
                                        Cancel
                                      </Button>
                                    </span>
                                  </div>
                                </>
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
      </div>
    </div>
  );
};

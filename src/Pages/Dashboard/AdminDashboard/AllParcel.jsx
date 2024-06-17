import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useDeliveryMan } from "@/Hooks/useDeliveryMan";
import { Modal } from "@/components/Modal/Modal";
import { useQuery } from "@tanstack/react-query";

export const AllParcel = () => {
  const [deliveryHeros, deliveryManLoading] = useDeliveryMan();
  const axiosSequre = useAxiosSequre();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["allParcels"],
    queryFn: async () => {
      const result = await axiosSequre.get("/bookings");
      return result.data;
    },
  });
  const handleSearch = (e) => {
    e.preventDefault();

    const startDate = e.target.startDate.value;
    const endDate = e.target.endDate.value;

    axiosSequre
      .get(`/bookings?start=${startDate}&end=${endDate}`)
      .then((result) => console.log(result.data));
  };
  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-3xl mb-4">All Parcel</h1>
      <div className="my-5">
        <form
          className="flex md:justify-end flex-col md:flex-row gap-4 md:items-center"
          onSubmit={handleSearch}
          action=""
        >
          <div className="flex flex-col  md:flex-row gap-2 md:items-center items-start">
            <label htmlFor="startDate">From</label>
            <input
              required
              className="px-2 w-full py-1 border rounded-md"
              type="date"
              name="startDate"
              id=""
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:items-center items-start">
            <label htmlFor="endDate">To </label>
            <input
              required
              className="px-2 w-full py-1 border rounded-md"
              type="date"
              name="endDate"
              id=""
            />
          </div>

          <input
            type="submit"
            className="bg-orange-600 px-3 py-[6px] text-white  rounded-md text-center"
            value="Search"
          />
        </form>
      </div>
      <div className=" overflow-x-auto rounded-md shadow-xl">
        <table className=" divide-y divide-gray-200  w-full dark:divide-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="md:px-3 px-1 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                User's Name
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Mobile
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Booking Date
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Req. Delivery Date
              </th>

              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal  text-left  text-gray-500 dark:text-gray-400">
                Cost
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
            {data &&
              data.map((el) => {
                return (
                  <tr key={el._id}>
                    <td className="md:px-3 px-1  py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      {el.senderName}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-smfont-medium text-gray-700 ">
                      {el.senderNumber}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                      {el.bookingDate}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 ">
                      {el.reqDeliveryDate}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 ">
                      {el.price}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                      {el.status}
                    </td>
                    <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                      <Modal
                        deliveryHeroData={{
                          deliveryHeros,
                          deliveryManLoading,
                          bookingId: el._id,
                        }}
                      />
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

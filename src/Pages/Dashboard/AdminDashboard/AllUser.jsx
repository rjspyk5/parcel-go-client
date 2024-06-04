import React from "react";

export const AllUser = () => {
  return (
    <div>
      <div className=" overflow-x-auto">
        <table className=" divide-y divide-gray-200  w-full dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
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

              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal  text-left  text-gray-500 dark:text-gray-400">
                Make Delivery Hero
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Make Admin
              </th>
              <th className="px-1 md:px-3 py-3.5 text-xs md:text-sm font-normal text-left  text-gray-500 dark:text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            <tr>
              <td className="md:px-3 px-1  py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                Lead Developer
              </td>
              <td className="px-1 md:px-3 py-4 text-xs md:text-smfont-medium text-gray-700 ">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <h2 className="text-xs md:text-sm font-normal text-emerald-500">
                    Active
                  </h2>
                </div>
              </td>
              <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                Lead Developer
              </td>
              <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 ">
                ameliaand
              </td>
              <td className="px-1 md:px-3 py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300 ">
                ameliaanderso
              </td>
              <td className="px-1 md:px-3 py-4 text-xs md:text-sm">test</td>
              <td className="px-1 md:px-3 py-4 text-xs md:text-sm">
                <div className="flex items-center gap-x-2">
                  <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
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
                      Pay
                    </h2>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

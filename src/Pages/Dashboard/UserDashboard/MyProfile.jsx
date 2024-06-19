export const MyProfile = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center flex-grow p-6 bg-gray-100 dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl">
          <div className="col-span-1 shadow-xl border p-4 bg-white dark:bg-gray-700 dark:border-gray-600 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 mb-4 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-300">
                Profile Pic
              </span>
            </div>
            <input type="file" id="profilePicUpload" className="hidden" />
            <label
              htmlFor="profilePicUpload"
              className="bg-blue-600 text-white py-2 px-4 rounded w-full mb-2 text-center cursor-pointer hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Upload Profile Picture
            </label>
            <button className="bg-green-600 text-white py-2 px-4 rounded w-full hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
              Update
            </button>
          </div>

          <div className="md:col-span-2 shadow-xl border p-4 bg-white dark:bg-gray-700 dark:border-gray-600">
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              User Information
            </h2>
            <table className="table-auto w-full">
              <tbody>
                <tr className="border-b dark:border-gray-600">
                  <td className="px-4 py-2 font-semibold dark:text-gray-300">
                    Name :
                  </td>
                  <td className="px-4 py-2 dark:text-gray-200">
                    Rakibul Islam
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600">
                  <td className="px-4 py-2 font-semibold dark:text-gray-300">
                    Email :
                  </td>
                  <td className="px-4 py-2 dark:text-gray-200">
                    test@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

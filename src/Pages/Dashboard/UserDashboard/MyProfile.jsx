import { useAuth } from "@/Hooks/useAuth";
import { useAxiosPublic } from "@/Hooks/useAxiosPublic";
import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { CustomLoading } from "@/components/Loading/CustomLoading";
import { UploadSpinner } from "@/components/Loading/UploadSpinner";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
export const MyProfile = () => {
  const { updateInfo, user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [userRole, isLoading, refetch] = useRoleCheker();
  const [loading, setloading] = useState(false);
  const [uploadLoading, setuploadLoading] = useState(false);

  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_API
  }`;
  const [profilePhotoName, setprofilePhotoName] = useState(
    "Upload Profile Photo"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setuploadLoading(true);
    const handleImageUpload = async () => {
      if (data.image.length > 0) {
        const imageFile = { image: data.image[0] };
        const im = await axios.post(url, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        data.image = im.data.data.display_url;
      } else {
        data.image = "https://iili.io/Jbv2kkF.jpg";
      }
    };
    handleImageUpload()
      .then(() => {
        setuploadLoading(false);
        setloading(true);
        axiosPublic.patch(`/userprofile/${user?.email}`, { image: data.image });
      })
      .then(() => {
        refetch();
        setloading(false);
        Swal.fire({
          text: "Profile picture changes successfully",
          icon: "success",
        });
      })
      .catch((er) => {
        setloading(false);
        setuploadLoading(false);
        console.log(er);
      });
  };

  return (
    <div className="relative">
      {uploadLoading && <UploadSpinner />}
      {!uploadLoading && loading && <CustomLoading />}

      <div className=" flex justify-center items-center">
        <div className="w-full py-8 px-2 sm:px-4 lg:px-6">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-lg">
            <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-t-lg">
              <div className="p-6 bg-orange-500  border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-3xl font-bold text-white text-center">
                  My Profile
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center min-h-[300px] flex-grow p-6 ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full  max-w-4xl">
                <div className="col-span-1 rounded-md shadow-xl border p-4 overflow-hidden flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 mb-4 flex items-center justify-center">
                    <img
                      className="w-24 h-24 rounded-full"
                      src={userRole?.image}
                      alt=""
                    />
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="flex items-center justify-center py-2   w-full mb-2 text-center  bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-300 dark:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>

                      <h2 className="mx-3 text-gray-400 overflow-hidden">
                        {profilePhotoName}
                      </h2>

                      <input
                        {...register("image", { required: true })}
                        id="dropzone-file"
                        type="file"
                        onChange={(e) =>
                          e.target.files.length &&
                          setprofilePhotoName(e.target.files[0].name)
                        }
                        className=" opacity-0 w-0 h-0 overflow-hidden"
                      />
                    </label>
                    {errors.image && (
                      <p className="text-center my-1 text-red-500">
                        This field is required
                      </p>
                    )}
                    <input
                      type="submit"
                      value="Update"
                      className="bg-orange-600 cursor-pointer text-white py-2 px-4 rounded w-full hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
                    />
                  </form>
                </div>

                <div className="md:col-span-2 rounded-md shadow-xl border p-4  ">
                  <h2 className="text-xl font-bold mb-4 text-center dark:text-white">
                    User Information
                  </h2>
                  <table className="table-auto w-full">
                    <tbody>
                      <tr className="border-b dark:border-gray-600">
                        <td className="px-4 py-2 font-semibold dark:text-gray-300">
                          Name :
                        </td>
                        <td className="px-4 py-2 dark:text-gray-200">
                          {userRole?.name}
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-600">
                        <td className="px-4 py-2 font-semibold dark:text-gray-300">
                          Email :
                        </td>
                        <td className="px-4 py-2 dark:text-gray-200">
                          {userRole?.email}
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-600">
                        <td className="px-4 py-2 font-semibold dark:text-gray-300">
                          Mobile :
                        </td>
                        <td className="px-4 py-2 dark:text-gray-200">
                          {userRole?.number}
                        </td>
                      </tr>
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

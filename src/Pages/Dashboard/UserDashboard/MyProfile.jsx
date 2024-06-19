import { useAuth } from "@/Hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
export const MyProfile = () => {
  const { updateInfo, user } = useAuth();

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
    console.log(data);
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
      .then(() => console.log("image up"))
      .then(() => updateInfo(data.image))
      .then(() => window.location.reload())
      .catch((er) => console.log(er));
  };

  return (
    <div>
      {" "}
      <div className="flex justify-center items-center min-h-[300px] flex-grow p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full  max-w-4xl">
          <div className="col-span-1 rounded-md shadow-xl border p-4 overflow-hidden flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 mb-4 flex items-center justify-center">
              <img
                className="w-24 h-24 rounded-full"
                src={user.photoURL}
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
                    {user?.displayName}
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600">
                  <td className="px-4 py-2 font-semibold dark:text-gray-300">
                    Email :
                  </td>
                  <td className="px-4 py-2 dark:text-gray-200">
                    {user?.email}
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

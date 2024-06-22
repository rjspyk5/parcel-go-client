import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Rating, Star } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const MyReviews = () => {
  const [userInfo] = useRoleCheker();
  const axiosSequre = useAxiosSequre();
  const [reviews, setreviews] = useState([]);
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#f15a25",
    inactiveFillColor: "#f15b2533",
  };

  const { data, refetch } = useQuery({
    queryKey: ["deliverymanallreviews"],
    queryFn: async () => {
      const result = await axiosSequre.get(`/reviews/${userInfo?._id}`);
      setreviews(result.data);
      return result.data;
    },
  });

  return (
    <div className="flex justify-center items-center">
      <div className="w-full py-8 px-2 sm:px-4 lg:px-6">
        <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-lg">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-t-lg">
            <div className="p-6 bg-accent border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                My Reviews
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                Manage and track all your deliveries in one place.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3  gap-2">
            {reviews?.map((el) => {
              return (
                <div
                  key={el._id}
                  className=" bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src={el.reviewGiverImage}
                          className="w-9 h-9 rounded-full"
                          alt="user"
                        />
                      </Avatar>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                          {el.reviewGiverName}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {el.reviewGivenDate}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Rating
                        readOnly
                        spaceBetween="medium"
                        itemStyles={myStyles}
                        className="w-36"
                        value={el.rating}
                      />
                    </div>
                    <div className="mt-7">
                      <q className="text-gray-700 dark:text-gray-300">
                        {el.feedback}
                      </q>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

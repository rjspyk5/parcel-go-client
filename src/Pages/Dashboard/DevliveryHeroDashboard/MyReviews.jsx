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
      userInfo &&
        axiosSequre
          .get(`/reviews/${userInfo?._id}`)
          .then((el) => setreviews(el.data))
          .catch((er) => console.log(er));
    },
  });

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-3xl mb-4">My Reviews</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3  gap-2">
        {reviews.map((el) => {
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
  );
};

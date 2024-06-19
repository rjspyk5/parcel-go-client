import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";

export const MyReviews = () => {
  const [userInfo] = useRoleCheker();
  const axiosSequre = useAxiosSequre();
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    userInfo &&
      axiosSequre
        .get(`/reviews/${userInfo._id}`)
        .then((el) => setreviews(el.data))
        .catch((er) => console.log(er));
  }, [userInfo]);

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-3xl mb-4">My Reviews</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="border shadow-xl p-2 rounded-md">
          <div className="flex gap"></div>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-9 h-9 rounded-full"
              alt="user"
            />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

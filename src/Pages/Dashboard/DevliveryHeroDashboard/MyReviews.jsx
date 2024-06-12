import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const MyReviews = () => {
  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-3xl mb-4">My Reviews</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="border shadow-xl p-2 rounded-md">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-9 h-9 rounded-full"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

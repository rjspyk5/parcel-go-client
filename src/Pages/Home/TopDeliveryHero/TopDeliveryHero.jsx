import { useAxiosPublic } from "@/Hooks/useAxiosPublic";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Rating, Star } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
export const TopDeliveryHero = () => {
  const axiosPublic = useAxiosPublic();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["topheros"],
    queryFn: async () => {
      const result = await axiosPublic.get("/tophero");
      return result.data;
    },
  });

  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#f15a25",
    inactiveFillColor: "#bdb8aa",
  };
  return (
    <div>
      <section className=" ">
        <div className="container px-6  mx-auto">
          <div className="grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {data?.map((el) => {
              return (
                <div
                  key={el._id}
                  className="w-full shadow-lg  rounded-md py-5 text-center"
                >
                  <Avatar>
                    <AvatarImage
                      src={el.image}
                      className="object-cover object-center w-40 h-40 mx-auto rounded-full"
                      alt="DeliveryHero"
                    />
                  </Avatar>

                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {el.name}
                    </h3>

                    <Rating
                      readOnly
                      spaceBetween="medium"
                      itemStyles={myStyles}
                      className="w-28 mx-auto my-2"
                      value={el.averageRating}
                    />
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Parcels Delivered:{" "}
                      <span className="font-medium">
                        {el.toalParcelDelivered}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

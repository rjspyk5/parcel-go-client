import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useAuth } from "@/Hooks/useAuth"; // Assume this hook provides user's name and image
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Rating, Star } from "@smastrom/react-rating";
import moment from "moment";

export const ModalForReview = ({ devieryHeroId }) => {
  const closeModal = useRef(null);
  const axiosSequre = useAxiosSequre();
  const [rating, setrating] = useState(0);
  const { user } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    data.reviewGivenDate = moment().format("YYYY-MM-DD");
    data.devieryHeroId = devieryHeroId;
    data.reviewGiverName = user?.displayName;
    data.reviewGiverImage = user?.photoURL;

    const result = await axiosSequre.patch(`/review`, data);
    if (result?.data?.insertedId) {
      if (closeModal.current) {
        closeModal.current.click();
      }
    }
    console.log(result.data);
  };

  const ratingChanged = (e) => {
    setValue("rating", e);
    setrating(e);
  };

  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#f15a25",
    inactiveFillColor: "#f15b2533",
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <span className="bg-orange-600 text-white px-4 py-2 rounded-md">
            Review
          </span>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="text-2xl text-center font-bold text-gray-800 dark:text-gray-200">
                Submit Your Review
              </DialogTitle>
              <DialogDescription>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="text-lg text-gray-800 dark:text-gray-200">
                    {user.displayName}
                  </span>
                </div>
                <input disabled defaultValue={devieryHeroId} />
                <div className="mb-4">
                  <label className="block pb-2 text-lg text-gray-800 dark:text-gray-200">
                    Rating
                  </label>
                  <Rating
                    spaceBetween="medium"
                    onChange={ratingChanged}
                    value={rating}
                    className="w-72 mx-auto"
                    itemStyles={myStyles}
                  />
                  <input
                    type="hidden"
                    {...register("rating", { required: true })}
                  />
                  {errors.rating && (
                    <span className="block text-red-500 py-2" role="alert">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block pb-2 text-lg text-gray-800 dark:text-gray-200">
                    Feedback
                  </label>
                  <textarea
                    className="w-full p-3 rounded-md border-2"
                    placeholder="Your feedback"
                    {...register("feedback", { required: true })}
                    aria-invalid={errors.feedback ? "true" : "false"}
                  />
                  {errors.feedback && (
                    <span className="block text-red-500 py-2" role="alert">
                      This field is required
                    </span>
                  )}
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="space-x-4">
              <input
                className="bg-orange-600 px-4 py-2 text-white rounded-md"
                value="Submit"
                type="submit"
              />
              <DialogClose
                className="bg-red-700 px-4 py-2 text-white rounded-md"
                ref={closeModal}
              >
                Close
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

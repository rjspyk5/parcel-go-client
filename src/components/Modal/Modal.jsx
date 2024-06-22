import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
export const Modal = ({
  deliveryHeroData: { deliveryHeros, deliveryManLoading, bookingId, refetch },
}) => {
  const closeModal = useRef(null);

  const axiosSequre = useAxiosSequre();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    data.status = "On the way";
    const result = await axiosSequre.patch(`/booking/${bookingId}`, data);
    if (result?.data?.acknowledged) {
      if (closeModal.current) {
        closeModal.current.click();

        refetch();
        reset();

        Swal.fire({
          icon: "success",
          text: "Successfully Assigned Delivery Hero",
          timer: 2000,
        });
      }
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-orange-500  hover:bg-orange-600 text-white px-2 py-1 rounded-md">
          Manage
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogDescription>
                <label>
                  <span className="block pb-2 text-lg">
                    Approx. Delivery Date :
                  </span>
                </label>
                <input
                  className="w-full p-3 rounded-md  border-2"
                  placeholder="Select a date"
                  {...register("approxDeliveryDate", { required: true })}
                  aria-invalid={errors.approxDeliveryDate ? "true" : "false"}
                  type="date"
                />
                {errors.approxDeliveryDate?.type === "required" && (
                  <span className="block text-red-500 py-2" role="alert">
                    This field is required
                  </span>
                )}
                <label>
                  <span className="block pb-2 mt-4 text-lg ">
                    Assign a Delivery Hero :
                  </span>
                </label>
                <select
                  defaultValue=""
                  className="w-full p-3 rounded-md border-2 "
                  {...register("deliveryHeorId", { required: true })}
                  aria-invalid={errors.deliveryHeorId ? "true" : "false"}
                >
                  <option value="" className="text-gray-600">
                    Select a DeliveryHero
                  </option>
                  {deliveryHeros?.map((el) => {
                    return (
                      <option
                        className="p-3 rounded-md"
                        key={el._id}
                        value={el._id}
                      >
                        {el.name}
                      </option>
                    );
                  })}
                </select>
                {errors.deliveryHeorId?.type === "required" && (
                  <span className="block text-red-500 py-2" role="alert">
                    This field is required
                  </span>
                )}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <input
                className="bg-orange-600 px-3 py-2 text-white mt-5 rounded-md text-center"
                value="Assign"
                type="submit"
              />
              <DialogClose
                className="bg-red-700 px-3 py-2 text-white mt-5 rounded-md text-center"
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

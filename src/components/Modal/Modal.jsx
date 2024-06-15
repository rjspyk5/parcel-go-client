import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
export const Modal = ({
  deliveryHeroData: { deliveryHeros, deliveryManLoading },
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Dialog>
        <DialogTrigger>Manage</DialogTrigger>
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
                  className="w-full p-3 rounded-md border-2"
                  {...register("deliveryHeorId", { required: true })}
                  aria-invalid={errors.deliveryHeorId ? "true" : "false"}
                >
                  {deliveryHeros?.map((el) => {
                    return (
                      <option key={el._id} value={el._id}>
                        {el.name}
                      </option>
                    );
                  })}
                </select>
                {errors.deliveryHeorId?.type === "required" && (
                  <span className="block" role="alert">
                    First name is required
                  </span>
                )}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <input
                  className="bg-orange-600 px-3 py-2 text-white mt-5 rounded-md text-center"
                  disabled={
                    errors.approxDeliveryDate?.type === "required" ||
                    errors.deliveryHeorId?.type === "required"
                      ? true
                      : false
                  }
                  value="Assign"
                  type="submit"
                />
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

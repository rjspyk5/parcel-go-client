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
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogDescription>
                <input
                  placeholder="Select a date"
                  {...register("approxDeliveryDate", { required: true })}
                  type="date"
                />

                <br />
                {errors.approxDeliveryDate?.type === "required" && (
                  <span className="block" role="alert">
                    Approx Delivery Date is required
                  </span>
                )}
                <select
                  required
                  {...register("deliveryHeorId", { required: true })}
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

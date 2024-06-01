import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectDropDown = () => {
  return (
    <Select>
      <SelectTrigger className="block w-full px-10 pb-8 pt-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 ">
        <SelectValue placeholder="Select User Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="user">User</SelectItem>
        <SelectItem value="deliveryMan">Delivery Man</SelectItem>
      </SelectContent>
    </Select>
  );
};

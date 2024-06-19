import { Barchart } from "@/components/BarChart/Barchart";
import { Linechart } from "@/components/LineChart/LineChart";

export const Statistics = () => {
  return (
    <div className="flex-1 p-6 space-y-8">
      <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-500 mb-4">
        Statistics Dashboard
      </h1>
      <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Total Booking by Date
        </h2>
        <Barchart />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Average High & Low Temperature
        </h2>
        <Linechart />
      </div>
    </div>
  );
};

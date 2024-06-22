import { Barchart } from "@/components/BarChart/Barchart";
import { Linechart } from "@/components/LineChart/LineChart";

export const Statistics = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full py-8 px-2 sm:px-4 lg:px-6">
        <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-lg">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-md rounded-t-lg">
            <div className="p-8 bg-accent border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-3xl font-bold text-center">Statistics</h1>
            </div>
          </div>

          <div className="p-6 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
              <Barchart />
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
              <Linechart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

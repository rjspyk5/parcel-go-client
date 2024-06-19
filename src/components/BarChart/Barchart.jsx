import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export const Barchart = () => {
  const axiosSequre = useAxiosSequre();
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      title: {
        text: "Total booking by date",
        align: "center",
        style: {
          fontSize: "16px",
          color: "#374151", // dark:text-gray-300
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
        title: {
          text: "Total Booked on that date",
          style: {
            color: "#374151", // dark:text-gray-300
          },
        },
      },
      yaxis: {
        title: {
          text: "Date",
          style: {
            color: "#374151", // dark:text-gray-300
          },
        },
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosSequre.get("/booking-stats");
      const dateData = result.data.map((el) => el._id);
      const countData = result.data.map((el) => el.count);
      setChartData((prevChartData) => ({
        ...prevChartData,
        series: [{ data: countData }],
        options: {
          ...prevChartData.options,
          xaxis: {
            categories: dateData,
          },
        },
      }));
    };

    fetchData();
  }, [axiosSequre]);

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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
          color: "#374151",
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
            color: "#374151",
          },
        },
      },
      yaxis: {
        title: {
          text: "Date",
          style: {
            color: "#374151",
          },
        },
      },
    },
  });

  const { data, refetch } = useQuery({
    queryKey: ["bookingstatictis"],
    queryFn: async () => {
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
    },
  });

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

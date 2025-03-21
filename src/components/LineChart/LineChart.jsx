import { useAxiosSequre } from "@/Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const Linechart = () => {
  const axiosSequre = useAxiosSequre();
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Booked Parcels",
        data: [],
      },
      {
        name: "Delivered Parcels",
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#f97316", "#1ddb72"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Booked vs Delivered Parcels",
        align: "center",
        style: {
          fontSize: "14px",
          color: "#374151",
        },
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [],
        title: {
          text: "Date",
          style: {
            color: "#374151",
          },
        },
      },
      yaxis: {
        min: 0,
        forceNiceScale: true,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
        labels: {
          colors: "#374151",
        },
      },
    },
  });

  const { data } = useQuery({
    queryKey: ["bookingchart"],
    queryFn: async () => {
      const result = await axiosSequre.get("/bookingchart");
      const categories = result?.data?.map((item) => item._id);
      const bookedData = result?.data?.map((item) => item.totalBooked);
      const deliveredData = result?.data?.map((item) => item.totalDelivered);
      setChartData((prevChartData) => ({
        ...prevChartData,
        series: [
          { ...prevChartData.series[0], data: bookedData },
          { ...prevChartData.series[1], data: deliveredData },
        ],
        options: {
          ...prevChartData.options,
          xaxis: {
            ...prevChartData.options.xaxis,
            categories: categories,
          },
        },
      }));
      return result.data;
    },
  });
  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

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
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
        title: {
          text: "Total Booked on that date",
        },
      },
      yaxis: {
        title: {
          text: "Date",
        },
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosSequre.get("/booking-stats");
      const dateData = result.data.map((el) => el._id);
      const countData = result.data.map((el) => el.count);
      setChartData(() => ({
        ...chartData,
        series: [{ data: countData }],
        options: {
          ...chartData.options,
          xaxis: {
            categories: dateData,
          },
        },
      }));
    };

    fetchData();
  }, []);

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

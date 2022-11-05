import React, { useState, useEffect } from "react";
import "./Livechart.css";
import ReactApexChart from "react-apexcharts";
import { useQueueState } from "rooks";
// import moment from "moment";
// import mqtt from "mqtt";

function Livechart() {
  function get_y_axis(y_val) {
    const y = y_val;
    if (y_axis.length < 6) {
      sety_axis([...y_axis, y]);
    }
    if (y_axis.length > 5) {
      sety_axis([...y_axis.slice(1), y]);
    }
  }

  function get_x_axis(x_val) {
    let x = x_val;
    if (x_axis.length < 6) {
      setx_axis([...x_axis, x]);
    }
    if (x_axis.length > 5) {
      setx_axis([...x_axis.slice(1), x]);
    }
  }
  // var cnt = 0;
  const [x_axis, setx_axis] = useState([new Date().toISOString()]);
  const [y_axis, sety_axis] = useState([
    Math.floor(Math.random() * 101).toFixed(2),
  ]);
  const [Volt_R, setVolt_R] = useState({
    series: [
      {
        name: "Voltage-R",
        data: y_axis,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      // noData: {
      //   text: "Loading...",
      //   align: "center",
      //   verticalAlign: "middle",
      //   offsetX: 0,
      //   offsetY: 0,
      //   style: {
      //     color: "#000000",
      //     fontSize: "14px",
      //     fontFamily: "Helvetica",
      //   },
      // },
      markers: {
        size: 2,
        hover: {
          size: undefined,
          sizeOffset: 3,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: x_axis,
      },
      tooltip: {
        x: {
          format: "HH:mm:ss",
        },
      },
    },
  });

  function getData1() {
    return {
      series: [
        {
          name: "Voltage-R",
          data: y_axis,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        markers: {
          size: 7,
          hover: {
            size: undefined,
            sizeOffset: 3,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: x_axis,
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy HH:mm:ss",
          },
        },
      },
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setVolt_R((x) => getData1());
      get_x_axis(new Date().toISOString());
      get_y_axis(Math.floor(Math.random() * 101).toFixed(2));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="livechart">
      <h3>Voltage R</h3>
      <br />
      <ReactApexChart
        options={Volt_R.options}
        series={Volt_R.series}
        type="line"
        height={350}
        width={400}
      />
      {/* <h2>{count.value}</h2> */}
    </div>
  );
}

export default Livechart;

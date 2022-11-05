import React, { useState, useEffect } from "react";
import "./Livechart.css";
import ReactApexChart from "react-apexcharts";
// import moment from "moment";
// import mqtt from "mqtt";

function Livechart() {
  function get_y_axis(y_val) {
    const y = y_val;
    sety_axis([...y_axis, y]);
  }

  function get_x_axis(x_val) {
    let x = x_val;
    setx_axis([...x_axis, x]);
  }
  // var cnt = 0;
  const [x_axis, setx_axis] = useState([]);
  const [y_axis, sety_axis] = useState([]);
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
      noData: {
        text: "Loading...",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#000000",
          fontSize: "14px",
          fontFamily: "Helvetica",
        },
      },
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
          zoom: {
            enabled: true,
            type: "x",
            autoScaleYaxis: false,
            zoomedArea: {
              fill: {
                color: "#90CAF9",
                opacity: 0.4,
              },
              stroke: {
                color: "#0D47A1",
                opacity: 0.4,
                width: 1,
              },
            },
          },
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
      get_x_axis(new Date().toISOString());
      get_y_axis(Math.floor(Math.random() * 101).toFixed(2));

      // cnt = cnt + 1;
      // console.log(cnt);

      setVolt_R((x) => getData1());
      // console.log("x_array length : " + x_axis.length);
      // console.log("y_array length : " + y_axis.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [Volt_R, x_axis, y_axis]);

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

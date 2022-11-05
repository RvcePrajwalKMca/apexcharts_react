import React, { useState, useEffect } from "react";
import "./Livechart.css";
import ReactApexChart from "react-apexcharts";
// import moment from "moment";
// import mqtt from "mqtt";

function Livechart() {
  // var [count, setCount] = useState({
  //   value: Math.floor(Math.random() * 101).toFixed(2),
  // });
  function get_y_axis(y_val) {
    const y = y_val;
    console.log(y);
    sety_axis([...y_axis, y]);
  }

  function get_x_axis(x_val) {
    let x = x_val;
    console.log(x);
    setx_axis([...x_axis, x]);
  }
  const [x_axis, setx_axis] = useState([]);
  const [y_axis, sety_axis] = useState([]);
  const [Volt_R, setVolt_R] = useState({
    series: [
      {
        name: "Voltage-R",
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [],
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
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
        dataLabels: {
          enabled: true,
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
    };
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     sety_axis((y) => get_y_axis(y_axis));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [y_axis]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setx_axis((x) => get_x_axis(x_axis));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [x_axis]);

  useEffect(() => {
    const interval = setInterval(() => {
      get_x_axis(new Date().toISOString());
      get_y_axis(Math.floor(Math.random() * 101).toFixed(2));
      setVolt_R((x) => getData1());
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
        width={500}
      />
      {/* <h2>{count.value}</h2> */}
    </div>
  );
}

export default Livechart;

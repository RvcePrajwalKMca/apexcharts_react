import React, { useState, useEffect } from "react";
import "./Livechart.css";
import ReactApexChart from "react-apexcharts";
// import moment from "moment";
// import mqtt from "mqtt";

function Livechart() {
  function get_y1_axis(y_val) {
    if (y1_axis.length < 6) {
      sety1_axis([...y1_axis, y_val]);
    } else {
      sety1_axis([...y1_axis.slice(1), y_val]);
    }
  }
  function get_y2_axis(y_val) {
    if (y2_axis.length < 6) {
      sety2_axis([...y2_axis, y_val]);
    } else {
      sety2_axis([...y2_axis.slice(1), y_val]);
    }
  }

  function get_x_axis(x_val) {
    if (x_axis.length < 6) {
      setx_axis([...x_axis, x_val]);
    } else {
      setx_axis([...x_axis.slice(1), x_val]);
    }
  }
  // var cnt = 0;
  const [x_axis, setx_axis] = useState([]);
  const [y1_axis, sety1_axis] = useState([]);
  const [y2_axis, sety2_axis] = useState([]);
  const [Volt_R, setVolt_R] = useState({
    series: [
      {
        name: "Voltage-R1",
        data: y1_axis,
      },
      {
        name: "Voltage-R2",
        data: y2_axis,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        // animations: {
        //   enabled: true,
        //   easing: "easeinout",
        //   speed: 800,
        //   animateGradually: {
        //     enabled: true,
        //     delay: 150,
        //   },
        //   dynamicAnimation: {
        //     enabled: true,
        //     speed: 350,
        //   },
        // },
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
        size: 5,
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
          name: "Voltage-R1",
          data: y1_axis,
        },
        {
          name: "Voltage-R2",
          data: y2_axis,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          animations: {
            enabled: false,
            // easing: "easeinout",
            // speed: 800,
            // dynamicAnimation: {
            //   enabled: false,
            //   speed: 350,
            // },
          },
        },
        markers: {
          size: 5,
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
      get_y1_axis(Math.floor(Math.random() * 101).toFixed(2));
      get_y2_axis(Math.floor(Math.random() * 101).toFixed(2));
      setVolt_R((x) => getData1());
    }, 1000);
    return () => clearInterval(interval);
  }, [Volt_R]);

  return (
    <div className="livechart">
      <h3>Voltage R</h3>
      <br />
      <ReactApexChart
        options={Volt_R.options}
        series={Volt_R.series}
        type="area"
        height={350}
        width={400}
      />
      {/* <h2>{count.value}</h2> */}
    </div>
  );
}

export default Livechart;

import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./usefetch";
import "./Livechart.css";
import ReactApexChart from "react-apexcharts";

function DHT11_api() {
  const { data, count } = useFetch(`http://192.168.29.127:5000/api/v1/hello`);

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
        name: "Temperature",
        data: y1_axis,
      },
      {
        name: "humidity",
        data: y2_axis,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        animations: {
          enabled: false,
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
  });

  function getData1() {
    return {
      series: [
        {
          name: "Temperature",
          data: y1_axis,
        },
        {
          name: "humidity",
          data: y2_axis,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          animations: {
            enabled: false,
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
      get_y1_axis(data.Temperature);
      get_y2_axis(data.humidity);
      setVolt_R((x) => getData1());
    }, 1000);
    return () => clearInterval(interval);
  }, [Volt_R]);

  return (
    <div className="App">
      <div className="livechart">
        <h3>HOME DHT11</h3>
        <ReactApexChart
          options={Volt_R.options}
          series={Volt_R.series}
          type="area"
          height={350}
          width={400}
        />
      </div>
      <br></br>
      <center>
        <table border="1">
          <tr>
            <th>temperature</th>
            <th>humidity</th>
          </tr>
          <tr>
            {data && <td>{data.Temperature}</td>}
            {data && <td>{data.humidity}</td>}
          </tr>
        </table>
        <br></br>
        <h2>{count}</h2>
      </center>
    </div>
  );
}

export default DHT11_api;

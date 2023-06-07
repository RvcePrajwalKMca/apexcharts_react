import { useState } from "react";
import { useEffect } from "react";
import useZoneFetch from "./useZoneFetch";
import "./Livechart.css";
import ReactApexChart from "react-apexcharts";

function ZoneWiseLiveChart() {
  const { data, count } = useZoneFetch(
    `http://192.46.211.177:4001/get-live-by-zone`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ZoneId: "zone_1" }),
    }
  );

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
  function get_y3_axis(y_val) {
    if (y3_axis.length < 6) {
      sety3_axis([...y3_axis, y_val]);
    } else {
      sety3_axis([...y3_axis.slice(1), y_val]);
    }
  }
  function get_y4_axis(y_val) {
    if (y4_axis.length < 6) {
      sety4_axis([...y4_axis, y_val]);
    } else {
      sety4_axis([...y4_axis.slice(1), y_val]);
    }
  }
  function get_y5_axis(y_val) {
    if (y5_axis.length < 6) {
      sety5_axis([...y5_axis, y_val]);
    } else {
      sety5_axis([...y5_axis.slice(1), y_val]);
    }
  }

  function GMT_TO_IST() {
    var currentTime = new Date();

    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330; // IST offset UTC +5:30

    var ISTTime = new Date(currentTime.getTime() + ISTOffset * 60000);

    // Formatting the IST time as a string
    const formattedISTTime = ISTTime.toISOString();
    // console.log(formattedISTTime);
    return formattedISTTime;
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
  const [y3_axis, sety3_axis] = useState([]);
  const [y4_axis, sety4_axis] = useState([]);
  const [y5_axis, sety5_axis] = useState([]);
  const [Volt_R, setVolt_R] = useState({
    series: [
      {
        name: "Temperature",
        data: y1_axis,
      },
      {
        name: "Humidity",
        data: y2_axis,
      },
      {
        name: "RainLevel",
        data: y3_axis,
      },
      {
        name: "FlammableConcentration",
        data: y4_axis,
      },
      {
        name: "AirQuality",
        data: y5_axis,
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
          name: "Humidity",
          data: y2_axis,
        },
        {
          name: "RainLevel",
          data: y3_axis,
        },
        {
          name: "FlammableConcentration",
          data: y4_axis,
        },
        {
          name: "AirQuality",
          data: y5_axis,
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
      get_x_axis(GMT_TO_IST());
      get_y1_axis(data.Temperature);
      get_y2_axis(data.Humidity);
      get_y3_axis(data.RainLevel);
      get_y4_axis(data.FlammableConcentration);
      get_y5_axis(data.AirQuality);
      setVolt_R((x) => getData1());
    }, 1000);
    return () => clearInterval(interval);
  }, [Volt_R]);

  return (
    <div className="App">
      <div className="livechart">
        <h3>HOME ZoneWiseLiveChart</h3>
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
            <th>Temperature</th>
            <th>Humidity</th>
            <th>RainLevel</th>
            <th>FlammableConcentration</th>
            <th>AirQuality</th>
          </tr>
          <tr>
            {data && <td>{data.Temperature}</td>}
            {data && <td>{data.Humidity}</td>}
            {data && <td>{data.RainLevel}</td>}
            {data && <td>{data.FlammableConcentration}</td>}
            {data && <td>{data.AirQuality}</td>}
          </tr>
        </table>
        <br></br>
        <h2>{count}</h2>
      </center>
    </div>
  );
}

export default ZoneWiseLiveChart;

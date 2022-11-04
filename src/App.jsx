import React, {useState} from "react";
import './App.css';
import ReactApexChart from 'react-apexcharts';

function App(){

  const [Freq,setFreq] = useState({
    series: [{
      name: 'Frequency',
      data: [
        53.6, 53.49, 53.64,
        54.1,  53.6, 53.44,
       53.43, 53.65,  53.6,
       53.65
     ]
    },
    {
      name: 'Voltage-R',
      data: [
        231.04, 230.65,
        230.41, 231.19,
        230.84, 230.51,
        231.26, 229.77,
        230.81, 230.75
      ]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-10-27T07:23:57.941Z',
          '2022-10-27T07:32:57.828Z',
          '2022-10-27T07:33:14.878Z',
          '2022-10-27T07:33:23.901Z',
          '2022-10-27T07:37:27.795Z',
          '2022-10-27T07:37:31.730Z',
          '2022-10-27T07:37:57.666Z',
          '2022-10-27T07:38:27.679Z',
          '2022-10-27T07:38:57.650Z',
          '2022-10-27T08:01:57.617Z'
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  })

  const [Volt_R,setVolt_R] = useState({
    series: [{
      name: 'Voltage-R',
      data: [
        231.04, 230.65,
        230.41, 231.19,
        230.84, 230.51,
        231.26, 229.77,
        230.81, 230.75
      ]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-10-27T07:28:00.604Z',
          '2022-10-27T07:33:14.908Z',
          '2022-10-27T07:37:31.793Z',
          '2022-10-27T07:37:57.700Z',
          '2022-10-27T07:38:27.715Z',
          '2022-10-27T07:40:57.755Z',
          '2022-10-27T07:44:27.730Z',
          '2022-10-27T07:48:57.751Z',
          '2022-10-27T08:02:57.737Z',
          '2022-10-27T08:03:57.724Z'
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  })


  const [Volt_Y,setVolt_Y] = useState({
    series: [{
      name: 'Voltage-Y',
      data: [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
      ]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-10-27T07:21:41.893Z',
          '2022-10-27T07:21:57.722Z',
          '2022-10-27T07:22:27.822Z',
          '2022-10-27T07:22:57.845Z',
          '2022-10-27T07:23:27.751Z',
          '2022-10-27T07:23:57.980Z',
          '2022-10-27T07:24:27.930Z',
          '2022-10-27T07:24:57.762Z',
          '2022-10-27T07:25:10.416Z',
          '2022-10-27T07:40:57.761Z'
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  })

  const [Volt_B,setVolt_B] = useState({
    series: [{
      name: 'Voltage-B',
      data: [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
      ]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-10-27T07:28:00.627Z',
          '2022-10-27T07:33:57.807Z',
          '2022-10-27T07:36:27.913Z',
          '2022-10-27T07:39:48.836Z',
          '2022-10-27T07:44:27.771Z',
          '2022-10-27T07:44:57.521Z',
          '2022-10-27T07:47:27.722Z',
          '2022-10-27T07:47:57.740Z',
          '2022-10-27T07:48:27.662Z',
          '2022-10-27T07:48:57.773Z'
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  })

  const [Volt_RY,setVolt_RY] = useState({
    series: [{
      name: 'Voltage-RY',
      data: [
        230.65, 230.72,
        230.76, 230.81,
        231.01, 231.01,
        230.77, 231.19,
        231.01, 231.01
      ]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-10-27T07:32:19.287Z',
          '2022-10-27T07:32:27.761Z',
          '2022-10-27T07:38:27.733Z',
          '2022-10-27T07:38:57.706Z',
          '2022-10-27T07:39:27.709Z',
          '2022-10-27T07:39:46.140Z',
          '2022-10-27T07:39:47.908Z',
          '2022-10-27T07:39:48.843Z',
          '2022-10-27T08:01:57.668Z',
          '2022-10-27T08:06:30.343Z'
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  })

  const [Volt_YB,setVolt_YB] = useState({
    series: [{
      name: 'Voltage-YB',
      data: [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
      ]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-10-27T07:27:27.783Z',
          '2022-10-27T07:28:57.794Z',
          '2022-10-27T07:33:57.817Z',
          '2022-10-27T07:36:27.924Z',
          '2022-10-27T07:37:31.852Z',
          '2022-10-27T07:44:11.079Z',
          '2022-10-27T07:49:27.690Z',
          '2022-10-27T07:49:57.821Z',
          '2022-10-27T07:50:27.902Z',
          '2022-10-27T08:01:57.673Z'
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  })

  const [Volt_BR,setVolt_BR] = useState({
    series: [{
      name: 'Voltage-BR',
      data: [
        230.97, 229.76,
        230.92, 229.85,
        229.77, 230.85,
        231.15, 230.87,
        230.72, 229.77
      ]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-10-27T07:23:27.791Z',
          '2022-10-27T07:27:27.795Z',
          '2022-10-27T07:28:17.368Z',
          '2022-10-27T07:28:23.951Z',
          '2022-10-27T07:44:11.084Z',
          '2022-10-27T07:46:07.424Z',
          '2022-10-27T07:46:42.558Z',
          '2022-10-27T07:49:27.698Z',
          '2022-10-27T07:57:57.667Z',
          '2022-10-27T08:00:57.661Z'
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  })





  return(
    <div className="App">
      <h3>Frequency and Voltage R</h3>
      <br/>
      <ReactApexChart options={Freq.options} series={Freq.series} type="area" height={350} width={600} />
      <br />
      <br />
      <h3>Voltage R</h3>
      <br/>
      <ReactApexChart options={Volt_R.options} series={Volt_R.series} type="area" height={350} width={600} />
      <br />
      <br />
      <h3>Voltage Y</h3>
      <br/>
      <ReactApexChart options={Volt_Y.options} series={Volt_Y.series} type="area" height={350} width={600} />
      <br />
      <br />
      <h3>Voltage B</h3>
      <br/>
      <ReactApexChart options={Volt_B.options} series={Volt_B.series} type="area" height={350} width={600} />
      <br />
      <br />
      <h3>Voltage RY</h3>
      <br/>
      <ReactApexChart options={Volt_RY.options} series={Volt_RY.series} type="area" height={350} width={600} />
      <br />
      <br />
      <h3>Voltage YB</h3>
      <br/>
      <ReactApexChart options={Volt_YB.options} series={Volt_YB.series} type="area" height={350} width={600} />
      <br />
      <br />
      <h3>Voltage BR</h3>
      <br/>
      <ReactApexChart options={Volt_BR.options} series={Volt_BR.series} type="area" height={350} width={600} />
      <br />
      <br />
      

    </div>
  );
}

export default App;
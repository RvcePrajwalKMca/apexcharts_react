import React, {useState, useEffect} from "react";
import './Livechart.css';
import ReactApexChart from 'react-apexcharts';

function Livechart(){

    var [count,setCount] = useState({
        value : "x"
    })

    function getData(){
        // const x = Math.random().toFixed(2);
        // return {
        //     series: [{
        //       name: 'Voltage-R',
        //       data: [
        //         251.04, 210.65,
        //         210.41, 251.19,
        //         230.84, 230.51,
        //         231.26, 229.77,
        //         230.81, 230.75
        //       ]
        //     }],
        //     options: {
        //       chart: {
        //         height: 350,
        //         type: 'area'
        //       },
        //       dataLabels: {
        //         enabled: false
        //       },
        //       stroke: {
        //         curve: 'smooth'
        //       },
        //       xaxis: {
        //         type: 'datetime',
        //         categories: [
        //           '2022-10-27T07:33:14.908Z',
        //           '2022-10-27T07:37:31.793Z',
        //           '2022-10-27T07:37:57.700Z',
        //           '2022-10-27T07:38:27.715Z',
        //           '2022-10-27T07:40:57.755Z',
        //           '2022-10-27T07:44:27.730Z',
        //           '2022-10-27T07:48:57.751Z',
        //           '2022-10-27T08:02:57.737Z',
        //           '2022-10-27T08:03:57.724Z',
        //           '2022-10-27T08:13:57.724Z'
        //         ]
        //       },
        //       tooltip: {
        //         x: {
        //           format: 'dd/MM/yy HH:mm'
        //         },
        //       },
        //     },
        //   };
        return { value : "y" }
    }

    // // count.map((a)=> {a.value++;console.log(a.value);})
    useEffect(() => {
        const interval = setInterval(()=> {
            setCount((x) => getData())
        },1000);
        return () => clearInterval(interval);
    },[])


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


      return(
        <div className="livechart">
            <h3>Voltage R</h3>
      <br/>
      <ReactApexChart options={Volt_R.options} series={Volt_R.series} type="area" height={350} width={600} />
        <h2>{count.value}</h2>
    </div>
  );
}

export default Livechart;

import React, { useEffect, useRef } from 'react'
import data from "../Wine-Data.json";
import * as echarts from 'echarts';
// import Styles from './Bar.module.css'

type EChartsOption = echarts.EChartsOption;
interface abc {
  first:number[];
  second:number[];
}
interface MyComponentProps{
    barData:{
  first:number[];
  second:number[];
}
}
const Bar :React.FC<MyComponentProps>= (props) => {


const chartRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    if(chartRef.current){
    var myChart = echarts.init(chartRef.current);
    var option: EChartsOption= {
      xAxis: {
        type: 'category',
        data: props.barData.first
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: props.barData.second,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };
    option && myChart.setOption(option);
}
}, [])

return (
    <div  ref={chartRef}  style={{ width: '100%', height: 400 }}/>
  )
}

export default Bar
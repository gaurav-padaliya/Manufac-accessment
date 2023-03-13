import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
// import Styles from './Scatter.module.css';
type EChartsOption = echarts.EChartsOption;

interface MyComponentProps{
    scatteringData:[number|string, number][] ;
}
const Scatter :React.FC<MyComponentProps>  = (props) => {
    // const {scatteringData } = props

  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      const option: EChartsOption = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data:props.scatteringData,
            type: 'scatter'
          }
        ]
      };
      myChart.setOption(option);
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: 400 }} />;
};

export default Scatter;

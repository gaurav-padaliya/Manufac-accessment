import { useEffect } from 'react';
import './App.css';
import Bar from './Component/Bar';
import Scatter from './Component/Scatter';
import data from "./Wine-Data.json";

interface WineData {
  "Alcohol": number;
  "Malic Acid": number;
  "Ash": number;
  "Alcalinity of ash": number;
  "Magnesium": number;
  "Total phenols": number;
  "Flavanoids": number;
  "Nonflavanoid phenols": number;
  "Proanthocyanins": string;
  "Color intensity": number;
  "Hue": number;
  "OD280/OD315 of diluted wines": number;
  "Unknown": number
}

function App() {
  console.log(data, "alcohol data");
  
  const scatteringData: [number|string, number][] = [];
  const barData: { first: number[]; second: number[] } = { first: [], second: [] };
  
  function getScatteringData(): void {
    data.forEach((obj) => {
      scatteringData.push([obj["Color intensity"], obj["Hue"]]);
    })
  }
  
  function getBarData(): void {
    const array1 :{value:number,count:number}[] = [];
    data.forEach((obj) => {
      if(array1[obj["Alcohol"]-1]){

        array1[obj["Alcohol"]-1].value += obj["Malic Acid"]
        array1[obj["Alcohol"]-1].count += 1
      }else{
        array1[obj["Alcohol"]-1] = {value:0,count:0}
        array1[obj["Alcohol"]-1].value = obj["Malic Acid"]
        array1[obj["Alcohol"]-1].count = 1
      }
    })
    array1.forEach((el,ind)=>{
      barData.first.push(ind+1);
      barData.second.push(el.value/el.count);
    })

  }
  
  useEffect(() => {
    getBarData();
    getScatteringData();
  }, []);

  
  return (
    <div className="App">
      <header className="App-header" style={{display:"flex",justifyContent:"space-evenly"}}>
        MANUFAC Accessment
      </header>
      <div className="charts-container">
        <div className="chart">
          <Bar barData={barData} />
          <div className="chart-title">Bar Chart</div>
        </div>
        <div className="chart">
          <Scatter scatteringData={scatteringData} />
          <div className="chart-title">Scatter Chart</div>
        </div>
      </div>
      <footer className="footer" style={{display:"flex",justifyContent:"space-evenly"}}>
        <div className="footer-content">Made By Gaurav padaliya </div>
        <div className="footer-content">Footer @2023</div>
      </footer>
    </div>
  );
}

export default App;

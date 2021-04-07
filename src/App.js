import './App.css';
import React, { useEffect, useState } from 'react';
import {drawChart} from './Chart'
import * as d3 from "d3";


export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    drawChart(400, 600);
  }, []);

  React.useEffect(() => { 
    d3.json("/chart-data.json").then((d) => { 
        setData(d); 
    }); 
        return () => undefined; 
    }, []);

  return (
    <div className="App">
    <h2 id="title">United States GDP</h2>
    <div id="chart">
    </div>
</div>
  );
}
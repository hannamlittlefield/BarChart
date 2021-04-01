import React from 'react';
import * as d3 from "d3";

export default function BarChart(){
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    var svgWidth = 500;
    var svgHeight = 500;

    React.useEffect(() => { 
        d3.json("/chart-data.json").then((d) => { 
            setData(d); 
            setLoading(false); 
        }); 
            return () => undefined; 
        }, []);

        const svgElement = d3.select("div")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);
        
        //adding tooltip
         //   .append("tooltip")


    return(
        <div id="chartContainer">
            <g id="x-axis"></g>
            <g id="y-axis"></g>
        </div>


    );

}
import React from 'react';
import * as d3 from "d3";

export default function BarChart(){

   const dataSet = d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json');
    d3.data(dataSet)
    .enter()
    .append("div")
    .attr("class", "dataBar")


    return(
        <div id="chartContainer">
            <g id="x-axis"></g>
            <g id="y-axis"></g>
        </div>


    );

}
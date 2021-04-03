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
        console.log(data) 

        //create svg element from div
    const svgElement = d3.select("div")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

        //create x axis - story 2
    svgElement
        .append("g")
        .attr("id", "x-axis")
        
        //create y axis - story 3
    svgElement
        .append("g")
        .attr("id", "y-axis")

        //create bars from data - story 5
    svgElement 
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")

        //create tooltip - story 12
    svgElement
        .select("svg")
        .append("div")
        .attr("id", "tooltip")
        .append("text")
        //.text("put function for text here for tooltip")

    return(
        <div id="chartContainer">
        </div>


    );

}


// create ref in return statement to reference to svg 
// https://www.pluralsight.com/guides/drawing-charts-in-react-with-d3
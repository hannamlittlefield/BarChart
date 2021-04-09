var svgContainer = d3
    .select('#chart')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500);

d3.json(
    'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(function(e, data){
            // what to do with data here 

    }
    
    )
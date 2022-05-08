const width = 514, height = 514;
const radius = width / 2 ;

// Input data
const data = {"NFT": "296210.326", "Stock": "175832.331", "Crypto": "91722.462", "CD (For)": "30017.135", "CD (NTD)": "25127.746"}
const color = d3.scaleOrdinal()
  .range(["#9BB3C6", "#E9E9EB", "#528CA2", "#355B7F","#FF7582"])


// append the svg object to the div called 'dataviz'
const svg = d3.select("#dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", `translate(${width/2}, ${height/2})`)
    .attr("id", "Tooltip");

// Compute the position
const pie = d3.pie()
  .value(function(d) {return d[1]})

const data_ready = pie(Object.entries(data))

let labelArc = d3.arc()
.outerRadius(150)
.innerRadius(radius)

// Build the pie chart
svg
  .selectAll('whatever')
  .data(data_ready)
  .join('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)  
  )
  .attr('fill', function(d){ return(color(d.data[1])) })

svg
  .selectAll('whatever')
  .data(data_ready)
  .join('text')
  .text(function(d){ return d.data[0]})
  .attr("transform", function(d) { return `translate(${ labelArc.centroid(d)})`})
  .style("text-anchor", "middle")
  .style("font", "15px SFPRODISPLAYREGULAR")
  .style("font-size", 20)

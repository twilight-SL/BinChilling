$(document).ready(function () {
  draw();
  draw_NFT_chart();
  $('[data-toggle="tooltip"]').tooltip();
  setTimeout(function () {
    document.getElementById("Risk").style.visibility = "visible";
    document.getElementById("Risk_NFT").style.visibility = "visible";
  }, 2500);
});


let data = [296210.326, 175832.331, 91722.462, 30017.135, 25127.746]; // ["296210.326", "175832.331", "91722.462", "30017.135", "25127.746"];
let colors = ["#B8CAD6", "#E9E9EB", "#528CA2", "#42506B", "#FF7582"];
let NFT_data = [1651.428965, 1455.681035];
let NFT_colors = ["#E9E9EB", "#FF7582"];

let sizes = {
  innerRadius: 0,
  outerRadius: 250
};

let durations = {
  entryAnimation: 3000
};

function draw() {
  // d3.select("#chart").html("");
  const Name = ["NFT", "Stock" , "Crypto" ,"CD (For)", "CD (NTD)"]  
  let generator = d3.pie()
    .sort(null);

  let chart = generator(data);
  let arcs = d3.select("#chart")
    .append('svg')
    .attr('width', 650)
    .attr('height', 650)
    .append("g")
    .attr("id", "piechart")
    .attr("transform", "translate(400, 250)");
  
  var path = arcs.selectAll('path')
    .data(chart)
    .enter()
    .append('path')
    .style("fill", (d, i) => colors[i]);


  /* ------------------ Tooltip ----------------- */
  let tooltips = d3.select("#chart")
      .append("div")
      .attr('class', 'tooltip')
      .style("opacity", 0)   
      .style("position", "absolute")
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

  tooltips.append('div')
    .attr('class','count');

  tooltips.append('div')
    .attr('class','percent');

  // 加上滑鼠事件
  d3.select('#piechart')
    .style('cursor', 'pointer')
    .on('mouseover', function() { 
      tooltips.style("opacity", 1) 
    })
    .on("mousemove", function(event, d) {
      var percent = ["296210.326", "175832.331", "91722.462", "30017.135", "25127.746"]
      let riskNum = [65, 54, 49, 45, 46];
      var total = d3.sum(percent);
      function myFunction(item, index, arr) {
        arr[index] = Math.round(1000 * item / total)/10;
      }          
      percent.forEach(myFunction);

      // console.log("percent: " + percent[0]);
        
      let pt = d3.pointer(event) // 抓圓點位置
      let i;

      if(pt[0] > 30){
        i = 0;
      }else if(pt[0] > -63 && pt[1] < 0){
        i = 4;
      }else if(pt[0] < 30 && pt[1] > -17){
        i = 1;
      }else if(pt[0] < 0 &&  -209 < pt[1] && pt[1] < -17){
        i = 2;
      }else {
        i = 3;
      }

      tooltips.style("opacity", 1)
        .style('left', (2* pt[0] + 450) +'px') // 設定tooltips位置
        .style('top', (2*pt[1] + 450) +'px')
        .html(" " + Name[i] + "; RI: " + riskNum[i] + "<br>(" + percent[i] + "%)") // 抓到綁定在DOM元素的資料  
        .style("font-family", "SFProDisplay-Heavy")
        .style("font-size", "20px")
      })
    .on('mouseleave', function(){ //設定滑鼠離開時tooltips隱藏
      tooltips.style("opacity", 0)
    });

  /* ------------------ Sth ------------------ */
  let angleInterpolation = d3.interpolate(generator.startAngle()(), generator.endAngle()());
  let innerRadiusInterpolation = d3.interpolate(0, sizes.innerRadius);
  let outerRadiusInterpolation = d3.interpolate(0, sizes.outerRadius);

  let arc = d3.arc();

  /* ------------------ Animation ------------------ */
  path.transition()
    .duration(durations.entryAnimation)
    .attrTween("d", d => {
      let originalEnd = d.endAngle;
      return t => {
        let currentAngle = angleInterpolation(t);
        if (currentAngle < d.startAngle) {
          return "";
        }

        d.endAngle = Math.min(currentAngle, originalEnd);

        return arc(d);
      };
    });

  d3.select("#chart")
    .transition()
    .duration(durations.entryAnimation)
    .tween("arcRadii", () => {
      return t => arc
        .innerRadius(innerRadiusInterpolation(t))
        .outerRadius(outerRadiusInterpolation(t));
    });
}


function draw_NFT_chart() {
  const Name = ["Metamask", "Wallet Connect"]  
  let generator = d3.pie()
    .sort(null);

  let chart = generator(NFT_data);
  let arcs = d3.select("#chart_NFT")
    .append('svg')
    .attr('width', 650)
    .attr('height', 650)
    .append("g")
    .attr("id", "piechart_NFT")
    .attr("transform", "translate(400, 250)");
  
  var path = arcs.selectAll('path')
    .data(chart)
    .enter()
    .append('path')
    .style("fill", (d, i) => NFT_colors[i]);


  /* ------------------ Tooltip ----------------- */
  let tooltips = d3.select("#chart_NFT")
      .append("div")
      .attr('class', 'tooltip')
      .style("opacity", 0)   
      .style("position", "absolute")
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

  tooltips.append('div')
    .attr('class','count');

  tooltips.append('div')
    .attr('class','percent');

  // 加上滑鼠事件
  d3.select('#piechart_NFT')
    .style('cursor', 'pointer')
    .on('mouseover', function() { 
      tooltips.style("opacity", 1) 
    })
    .on("mousemove", function(event, d) {
      var percent = [ "1651.428965", "1455.681035"];
      var total = d3.sum(percent);
      function myFunction(item, index, arr) {
        arr[index] = Math.round(1000 * item / total)/10;
      }          
      percent.forEach(myFunction);
        
      let pt = d3.pointer(event) // 抓圓點位置

      let i;

      if(pt[0] > 0 || (-35 < pt[0] && pt[0] < 0 && pt[1] > 0)){
        i = 0;
      }else if(pt[0] < 0){
        i = 1;
      }

      tooltips.style("opacity", 1)
        .style('left', (1.8* pt[0] + 450) +'px') // 設定tooltips位置
        .style('top', (1.8*pt[1] + 450) +'px')
        .html(" " + Name[i] + " <br> (" + percent[i] + "%)") // 抓到綁定在DOM元素的資料  
        .style("font-family", "SFProDisplay-Heavy")
        .style("font-size", "20px")
      })
    .on('mouseleave', function(){ //設定滑鼠離開時tooltips隱藏
      tooltips.style("opacity", 0)
    });

  /* ------------------ Sth ------------------ */
  let angleInterpolation = d3.interpolate(generator.startAngle()(), generator.endAngle()());
  let innerRadiusInterpolation = d3.interpolate(0, sizes.innerRadius);
  let outerRadiusInterpolation = d3.interpolate(0, sizes.outerRadius);

  let arc = d3.arc();

  /* ------------------ Animation ------------------ */
  path.transition()
    .duration(durations.entryAnimation)
    .attrTween("d", d => {
      let originalEnd = d.endAngle;
      return t => {
        let currentAngle = angleInterpolation(t);
        if (currentAngle < d.startAngle) {
          return "";
        }
        d.endAngle = Math.min(currentAngle, originalEnd);
        return arc(d);
      };
    });

  d3.select("#chart_NFT")
    .transition()
    .duration(durations.entryAnimation)
    .tween("arcRadii", () => {
      return t => arc
        .innerRadius(innerRadiusInterpolation(t))
        .outerRadius(outerRadiusInterpolation(t));
    });
}

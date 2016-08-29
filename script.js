  // cd Desktop/Fantasy-Football/2016/Graph-2015

  
  var data = [];
  var options = {
  };

// Get data

d3.queue()
  .defer(d3.json, 'data/data.json')
  .defer(d3.json, 'data/data1.json')
  .awaitAll(function (error, results) {
    if (error) { throw error; }
    dataStand = results[0];
    dataWins = results[1];

    var charts = [
      new Chart('#chart')
    ];

       // EVENT HANDLERS

  });


function Chart(selector) {
    var chart = this;


  margin = { top: 20, right: 60, bottom: 45, left:45 };
  chart.width = 1000 - margin.right -  margin.left;
  chart.height = 600 - margin.top - margin.bottom;

    // SVG

  chart.svg = d3.select(selector)
    .append('svg')
    .attr('width',chart.width + margin.right + margin.left)
    .attr('height',chart.height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // SCALES
   chart.x = d3.scaleLinear()
      .domain([1,13])
      .range([margin.left,chart.width])
      .nice();

   chart.y = d3.scaleLinear()
      .domain([1,12])
      .range([0,(chart.height-margin.top)])
      .nice();

    // AXES

    var xAxis = d3.axisBottom()
      .scale(chart.x);

    var yAxis = d3.axisLeft()
      .scale(chart.y);

    chart.svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + chart.height + ')')
      .call(xAxis)
      .append('text')
      .attr('y', 30)
      .attr('x', chart.width/2)
      .style('text-anchor', 'end')
      .style('fill', '#000')
      .style('font-weight', 'bold')
      .text('Week');

    chart.svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -65)
      .attr('x', 0)
      .style('text-anchor', 'end')
      .style('fill', '#000')
      .style('font-weight', 'bold')
      .text("RANK");


  pathSJ = chart.svg.append("path");
  pathJB = chart.svg.append("path");
  pathBM = chart.svg.append("path");
  pathRA = chart.svg.append("path");
  pathBH = chart.svg.append("path");
  pathJG = chart.svg.append("path");
  pathDM = chart.svg.append("path");
  pathPS = chart.svg.append("path");  
  pathJA = chart.svg.append("path");
  pathRF = chart.svg.append("path");
  pathSP = chart.svg.append("path");
  pathDG = chart.svg.append("path");

chart.update();

};

  Chart.prototype.update = function () {

  // TRANSFORM

  var chart = this

   chart.x = d3.scaleLinear()
      .domain([1,13])
      .range([margin.left,chart.width])
      .nice();

   chart.y = d3.scaleLinear()
      .domain([1,12])
      .range([0,(chart.height-margin.top)])
      .nice();

  // PLOT
    lineSJ = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Sarah); });

    lineDG = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.David); })

    lineJB = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Jack); })

    lineBM = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Brad); })

    lineRA = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Romy); })

    lineBH = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Ben); })

    lineJG = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Jessica); })

    lineDM = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Don); })

    linePS = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Paul); })

    lineJA = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Jaime); })

    lineRF = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Ryan); })

    lineSP = d3.line()
      .x(function (d) { return chart.x(d.Week); })
      .y(function (d) { return chart.y(d.Sari); })

    pathSJ.datum(dataStand)
      .attr('class','sj')
      .attr('d',lineSJ);

    pathDG.datum(dataStand)
      .attr('class','dg')
      .attr('d',lineDG);

    pathJB.datum(dataStand)
      .attr('class','jb')
      .attr('d',lineJB);

    pathBM.datum(dataStand)
      .attr('class','bm')
      .attr('d',lineBM);

    pathRA.datum(dataStand)
      .attr('class','ra')
      .attr('d',lineRA);

    pathBH.datum(dataStand)
      .attr('class','bh')
      .attr('d',lineBH);

    pathJG.datum(dataStand)
      .attr('class','jg')
      .attr('d',lineJG);

    pathDM.datum(dataStand)
      .attr('class','dm')
      .attr('d',lineDM);

    pathPS.datum(dataStand)
      .attr('class','ps')
      .attr('d',linePS);

    pathJA.datum(dataStand)
      .attr('class','ja')
      .attr('d',lineJA);

    pathRF.datum(dataStand)
      .attr('class','rf')
      .attr('d',lineRF);

    pathSP.datum(dataStand)
      .attr('class','sp')
      .attr('d',lineSP);

  };



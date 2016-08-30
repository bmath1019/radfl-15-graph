  // cd /Users/BradMatheson/Desktop/Fantasy-Football/2016/radfl-15-graph

  
  var data = [];
  var options = {
  };

// Get data

d3.queue()
  .defer(d3.json, 'data/data.json')
  .defer(d3.json, 'data/data1.json')
  .defer(d3.json, 'data/data2.json')
  .awaitAll(function (error, results) {
    if (error) { throw error; }
    dataStand = results[0];
    dataWins = results[1];
    dataScore = results[2];

    var charts = [
      new Chart('#chart')
    ];

       // EVENT HANDLERS

  });


function Chart(selector) {
    var chart = this;


  margin = { top: 20, right: 60, bottom: 45, left:60 };
  chart.width = 600 - margin.right -  margin.left;
  chart.height = 400 - margin.top - margin.bottom;

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
      .text('WEEK');

    chart.svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -30)
      .attr('x', 0)
      .style('text-anchor', 'end')
      .style('fill', '#000')
      .style('font-weight', 'bold')
      .text("STANDING");


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

  chart2.svg = d3.select("#chart2")
    .append('svg')
    .attr('width',chart.width + margin.right + margin.left)
    .attr('height',chart.height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  chart2.x = d3.scaleLinear()
    .domain([d3.min(dataScore,function (d) {return d.score;}),d3.max(dataScore,function (d) {return d.score;})])
    .range([margin.left,chart.width])
    .nice();

  chart2.y = d3.scaleLinear()
    .domain([d3.min(dataScore,function (d) {return d.opp_score;}),d3.max(dataScore,function (d) {return d.opp_score;})])
    .range([(chart.height-margin.top),0])
    .nice();

  // AXES

  var xAxis2 = d3.axisBottom()
    .scale(chart2.x);

  var yAxis2 = d3.axisLeft()
    .scale(chart2.y);

// Scatterplot

  chart2.svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + chart.height + ')')
    .call(xAxis2)
    .append('text')
    .attr('y', 30)
    .attr('x', chart.width/2)
    .style('text-anchor', 'end')
    .style('fill', '#000')
    .style('font-weight', 'bold')
    .text('SCORE');

  chart2.svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis2)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', -30)
    .attr('x', 0)
    .style('text-anchor', 'end')
    .style('fill', '#000')
    .style('font-weight', 'bold')
    .text("OPPONENT SCORE");

  points = chart2.svg.selectAll("circle")
    .data(dataScore, function (d) {return d.can_id; });

  points
    .enter()
    .append('circle')
    .attr('class',function (d) {return d.name_id + "point";})
    .attr('cx', function (d) {return chart2.x(d.score); })
    .attr('cy', function (d) {return chart2.y(d.opp_score); })
    .attr('r',"4");

  // lineWL = d3.line()
  //   .x(chart.x(0))
  //   .y(chart.y(200));

  chart2.svg.append("line")
    .style("stroke","black")
    .attr("x1",chart2.x(0))
    .attr("y1",chart2.y(0))
    .attr("x2",chart2.x(200))
    .attr("y2",chart2.y(200))

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
      .attr('class','sjline')
      .attr('d',lineSJ);

    pathDG.datum(dataStand)
      .attr('class','dgline')
      .attr('d',lineDG);

    pathJB.datum(dataStand)
      .attr('class','jbline')
      .attr('d',lineJB);

    pathBM.datum(dataStand)
      .attr('class','bmline')
      .attr('d',lineBM);

    pathRA.datum(dataStand)
      .attr('class','raline')
      .attr('d',lineRA);

    pathBH.datum(dataStand)
      .attr('class','bhline')
      .attr('d',lineBH);

    pathJG.datum(dataStand)
      .attr('class','jgline')
      .attr('d',lineJG);

    pathDM.datum(dataStand)
      .attr('class','dmline')
      .attr('d',lineDM);

    pathPS.datum(dataStand)
      .attr('class','psline')
      .attr('d',linePS);

    pathJA.datum(dataStand)
      .attr('class','jaline')
      .attr('d',lineJA);

    pathRF.datum(dataStand)
      .attr('class','rfline')
      .attr('d',lineRF);

    pathSP.datum(dataStand)
      .attr('class','spline')
      .attr('d',lineSP);

  };



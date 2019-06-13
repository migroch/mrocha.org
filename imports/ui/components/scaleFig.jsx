import React, { Component } from 'react';
import  saveSvgAsPng from 'save-svg-as-png';

const DBstyle = {
  position: 'absolute',
  right: '50px',
  top:'100px',
  fontSize:'20px',
}

class ScaleFig extends React.Component {
  constructor(props) {
    super(props);
    this.state= {clientWidth: $(window).width()};
    this.handleDownload = this.handleDownload.bind(this);
  }

  render() {
    return (
      
      <div id={this.props.qid} className="container-fluid figure">
	{/* <a href='' style={DBstyle} onClick={this.handleDownload}>
        Download Figure
        </a> */}
      </div>
    )
  }
  
  componentDidMount(){
    this.drawFig();
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate(prevProps){
    this.redrawFig(prevProps);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  
  handleDownload(e){
    e.preventDefault();
    saveSvgAsPng.saveSvgAsPng($("#svgFig"+"-"+this.props.qid)[0], this.props.qid+".png", {backgroundColor: "#FFFFFF"});
  }
  
  handleResize = () =>{
    $("#svgFig"+"-"+this.props.qid).remove();
    this.setState({clientWidth: $(window).width()});
    //this.redrawFig(this.props);
  }  

  redrawFig(props){
    $("#svgFig"+"-"+props.qid).remove();
    this.drawFig();   
  }
  
  drawFig(){
    var data = this.props.data;
    var qid = this.props.qid;
    var title = this.props.title;
    var scaleLabels = this.props.scaleLabels
    var windowWidth = this.state.clientWidth;

    var nrows = 1;
    var  figWidth = 0.95*windowWidth,
	 figHeight = 100*nrows+50,
	 ax1Width = 0.95*figWidth,
	 spaceForLabels   = 25;
    var margin = {top: 130, right: 0, bottom: 50, left: spaceForLabels };

    margin.top= 40*Math.ceil(title.length*25*0.5/ax1Width) + 40;
    
    var y = d3.scale.ordinal()
	      .rangeRoundBands([0, +(figHeight - margin.bottom)], 0.05);
    
    var yAxis = d3.svg.axis()
		  .scale(y)
		  .orient("left");
      
    var x1 = d3.scale.linear()
	       .rangeRound([0, ax1Width]);
    
    var x1AxisTop = d3.svg.axis()
		      .scale(x1)
		      .orient("top")
		      .ticks(10)
		      .outerTickSize(0);
;
			      
    var x1AxisBottom = d3.svg.axis()
     			 .scale(x1)
   			 .orient("bottom")
    			 .ticks(10)
			 .outerTickSize(0);

    var colorScale = ['#d43d51', '#eb8387','#f9c2c1','#b7d7cc','#6eaf9a','#00876c'];
    if (title == "How do you feel about the amount of information presented?") colorScale = ['#d43d51','#f9c2c1','#00876c','#00876c','#f9c2c1','#d43d51'] 
    var color = d3.scale.ordinal() .range(colorScale);

    
    var svg = d3.select("#"+qid).append("svg")
                .attr("id", "svgFig"+"-"+qid)
		.attr("class", "mx-auto svgFig hwsc")
		.attr("width", figWidth)
		.attr("height", +(figHeight+margin.top))
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		.attr("height", +(figHeight - margin.bottom));
      
    d3.select("#svgFig"+"-"+qid)
      .append("foreignObject")
      .attr("id", "svgFig"+"-"+qid+"-title")
      .attr('x', margin.left)
      .attr('y', 5)
      .attr("width", ax1Width)
      .attr("height", margin.top);
    //.attr("style", "text-align:center;")
	
    d3.select("#svgFig"+"-"+qid+"-title")
      .append("xhtml:p").attr("style","font-size:25px; margin-bottom:3px;")
      .html(title);
      
    //d3.select("#svgFig"+"-"+qid+"-title")
    //	  .append("xhtml:p").style("font-size" , "20px")
    //	  .html(subtitle+" - "+totalResponses+" Responses")

    data = data.filter((d)=>d.key!='undefined') ;
    console.log(data);
    var datakeys = data.map((d)=>d.key);
    var plotkeys = ["0","1","2","3","4","5"];
    plotkeys.forEach((key)=>{
      if(!datakeys.includes(key))  data.push({key:key, values:0})
    });
    data = data.sort((a, b) => a.key - b.key);
    color.domain(plotkeys);

    // calc percentages
    var N = d3.sum(data.map((d)=>d.values));
    data.forEach(function(d) {
          d['percentage'] = d.values*100/N;
    });

    var xmin = -1*(data[0].percentage+data[1].percentage+data[2].percentage);
    var x0 = xmin;
    var boxes = data.map((d) => { return {name: d.key, x0: x0, x1: x0 += +d.percentage, N: N, n: d.values};});
    var xmax = boxes[boxes.length - 1].x1;
    
    //x1.domain([xmin, xmax]);
    x1.domain([xmin, 100]);
    if (title == "How do you feel about the amount of information presented?") {
      xxtreme=d3.max([Math.abs(xmin),Math.abs(xmax)]);
      x1.domain([-xxtreme,xxtreme]);
    }
    
    //y.domain(data.map(function(d) { return d.Question; }));
    y.domain([""]);
    
    //svg.append("g")
    //   .attr("class", "x1 axis")
    //   .call(x1AxisTop)
   //    .attr("transform" , "translate(" + 0 + "," + 0 + ")")
   //    .selectAll('text')
   //    .text(function(d){return d+'%'});
      
   svg.append("g")
    .attr("class", "x1 axis")
    .call(x1AxisBottom)
    .attr("transform" , "translate(" + 0 + "," + +(figHeight-margin.bottom) + ")")
    .selectAll('text')
    .text(function(d){return d+'%'});;
    
    
    //svg.append("g")
    //   .attr("class", "y1 axis")
    //   .call(yAxis)
    //   .selectAll('text').remove();
      
    //  svg.selectAll('.y1.axis')
    //     .selectAll("g")
    //     .append("foreignObject")
    //     .attr('x', -margin.left+10)
    //     .attr('y', -50)
    //     .attr("width", 0.9*margin.left)
    //     .attr("height", y.rangeBand())
    //     .append("xhtml:p")
    //     .attr('style','word-wrap: break-word; text-align:center; font-size:14px')
    //     .html(function(d){return d});

    var vakken = svg.append("g")
		    .attr("class", "bar")
                    .attr("width", ax1Width)
		    .attr("transform", function(d) { return "translate(0," + y("") + ")"; });

    vakken.insert("rect",":first-child")
          .attr("height", y.rangeBand())
          .attr("x", "1")
          .attr("width", ax1Width)
          .attr("fill-opacity", "0.5")
          .style("fill", "#F5F5F5")
          .attr("class", function(d,index) { return index%2==0 ? "even" : "uneven"; });

    var bars = vakken.selectAll("rect")
		     .data(boxes)
		     .enter().append("g").attr("class", "subbar");

    bars.append("rect")
	.attr("height", y.rangeBand())
	.attr("x", function(d) {return x1(d.x0); })
	.attr("width", function(d) { return x1(d.x1) - x1(d.x0); })
	.style("fill", function(d) { return color(d.name); });

      
    bars.append("text")
        .attr("x", function(d) { return x1(d.x0); })
        .attr("y", y.rangeBand()/2)
        .attr("dy", "1em" )
        .attr("dx", "0.5em")
      //.style("font" ,"10px sans-serif")
        .style("text-anchor", "begin")
        .text(function(d) { var t = (Math.round(100*d.n/d.N)>=5) ? Math.round(100*d.n/d.N)+'%' : ''; return t }); 

    bars.append("text")
        .attr("x", function(d) { return x1(d.x0); })
        .attr("y", y.rangeBand()/2 )
        .attr("dy", "-1em"  )
        .attr("dx", "0.5em")
      //.style("font" ,"10px sans-serif")
        .style("text-anchor", "begin")
        .text(function(d) { var t = (d.n==0 || isNaN(d.n) ) ? '' : d.n ; return t });


    svg.append("g")
       .attr("class", "y axis")
       .append("line")
       .attr("x1", x1(0))
       .attr("x2", x1(0))
       .attr("y2", +(figHeight - margin.bottom));

    
    var startp = svg.append("g").attr("class", "legendbox").attr("id", "mylegendbox");
    // this is not nice, we should calculate the bounding box and use that
    var legend_tabs = [0, 50, 100, 150, 200, 250];
    var legend = startp.selectAll(".legend")
		       .data(["0", "1", "2", "3","4", "5"])
		       .enter().append("g")
		       .attr("class", "legend")
		       .attr("transform", function(d, i) { return "translate(" + (legend_tabs[i]+120) + ",-25)"; });

    legend.append("rect")
	  .attr("x", 0)
	  .attr("width", 18)
	  .attr("height", 18)
	  .style("fill", color);

    startp.append("text")
	  .attr("x", 115)
	  .attr("y", 0)
	  .attr("dy", -10)
	  .style("text-anchor", "end")
	  .style("font" ,"16px")
	  .text(scaleLabels.left);

    startp.append("text")
	  .attr("x", 393)
	  .attr("y", 0)
	  .attr("dy", -10)
	  .style("text-anchor", "begin")
	  .style("font" ,"16px")
	  .text(scaleLabels.right);
   
    d3.selectAll(".axis path")
      .style("fill", "none")
      .style("stroke", "#000")
      .style("shape-rendering", "crispEdges");
    
    d3.selectAll(".axis line")
      .style("fill", "none")
      .style("stroke", "#000")
      .style("shape-rendering", "crispEdges");

        //var movesize = figWidth/2 - startp.node().getBBox().width/2;
        //d3.selectAll(".legendbox").attr("transform", "translate(" + movesize  + ",0)");     
    }
};

export default ScaleFig;

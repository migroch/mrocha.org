import React, { Component } from 'react';
import  saveSvgAsPng from 'save-svg-as-png';


class LikertFig extends React.Component {
  constructor(props) {
    super(props);
    this.state= {clientWidth: $(window).width()};
    this.handleDownload = this.handleDownload.bind(this);
  }

  render() {
    return (
      
      <div id={this.props.qid} className="container-fluid figure">
	<a href='' className="downloadButton" onClick={this.handleDownload}>
          Download Figure
        </a>
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
    saveSvgAsPng.saveSvgAsPng($("#svgFig"+"-"+this.props.qid)[0], this.props.qid+this.props.groupby+".png", {backgroundColor: "#FFFFFF"});
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
    var qid = this.props.qid;
    var title = this.props.title;
    var fname = this.props.fname;
    var windowWidth = this.state.clientWidth;
    
    d3.csv(this.props.data_source, function(error, data) {

      //data = data.sort((a, b) => b.Diff - a.Diff)
      var nrows = data.length;
     
      var  figWidth = 0.95*windowWidth,
	   figHeight = 100*nrows+200,
	   ax1Width = 0.7*figWidth,
	   spaceForLabels   = 0.25*figWidth;
      var margin = {top: 120, right: 50, bottom: 50, left: spaceForLabels };
      
      var y = d3.scale.ordinal()
		.rangeRoundBands([0, +(figHeight - margin.bottom)], .3);
      
      var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left")

	var x1 = d3.scale.linear()
		   .rangeRound([0, ax1Width]);
      
      var x1AxisTop = d3.svg.axis()
			.scale(x1)
			.orient("top")
			.ticks(7);
			      
      var x1AxisBottom = d3.svg.axis()
			   .scale(x1)
			   .orient("bottom")
			   .ticks(7);
     
      var color = d3.scale.ordinal()
		    .range(["#c7001e", "#f6a580", "#cccccc", "#92c6db", "#086fad"]);
      
      var svg = d3.select("#"+qid).append("svg")
                  .attr("id", "svgFig"+"-"+qid)
		  .attr("class", "mx-auto svgFig hwsc")
		  .attr("width", figWidth)
		  .attr("height", +(figHeight+margin.top))
		  .append("g")
		  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		  .attr("height", +(figHeight - margin.bottom))

	d3.select("#svgFig"+"-"+qid)
		  .append("foreignObject")
		  .attr("id", "svgFig"+"-"+qid+"-title")
		  .attr('x', margin.left)
		  .attr('y', 5)
		  .attr("width", figWidth)
		  .attr("height", margin.top)
	          //.attr("style", "text-align:center;")
	
	d3.select("#svgFig"+"-"+qid+"-title")
	    .append("xhtml:p").attr("style","font-size:25px; margin-bottom:3px;")
	    .html(title)

      
	//d3.select("#svgFig"+"-"+qid+"-title")
	//	  .append("xhtml:p").style("font-size" , "20px")
	//	  .html(subtitle+" - "+totalResponses+" Responses")

	color.domain(["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"]);

      data.forEach(function(d) {
	
	  // calc percentages
	d.N = d3.sum([d[1], d[2], d[3], d[4], d[5]]);
	d["Strongly disagree"] = +d[1]*100/d.N;
	d["Disagree"] = +d[2]*100/d.N;
	d["Neither agree nor disagree"] = +d[3]*100/d.N;
	d["Agree"] = +d[4]*100/d.N;
	d["Strongly agree"] = +d[5]*100/d.N;
	var x0 = -1*(d["Neither agree nor disagree"]/2+d["Disagree"]+d["Strongly disagree"]);
	var idx = 0;
	d.boxes = color.domain().map(function(name) { return {name: name, x0: x0, x1: x0 += +d[name], N: +d.N, n: +d[idx += 1]}; });
      });

      
      var min_val = d3.min(data, function(d) {
        return d.boxes["0"].x0;
      });

        var max_val = d3.max(data, function(d) {
        return d.boxes["4"].x1;
      });

      x1.domain([min_val, max_val]);
      y.domain(data.map(function(d) { return d.Question; }));
      

      svg.append("g")
         .attr("class", "x1 axis")
         .call(x1AxisTop)
         .attr("transform" , "translate(" + 0 + "," + 0 + ")")
         .selectAll('text')
         .text(function(d){return d+'%'});
      
      svg.append("g")
         .attr("class", "x1 axis")
         .call(x1AxisBottom)
         .attr("transform" , "translate(" + 0 + "," + +(figHeight-margin.bottom) + ")")
         .selectAll('text')
         .text(function(d){return d+'%'});;
      
      
      svg.append("g")
         .attr("class", "y1 axis")
         .call(yAxis)
         .selectAll('text').remove();
      
      svg.selectAll('.y1.axis')
         .selectAll("g")
         .append("foreignObject")
         .attr('x', -margin.left+10)
         .attr('y', -50)
         .attr("width", 0.9*margin.left)
         .attr("height", y.rangeBand())
         .append("xhtml:p")
         .attr('style','word-wrap: break-word; text-align:center; font-size:14px')
         .html(function(d){return d});

      svg.append("g")
	 .attr("class", "y axis")
	 .append("line")
	 .attr("x1", x1(0))
	 .attr("x2", x1(0))
	 .attr("y2", +(figHeight - margin.bottom));

      var vakken = svg.selectAll(".question")
		      .data(data)
		      .enter().append("g")
		      .attr("class", "bar")
		      .attr("transform", function(d) { return "translate(0," + y(d.Question) + ")"; });

      var bars = vakken.selectAll("rect")
		       .data(function(d) { return d.boxes; })
		       .enter().append("g").attr("class", "subbar");

      bars.append("rect")
	  .attr("height", y.rangeBand())
	  .attr("x", function(d) { return x1(d.x0); })
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

      vakken.insert("rect",":first-child")
            .attr("height", y.rangeBand())
            .attr("x", "1")
            .attr("width", +(figWidth - margin.left - margin.right))
            .attr("fill-opacity", "0.5")
            .style("fill", "#F5F5F5")
            .attr("class", function(d,index) { return index%2==0 ? "even" : "uneven"; });

      var startp = svg.append("g").attr("class", "legendbox").attr("id", "mylegendbox");
      // this is not nice, we should calculate the bounding box and use that
      var legend_tabs = [-200, 30, 200, 475, 600];
      var legend = startp.selectAll(".legend")
			 .data(["Strongly disagree/Very unlikely", "Disagree/Unlikely", "Neither agree nor disagree/Not sure", "Agree/Likely", "Strongly agree/Very likely"])
			 .enter().append("g")
			 .attr("class", "legend")
			 .attr("transform", function(d, i) { return "translate(" + legend_tabs[i] + ",-45)"; });

      legend.append("rect")
	    .attr("x", 0)
	    .attr("width", 18)
	    .attr("height", 18)
	    .style("fill", color);

      legend.append("text")
	    .attr("x", 22)
	    .attr("y", 9)
	    .attr("dy", ".35em")
	    .style("text-anchor", "begin")
	    .style("font" ,"14px sans-serif")
	    .text(function(d) { return d; });  

      d3.selectAll(".axis path")
        .style("fill", "none")
        .style("stroke", "#000")
        .style("shape-rendering", "crispEdges")

        d3.selectAll(".axis line")
        .style("fill", "none")
        .style("stroke", "#000")
        .style("shape-rendering", "crispEdges")

        //var movesize = figWidth/2 - startp.node().getBBox().width/2;
        //d3.selectAll(".legendbox").attr("transform", "translate(" + movesize  + ",0)");     
    }); 
  }
};

export default LikertFig;

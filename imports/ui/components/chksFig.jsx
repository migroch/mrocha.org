import React, { Component } from 'react';
import  saveSvgAsPng from 'save-svg-as-png';


class ChksFig extends React.Component {
  constructor(props) {
    super(props);
    this.state= {clientWidth: $(window).width()};
    this.handleDownload = this.handleDownload.bind(this);
  }

  render() {
    return (
      
      <div id={this.props.qid+"-"+this.props.groupby} className="container-fluid figure">
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
    saveSvgAsPng.saveSvgAsPng($("#svgFig"+"-"+this.props.qid+"-"+this.props.groupby)[0], this.props.qid+this.props.groupby+".png", {backgroundColor: "#FFFFFF"});
  }
  
  handleResize = () =>{
    $("#svgFig"+"-"+this.props.qid+"-"+this.props.groupby).remove();
    this.setState({clientWidth: $(window).width()});
    //this.redrawFig(this.props);
  }  

  redrawFig(props){
    $("#svgFig"+"-"+props.qid+"-"+props.groupby).remove();
    this.drawFig();   
  }
  
  drawFig(){
    var qid = this.props.qid;
    var title = this.props.title;
    var subtitle = this.props.subtitle;
    var groupby = this.props.groupby;
    var windowWidth = this.state.clientWidth
    
    d3.csv(this.props.data_source, function(error, data) {

      //data = data.sort((a, b) => b.Diff - a.Diff)
      var nrows = data.length;
      var NonLGBTtotalN = d3.sum(data, (d)=>{return parseFloat(d['Non-LGBTtotal']);});
      var LGBTtotalN =  d3.sum(data, (d)=>{return parseFloat(d['LGBTtotal']);});
      var totalResponses =  NonLGBTtotalN + LGBTtotalN;
        
      var  figWidth = 0.95*windowWidth,
	   figHeight = 100*nrows+200,
	   ax1Width = 0.45*figWidth,
	   ax2Width = 0.28*figWidth,    
	   spaceForLabels   = 0.13*figWidth;
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
      
      var x2 = d3.scale.linear()
		 .rangeRound([0, ax2Width]);

      var x2AxisTop = d3.svg.axis()
			.scale(x2)
			.orient("top")
			.ticks(5);
      
      var x2AxisBottom = d3.svg.axis()
			   .scale(x2)
			   .orient("bottom")
			   .ticks(5);
      
      var color = d3.scale.ordinal()
	//.range(["#0099ff", "#00ccff", "#ff66b3"]);
		    .range(["#0099ff", "#e68a00", "#cc0052"]);
      
      var svg = d3.select("#"+qid+"-"+groupby).append("svg")
                  .attr("id", "svgFig"+"-"+qid+"-"+groupby)
		  .attr("class", "mx-auto svgFig")
		  .attr("width", figWidth)
		  .attr("height", +(figHeight+margin.top))
		  .append("g")
		  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		  .attr("height", +(figHeight - margin.bottom))

	d3.select("#svgFig"+"-"+qid+"-"+groupby)
		  .append("foreignObject")
		  .attr("id", "svgFig"+"-"+qid+"-"+groupby+"-title")
		  .attr('x', margin.left)
		  .attr('y', 5)
		  .attr("width", figWidth)
		  .attr("height", margin.top)
	          //.attr("style", "text-align:center;")
	
	d3.select("#svgFig"+"-"+qid+"-"+groupby+"-title")
	    .append("xhtml:p").attr("style","font-size:25px; margin-bottom:3px;")
	    .html(title)

      
	d3.select("#svgFig"+"-"+qid+"-"+groupby+"-title")
		  .append("xhtml:p").style("font-size" , "20px")
		  .html(subtitle+" - "+totalResponses+" Responses")
	
	color.domain(["Non-LGBT %", "LGBT %", "Diff"]);
      
      var x1min=100,
          x1max=0,
          x2min=100,
          x2max=0;
      
      data.forEach(function(d) {
        x1min = d3.min([x1min, +d['Non-LGBT %'], +d['LGBT %']]); 
        x1max = d3.max([x1max, +d['Non-LGBT %'], +d['LGBT %']]); 
        x2min = d3.min([x2min, +d['Diff']]); 
        x2max = d3.max([x2max, +d['Diff']]); 
      });
      
      x1min = x1min-5, x1max = x1max;
      x2min = (x2min < 0 ? x2min-2 : 0);
      x2max = x2max;

      data.forEach(function(d) {
        // calc percentages
        //d["Strongly disagree"] = +d[1]*100/d.N;
        var xmin = {'Non-LGBT %':x1min, 'LGBT %':x1min, 'Diff':d3.min([0, +d["Diff"]] )}
        d.boxes = color.domain().map(function(name) { return {name: name, x0: xmin[name], x1: +d[name], n:(name != "Diff" ? +d[name.replace(" %","")] : NaN)     }});
      });
	
      x1.domain([x1min, x1max]);
      x2.domain([x2min, x2max]);
      y.domain(data.map(function(d) { return d[groupby]; }));

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
         .attr("class", "x2 axis")
         .call(x2AxisTop)
         .attr("transform", "translate(" + +(ax1Width+80) + "," + 0 + ")")
         .selectAll('text')
         .text(function(d){return d+'%'});
      
      svg.append("g")
         .attr("class", "x2 axis")
         .call(x2AxisBottom)
         .attr("transform", "translate(" + +(ax1Width+80) + "," + +(figHeight-margin.bottom) + ")")
         .selectAll('text')
         .text(function(d){return d+'%'});
      
      svg.append("g")
         .attr("class", "y1 axis")
         .call(yAxis)
         .selectAll('text').remove();

      svg.append("g")
         .attr("class", "y2 axis")
         .append("line")
         .attr("x1", x2(0)+ax1Width+80)
         .attr("x2", x2(0)+ax1Width+80)
         .attr("y2", +(figHeight-margin.bottom));
      
      svg.selectAll('.y1.axis')
         .selectAll("g")
         .append("foreignObject")
         .attr('x', -margin.left+10)
         .attr('y', -20)
         .attr("width", 0.9*margin.left)
         .attr("height", y.rangeBand())
         .append("xhtml:p")
         .attr('style','word-wrap: break-word; text-align:center; font-size:25px')
         .html(function(d){return d}); 
      
      var vakken = svg.selectAll(".question")
		      .data(data)
		      .enter().append("g")
		      .attr("class", "bar")
		      .attr("transform", function(d) { return "translate("+ x1(x1min) + "," + y(d[groupby]) + ")"; });
      
      var bars = vakken.selectAll("rect")
		       .data(function(d) { return d.boxes; })
		       .enter().append("g").attr("class", "subbar");
      
      var ypos = {'Non-LGBT %': 0, 'LGBT %': y.rangeBand()/2, 'Diff':y.rangeBand()/4 }  
      var get_barx = function(d){
        if (d.name == "Diff"){
          return x2(d.x0)+(ax1Width+80);
        } else {
          return x1(d.x0);
        }
      }
      var get_barwidth = function(d){
        if (d.name == "Diff"){
          var diffx1 = (d.x0 == d.x1) ? 0 : d.x1;
          return Math.abs(x2(diffx1) - x2(d.x0));
        } else {
          if (d.x1 < x1min) d.x0 = 0;
          return Math.abs(x1(d.x1) - x1(d.x0));
        }
      }
      bars.append("rect")
             .attr("height", y.rangeBand()/2)
             .attr("y", function(d){ return ypos[d.name]}) 
             .attr("x",  get_barx )
             .attr("width", get_barwidth)
             .style("fill", function(d) { return color(d.name); });

      bars.append("text")
          .attr("x", function(d) { return get_barx(d)+get_barwidth(d); })
          .attr("y", function(d){ return ypos[d.name]})
          .attr("dy", y.rangeBand()/4+5 )
          .attr("dx", "0.5em")
        //.style("font" ,"10px sans-serif")
          .style("text-anchor", "begin")
          .text(function(d) { var t = (d.x1!=0) ? Math.round(d.x1)+'%' : ''; return t });

      bars.append("text")
          .attr("x", function(d) { return get_barx(d)+get_barwidth(d); })
          .attr("y", function(d){ return ypos[d.name]})
          .attr("dy", y.rangeBand()/4+5 )
          .attr("dx", "-0.5em")
        //.style("font" ,"10px sans-serif")
          .style("text-anchor", "end")
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
      var legend_tabs = [ax1Width-400, ax1Width-150, ax1Width+80];
      var legend = startp.selectAll(".legend")
			 .data(color.domain().slice())
			 .enter().append("g")
			 .attr("class", "legend")
			 .attr("transform", function(d, i) { return "translate(" + (legend_tabs[i]) + ",10)"; });

      legend.append("rect")
            .attr("x", 0)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

      legend.append("text")
            .data([`Non-LGBT(${NonLGBTtotalN})`,`LGBT(${LGBTtotalN})`,'Difference'])          
            .attr("x", 22)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "begin")
        //.style("font" ,"10px sans-serif")
            .text(function(d){return d});

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

export default ChksFig;

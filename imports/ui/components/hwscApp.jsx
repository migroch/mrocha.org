import React,  { Component } from 'react';
import ScaleFig from './scaleFig.jsx';

var states = {
  "safe":{
    qid:"IamSafe",
    fname:"3-29_AM_I_am_Safe",
    title:"I am safe, 3/29 am",
    "label": "3/29 AM: I am Safe"
  },
  "fitCreative":{
    qid:"IamFitCreative",
    fname:"3-29_PM_I_am_Fit_&_Creative",
    title:"I am fit & creative, 3/29 pm",
    "label": "3/29 PM: I am Fit & Creative"
  },
  "provided":{
    qid:"IamProvidedFor",
    fname:"4-26_AM_I_am_Provided_For",
    title:"I am provided for, 4/26 am",
    "label": "4/26 AM: I am Provided For"
  },
  "futureReady":{
    qid:"ReadyforMyFuture",
    fname:"4-26_PM_I_am_Ready_for_My_Future",
    title:"I am ready for my future, 3/26 pm",
    "label": "4/26 PM: I am Ready for My Future"
  }  
}

class HwscApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.getData = this.getData.bind(this);
    this.getStateLabels =  this.getStateLabels.bind(this);
    this.state = {};
    this.getStateLabels();
  }
  
  componentDidMount() {
    InitialMenuItem = $(".dropdown-menu a")[0];
    $(InitialMenuItem).addClass('active');
  }

  handleStateChange(e){
    e.preventDefault();
    $('.dropdown-item').removeClass('active');
    this.getData(e.target.id);
    $(e.target).addClass('active');
  }

  getStateLabels(){
    let url = "https://api.typeform.com/forms/YRq4Ck"
    let head = {Authorization: "bearer FxHUUX1xHE1XBftdU14p1DHzax5APXLzjN8QyVVM3J8i",
		Accept: "application/json"};
    fetch(url, {headers:head})
	.then(response => response.json())
	.then(data => {
	  this.fieldTitles=data.fields.map((field)=>field.title);
	  this.fieldScaleLabels=data.fields.map((field)=> {if (field.type == "opinion_scale")  return field.properties.labels});
	  this.stateLabels=data.fields[1].properties.choices.map((c)=>c.label);
	  this.stateLabels.push('All Sessions')
	  this.getData(this.stateLabels[0]);
	})
	.catch(error => console.log(error));
  }

  getData(stateLabel){
    let state = {'label':stateLabel};
    let url = "https://api.typeform.com/forms/YRq4Ck/responses?page_size=1000&query="+encodeURI(stateLabel);
    if (stateLabel=='All Sessions') url = "https://api.typeform.com/forms/YRq4Ck/responses?page_size=1000"
    let head = {Authorization: "bearer FxHUUX1xHE1XBftdU14p1DHzax5APXLzjN8QyVVM3J8i",
		Accept: "application/json"};
    fetch(url, {headers:head})
	.then(response => response.json())
	.then(data => { state['data'] = data;  this.setState(state)})
	.catch(error => console.log(error));
  }
  
  render() {
    if (!this.stateLabels){
      return(
	<p>loading...</p>
      )
    }else{  
      return(
	<div>
	  <div className="container-fluid text-center pt-3">
	    <div className="dropdown qdropdown">
	      <button className="btn btn-secondary btn-block btn-large  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		Select Session
	      </button>
	      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		{
		  this.stateLabels.map((label, index) =>{
		    if (label == this.state.label){
		      return (
			<div key={index}>
			  <a id={label} href="" className="dropdown-item active" onClick={this.handleStateChange}>{label}</a>  
			</div>
		      )
		    } else {
		    return(
		      <div key={index}>
			<a id={label} href="" className="dropdown-item" onClick={this.handleStateChange}>{label}</a>  
		      </div>
		    )
		  }})
		}
	      </div>
	    </div>
	  </div>

	  {
	    this.fieldTitles.map((fieldTitle, index)=>{
	      if (this.fieldScaleLabels[index]){
		return(
		  <ScaleFig
		      key={index}
		      session={this.state.label}
		      data={d3.nest().key((d)=> { if(d.answers) return d.answers[index].number}).rollup((v)=>{return v.length}).entries(this.state.data.items)}
		      title={this.fieldTitles[index]}
		      scaleLabels={this.fieldScaleLabels[index]}
		      qid={(this.state.label.split(':')[1]+'_'+this.state.label.split(':')[0]).replace(/ /g,"").replace(/&/g,"").replace('/','-')+'Q'+String(index)}
		  />
		)
	      }
	  })
	  }
	</div>
      )
    }
  }
};

export default HwscApp;

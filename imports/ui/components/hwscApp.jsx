import React,  { Component } from 'react';
import LikertFig from './likertFig.jsx';

var states = {
  "safe":{
    qid:"IamSafe",
    fname:"3-29_AM_I_am_Safe",
    title:"I am safe, 3/29 am",
  },
  "fitCreative":{
    qid:"IamFitCreative",
    fname:"3-29_PM_I_am_Fit_&_Creative",
    title:"I am fit & creative, 3/29 pm",
  },
  "provided":{
    qid:"IamProvidedFor",
    fname:"4-26_AM_I_am_Provided_For",
    title:"I am provided for, 4/26 am",
  },
  "futureReady":{
    qid:"ReadyforMyFuture",
    fname:"4-26_PM_I_am_Ready_for_My_Future",
    title:"I am ready for my future, 3/26 pm",
  }  
}

class HwscApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = states["safe"];
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  
  componentDidMount() {
    $("#safe").addClass('active');
  }

  handleStateChange(e){
    e.preventDefault();
    $('.dropdown-item').removeClass('active');
    this.setState(states[e.target.id]);
    $(e.target).addClass('active');
   }
  
  render() {
    return(
      <div>
	<div className="container-fluid text-center pt-3">
	  <div className="dropdown qdropdown">
	    <button className="btn btn-secondary btn-block btn-large  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	      Select Session
	    </button>
	    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
	      {
		Object.keys(states).map((key, index) =>{
		  return(
		    <div key={index}>
		      <a id={key} href="" className="dropdown-item" onClick={this.handleStateChange}>{states[key].title}</a>  
		    </div>
		  )
		})
	      }
	    </div>
	  </div>
	</div>
	
	<LikertFig
	    data_source={"/hw-data/"+this.state.fname+".csv"}
	    title={this.state.title}
	    qid ={this.state.qid}
	/>
	
	      
      </div>
    )  
  }
};

export default HwscApp;

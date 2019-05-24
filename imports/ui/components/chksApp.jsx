import React,  { Component } from 'react';
import ChksFig from './chksFig.jsx';

var groups = ['all', "ethnicity","grade","district","cdscode"]
var states = {
  "SafeAtSchool":{
    qid:"SafeAtSchool",
    title:"I feel safe in my school.",
    subTitle: "% that AGREE or STRONGLY AGREE"
  },
  "Threatened":{
    qid:"Threatened",
    title:"Past 12 months at school, been threatened with harm or injury?",
    subTitle: "% that responded ONE OR MORE TIMES"
  },
  "AttemptingSuicide":{
    qid:"AttemptingSuicide",
    title:"Past 12 months, did you ever seriously consider attempting suicide?",
    subTitle: "% that responded YES"
  },
  "MadeFunOrInsulted":{
    qid:"MadeFunOrInsulted",
    title:"Past 12 months at school, been made fun of, insulted, or called names?",
    subTitle: "% that responded ONE OR MORE TIMES"
  }  
}

class ChksApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = states["SafeAtSchool"];
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  
  componentDidMount() {
    $("#SafeAtSchool").addClass('active');
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
	      Select Question
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
	
	{
	  groups.map((group, index)=>{
	    var subtext = group=='all' ? " (Countywide)" : " (by "+group+")"
	    return(
	      <ChksFig key={index}
		      data_source={"/chks-data/"+this.state.qid+"_"+group+".csv"}
		      title={this.state.title}
		      subtitle={this.state.subTitle+subtext}
		      qid ={this.state.qid}
		      groupby={group}	
	      />
	    )
	  })
	}
	      
      </div>
    )  
  }
};

export default ChksApp;

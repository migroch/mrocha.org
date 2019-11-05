// Astro1.jsx
// Page component for the Astro1 page
import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';

export default class Astro1 extends React.Component {
  constructor(props) {
    super(props);
  }

  renderWeekEvents(key, schedule){
    let weekEvents = schedule[key]
    return(
      <div className="container-fluid col-md-6 announcements bpadding">
	<h3 className="bg-info text-center">{key}</h3>

	<p dangerouslySetInnerHTML={{__html: weekEvents[0]}}></p>
	<p dangerouslySetInnerHTML={{__html: weekEvents[1]}}></p>

	<p><a  href='Astro1-Lab7.pdf' target='_blank'>Lab 7: Emission Spectra </a></p>

       
	{/*<p className="bg-danger">All assigments due Friday, Dec 14</p>*/}

	{/* <p  className="bg-warning">Assigments due next Tuesday: <a  href='Phys1-Lab1.pdf' target='_blank'>Lab 1: Measuring the Diameter of the Sun</a> and <a  href='Phys1-Hw1.pdf' target='_blank'>HW 1: Units Conversion Practice</a></p> */}
	
	{/*<p  className="bg-warning" dangerouslySetInnerHTML={{__html: weekEvents[2]}}></p>*/}
	{/*<p className="bg-danger" dangerouslySetInnerHTML={{__html: weekEvents[3]}}></p> */}
      </div>
    )
  }

  render(){
    const { loading, syllExists, syllabus } = this.props;
    const motive = syllabus.CourseMotive ? syllabus.CourseMotive : 'loading...';
    const objectives = syllabus.LearningObjectives ? syllabus.LearningObjectives : [];
    const schedule = syllabus.CourseSchedule ? syllabus.LearningObjectives : {};
    if(loading){
      return(
	<p>loading ...</p>
      )
    }else{
      return (
	<div className="container syllabus">
	  <Helmet>
            <title>{syllabus.CourseName}</title>
          </Helmet>

	 
	  
	  <div className="row bpadding">
 	    
	    <div className="container  text-center col-md-4" >
	      <a href="http://www.gavilan.edu">
		<img className="img-fluid"  src="Gavilan_College_Logo_Wide_300dpi.png" />
	      </a>
	    </div>
	    <div className="container  text-center col-md-8 my-auto">
	      <br/>
	      <br/>
	      <h2>{syllabus.CourseName}</h2>
	      {/* <h4>Section: <a href={syllabus.SectionLink}>{syllabus.SectionCode}</a></h4>
	      <h4>Time: {syllabus.Time}</h4>
	      <h4>Room: {syllabus.Room}</h4>
	      <h4>Term: {syllabus.Term}</h4>
	      <h4>Units: {syllabus.Units}</h4>*/}
	    </div>
	  </div>
	  
	  <div className="container-fluid text-center">
	    <h3>{syllabus.InstructorName} - { <a href="mailto:{syllabus.InstructorEmail}">{syllabus.InstructorEmail}</a>}</h3>
	    <h4>Office Hours: {syllabus.OfficeHour}</h4>
	    <h4>Course Website: <a href={syllabus.CourseLink}>{syllabus.CourseLink}</a></h4>
	  </div>

	  <div className="container">
	    <blockquote className="blockquote">
	      <p className="mb-0"><em>{motive.hawking}</em></p>
	      <footer className="blockquote-footer">Stephen Hawking</footer>
	    </blockquote>
	  </div>

	  <div className="container-fluid row bpadding">

	   
	    {this.renderWeekEvents("Week 11: EM Waves & Light", syllabus.CourseSchedule)} 
	   
	    
	    <div className="container-fluid col-md-6 calendar">
	      <iframe  src="https://calendar.google.com/calendar/embed?showTitle=0&amp;mode=AGENDA&amp;height=250&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=hblk46ei531je1apnrhrm6uaco@group.calendar.google.com&amp;color=%230F4B38&amp;ctz=America%2FLos_Angeles" style={{borderWidth:0}} width="100%" height="250" frameBorder="0" scrolling="no" fontSize="500"></iframe>
	    </div>
	    
	  </div>

	  <div className="container">
	    <h2>Tentative Schedule</h2>
	    <dl className="dl-horizontal">
	      {
		Object.keys(syllabus.CourseSchedule).map((key, index) =>{
		  return (
		    <div key={index}>
		      <dt><p>{key}</p></dt>
		      <dd>
			{
			  syllabus.CourseSchedule[key].map((txt, index)=>{
			    return <p key={index} dangerouslySetInnerHTML={{__html: txt}}></p>
			  })
			}
		      </dd>
		    </div>
		  );
		})
	      }
	    </dl>
	  </div>
	  
	  <div className="container">
	    <h2>Description</h2>
	    <p>{motive.mrocha}</p>
	    <p>{syllabus.CourseDescription}</p>
	    
	  </div>
	  
	  <div className="container">
	    <h2>Text</h2>
	    <p dangerouslySetInnerHTML={{__html: syllabus.RequiredText[0]}}></p>
	    <p>{syllabus.RequiredText[1]}</p> 
	 </div>

	 <div className="container">
	   <h2>Homework</h2>
	   <p>{syllabus.Homework}</p>
	 </div>

	  <div className="container">
	    <h2>Labs/Activities</h2>
	    <p>{syllabus.Labs}</p>
	  </div>

	  <div className="container">
	    <h2>Late Work</h2>
	    <p>{syllabus.LateWork}</p>
	  </div>

	  <div className="container">
	    <h2>Grading</h2>
	    <ul>
	      {
		Object.keys(syllabus.Grading).map((key, index) =>{
		  return <li key={index}><p>{key}: {syllabus.Grading[key]}</p></li>;
		})
	      }
	    </ul>
	    <p>{syllabus.ExtraCredit}</p>
	  </div>

	  <div className="alert alert-success text-center" role="alert">
	    <h4>Tip for Success: {syllabus.SuccessTip}</h4>
	  </div>
	  
	  <div className="container">
	    <h2>Learning Objectives</h2>
	    <ul>
	      {
		objectives.map((objective, index) =>{
		  return <li key={index}><p>{objective}</p></li>;
		})
	      }
	    </ul>
	  </div>
	   
	  <div className="container">
	    <h2>Honesty</h2>
	    <div className="alert alert-danger text-center" role="alert">
	      <p>{syllabus.Honesty}</p>
	    </div>
	  </div>

	  <div className="container">
	    <h2>Attendance Policy</h2>
	    <p>{syllabus.AttendancePolicy}</p>
	  </div>

	  <div className="container">
	    <h2>ADA Accomodation Statement</h2>
	    <p>{syllabus.ADA}</p>
	  </div>
	  
	</div>
      );
    }
  }
}

Astro1.propTypes = {
  loading: PropTypes.bool,
  syllExists: PropTypes.bool,
  syllabus: PropTypes.object
};

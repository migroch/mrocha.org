// Phys1.jsx
// Page component for the Phys1 page
import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import {weekNumberSun} from 'weeknumber';

export default class Phys1 extends React.Component {
  constructor(props) {
    super(props);
  }

  renderWeekEvents(weekKey, schedule){

    let weekEvents = schedule[weekKey];
    return(
      <div className="container-fluid col-md-6 announcements bpadding">

      <h3 className="bg-info text-center">{weekKey}</h3>
      
	<p dangerouslySetInnerHTML={{__html: weekEvents[0]}}></p>
      
	{/* <p className="bg-danger" dangerouslySetInnerHTML={{__html: weekEvents[0]}}></p>   */}

      <p>Zoom Meeting Link: <br />
      <a href='https://cccconfer.zoom.us/j/4119451947'  target='_blank'>cccconfer.zoom.us/j/4119451947</a>
      </p>

      <p>Lecture Slides:<p dangerouslySetInnerHTML={{__html: weekEvents[1]}}></p></p>
	
      <p>Labs: <br />
	<a  href='Phys1-Lab13.pdf' target='_blank'>Lab 13: Sound and Music</a> (<a  href='https://academo.org/demos/virtual-oscilloscope/' target='_blank'>Virtual Oscilloscope</a>, <a href="https://musiclab.chromeexperiments.com/Experiments" target='_blank'>Music Lab Experiments</a>) 
      </p>
	
      {/*	 <p><a  href='Phys1-Lab11.pdf' target='_blank'>Lab 11: Dry Ice Fun!</a></p>  */}
	 
      <p className="bg-warning" dangerouslySetInnerHTML={{__html: weekEvents[2]}}></p>
	 
      {/* <p className="bg-warning">Assigment due Friday: <a href='Phys1-Hw1.pdf' target='_blank'>HW 1: Unit Conversion Practice</a></p>  */}

      {/* <p className="bg-danger">Midterm 2 next Tuesday, October 29th - <a  href='https://slides.com/migroch/deck-1-3-7-11-34/fullscreen#/' target='_blank'>Midterm 2 Study Guide</a> - <a href='https://ilearn.gavilan.edu/courses/7263/quizzes/18290?module_item_id=214637'>HW 6 (Midterm 2 Practice Quiz)</a></p> */}

      {/* <p><a  href='https://slides.com/migroch/deck-2-4-9-12-36/fullscreen' target='_blank'>Midterm 3 Study Guide</a>, <a href="https://ilearn.gavilan.edu/courses/7263/quizzes/18281?module_item_id=214656">Midterm 3 Practice Quiz</a></p> */}
	
      </div>
    )
  }

  getThisWeek(schedule){

    const startDate = new Date('2020/01/27' );
    const holidayweekDate = new Date('2020/04/06');

    console.log(startDate)
    let weekNumber = weekNumberSun();
    let startWeek =  weekNumberSun(startDate);
    let holidayWeek =  weekNumberSun(holidayweekDate);

    let index =  weekNumber - startWeek;
    if (weekNumber > holidayWeek) index += 1 ;
    let indexMax =  Object.keys(schedule).length - 1;

    let key = Object.keys(schedule)[0];

    if (index <= indexMax) {
      key = Object.keys(schedule)[index];
    } else {
      key = Object.keys(schedule)[indexMax]
    }
    return  {key:key, index:index};
  }

  componentDidUpdate(){
    let schedule = this.props.syllabus.CourseSchedule;
    let thisWeek = this.getThisWeek(schedule);
    Object.keys(schedule).forEach((key, index) => {
      if (index > thisWeek.index + 1)  $('#week'+index+' a').addClass('disabled')
    })    
  }

  render(){
    const { loading, syllExists, syllabus } = this.props;
    const motive = syllabus.CourseMotive ? syllabus.CourseMotive : 'loading...';
    const objectives = syllabus.LearningObjectives ? syllabus.LearningObjectives : [];
    const schedule = syllabus.CourseSchedule ? syllabus.CourseSchedule : {};
    
    if(loading){
      return(
	<p>loading ...</p>
      )
    }else{

      const thisWeek = this.getThisWeek(syllabus.CourseSchedule);
      const WeekEvents = this.renderWeekEvents(thisWeek.key, syllabus.CourseSchedule);
      
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
	    <div className="container text-center col-md-8 my-auto">
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
	    
	  <div className="container-fluid">
	    <blockquote className="blockquote">
	      <p className="mb-0"><em>{motive.heisenberg}</em></p>
	      <footer className="blockquote-footer">Werner Heisenberg</footer>
	    </blockquote>
	  </div>

	  <div className="container-fluid row bpadding">
	   
	    {WeekEvents} 

	    <div className="container-fluid col-md-6 calendar">
	      <iframe  src="https://calendar.google.com/calendar/embed?showTitle=0&amp;mode=AGENDA&amp;height=250&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=ko0gmi48tb2rbh591cuu8qnb80%40group.calendar.google.com&amp;color=%230F4B38&amp;ctz=America%2FLos_Angeles" style={{borderWidth:0}} width="100%" height="350" frameBorder="0" scrolling="no" fontSize="500"></iframe>
	    </div>
	   
	  </div>

	  <div className="container">
	    <h2>Tentative Schedule</h2>
	    <dl className="dl-horizontal">
	      {
		Object.keys(syllabus.CourseSchedule).map((key, index) =>{
		  return (
		    <div key={index} id={"week"+index}>
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
	    <h2>Text Book</h2> 
	    <p>{syllabus.RequiredText}</p>
	 </div>

	 <div className="container">
	   <h2>Homework</h2>
	   <p>{syllabus.Homework}</p>
	 </div>

	  <div className="container">
	    <h2>Labs</h2>
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

Phys1.propTypes = {
  loading: PropTypes.bool,
  syllExists: PropTypes.bool,
  syllabus: PropTypes.object
};

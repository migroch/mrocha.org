// RopCSNavbar.jsx
// Navbar component for RopCS
import React from 'react';

class RopCSNavbar  extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const syllabus = this.props.syllabus;
    return (
      <nav className="navbar navbar-default" role="navigation">
	<div className="container-fluid js-navbar-container">

	  <div className="navbar-header">
            <span>
              <a className="navbar-brand" href="/ropcs">
		{syllabus.ShortName}
              </a>
            </span>
            
            <button type="button" className="navbar-toggle collapsed" id="menu-button"
                    data-toggle="collapse" data-target="#navbarlist">
              <span className="glyphicon glyphicon-menu-hamburger"></span>
            </button>
	  </div>

	  <div className="collapse navbar-collapse navbar-right" id="navbarlist">
	    <ul className="nav navbar-nav navbar-right">

	      {/*Lectures*/}
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Lectures <span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		     syllabus.Lectures.map((lecture, index)=>(
		  <li key={index}><a href={lecture.link} target="_blank"><p className="text-primary">{lecture.name}</p></a></li>
		     ))
		  }
		</ul>
              </li>
	      
	      {/*Quizzes*/}
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Quizzes <span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		     syllabus.Quizzes.map((quiz)=>(
		      <li key={quiz.id}>
		        <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target={"#"+quiz.id}><p>{quiz.name}</p></button>
		      </li>
		     ))
		  }
		</ul>
              </li>

	      {/*Assignments*/}
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Assignments <span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		  syllabus.Assignments.map((assignment)=>(
		  <li key={assignment.id}>
		    <a href={assignment.link} target="_blank"><p className="text-primary">{"Assignment "+assignment.id+": "+assignment.shortDescription}</p></a>
		  </li>
		  ))
		  }
		</ul>
              </li>

	      {/*Tool Links*/}
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tool Links <span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		  syllabus.ToolLinks.map((tlink, index)=>(
		  <li key={index}>
		    <a href={tlink.link} target="_blank"><p className="text-primary">{tlink.name}</p></a>
		  </li>
		  ))
		  }
		</ul>
              </li>
	      
	    </ul>

	  </div>
	</div>
      </nav>

    );
  }
}

export default RopCSNavbar

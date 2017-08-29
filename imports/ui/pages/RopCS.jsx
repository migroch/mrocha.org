// RopCS.jsx
// Page component for the RopCS page
import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';

export default class RopCS extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { loading, syllExists, syllabus } = this.props;
    return (
      <div className="container syllabus">
	<Helmet>
          <title>ROP Explorign Computer Science Syllabus</title>
        </Helmet>
	
	<div className="container-fluid rop-header">
	  <a href="http://www.rop.santacruz.k12.ca.us/">
	    <img className="img-responsive" src="rop_header.gif" />
	  </a>
	</div>
	
	<div className="container text-center">
	  <h1>Welcome to ROP Computer Science!</h1>
	  <h2><small>Miguel Rocha - mrocha@scottsvalleyusd.org - <a href="https://mrocha.org/ropcs">mrocha.org/ropcs</a></small></h2>
	</div>
	{/*<div className="alert alert-info text-center" role="alert"><h4>This is your syllabus. It will be updated as we move on! You can access it at <a href="https://mrocha.org/ropcs">mrocha.org/ropcs</a></h4></div>*/}

	<div className="container thisweek">
	  <h2><small>Week 1</small> <small className="text-success">(this week)</small> <small>How Computers Work & Learning to Code</small></h2>

	  <div className="container col-md-4">
	    <div className="panel panel-primary">
	      <div className="panel-heading">
		<h3 className="panel-title">Monday</h3>
	      </div>
	      <div className="panel-body">
		<ol>
		  <li>RopCS site updates</li>
		  <li>Week Overview</li>
		  <li><a href="codehs.com/go/AB996" target="_blank">CodeHS AB996</a></li>
		</ol>
	      </div>
	    </div>
	  </div>

	  <div className="container col-md-4">
	    <div className="panel panel-primary">
	      <div className="panel-heading">
		<h3 className="panel-title">Tuesday</h3>
	      </div>
	      <div className="panel-body">
		<ol>
		  <li><a href="http://slides.com/migroch/deck-2/fullscreen" target="_blank">How Computers Work</a> - <a href="https://slides.com/migroch/deck-2/live" target="_blank">Live</a></li>
		  <li><a href="codehs.com/go/AB996" target="_blank">CodeHS AB996</a></li>
		</ol>
	      </div>
	    </div>
	  </div>

	  <div className="container col-md-4">
	    <div className="panel panel-primary">
	      <div className="panel-heading">
		<h3 className="panel-title">Thursday</h3>
	      </div>
	      <div className="panel-body">
		<ol>
		  <li>Week 0 Quiz</li>
		  <li><a href="http://slides.com/migroch/deck-1-3/fullscreen" target="_blank">Thinking Binary</a> - <a href="https://slides.com/migroch/deck-1-3/live" target="_blank">Live</a></li>
		  <li>Computer History</li>
		  <li><a href="codehs.com/go/AB996" target="_blank">CodeHS AB996</a></li>
		  <li className="bg-danger">Work of the week due: CodeHS - Control Structures</li>
		</ol>
	      </div>
	    </div>
	  </div>
	</div>

	
	
	<div className="container thisweek">
	  <h2><small>Week 0 Introduction and Setting Up</small></h2>

	  <div className="container col-md-4">
	    <div className="panel panel-primary">
	      <div className="panel-heading">
		<h3 className="panel-title">Monday</h3>
	      </div>
	      <div className="panel-body">
		<ol>
		  <li><button type="button" className="btn btn-default" data-toggle="modal" data-target="#meetQ">Getting to know each other</button>
		  </li>
		  <li>Syllabus</li>
		  <li><button type="button" className="btn btn-default" data-toggle="modal" data-target="#assessQ">Assessment questionnarie</button>
		  </li>
		  <li>A bit about ROP classes</li>
		  <li><a href="https://www.timeanddate.com/eclipse/in/@z-us-95065" target="_blank"> Eclipse!?</a></li>
		</ol>
	      </div>
	    </div>
	  </div>

	  <div className="container col-md-4">
	    <div className="panel panel-primary">
	      <div className="panel-heading">
		<h3 className="panel-title">Tuesday</h3>
	      </div>
	      <div className="panel-body">
		<ol>
		  <li>Typing games! <a href="http://www.typinggames.zone/" target="_blank">typinggames.zone</a>, <a href="http://games.sense-lang.org/EN.php" target="_blank">sense-lang.org</a>
		  </li>
		  <li><a href="http://slides.com/migroch/deck/fullscreen" target="_blank">
		    What is Computer Science? and
		    What jobs can you get as a Computer Scientist?</a> - <a href="https://slides.com/migroch/deck/live" target="_blank">Live</a></li>
		  <li><a href="codehs.com/go/AB996" target="_blank">CodeHS AB996</a></li>
		</ol>
	      </div>
	    </div>
	  </div>

	  <div className="container col-md-4">
	    <div className="panel panel-primary">
	      <div className="panel-heading">
		<h3 className="panel-title">Thursday</h3>
	      </div>
	      <div className="panel-body">
		<ol>
		  <li>Typing games!</li>
		  <li><a href="http://slides.com/migroch/deck-1/fullscreen" target="_blank">Programming (AKA Coding)</a> - <a href="https://slides.com/migroch/deck-1/live" target="_blank">Live</a></li>
		  <li><a href="codehs.com/go/AB996" target="_blank">CodeHS AB996</a></li>
		</ol>
	      </div>
	    </div>
	  </div>
	</div>
	
	<div className="jumbotron ">
	  <h2 className="text-center">Learning Objectives! </h2>
	  <ul>
	    <li><h3>Learning to code (JavaScript and Python) - <i className="text-success">Weeks: 0-3</i></h3></li>
	    <li><h3>How computers work and history of computing - <i className="text-warning">Week 1</i></h3></li>
	    <li><h3>How the internet works - <i className="text-danger">Week 2</i></h3></li>
	    <li><h3>The unix terminal and text editors - <i className="text-danger">Week 3</i></h3></li>
	    <li><h3>Using Git repositories and GitHub for version control and collaborative programming - <i className="text-danger">Week 3</i></h3></li>
	    <li><h3>Graphic User Interfaces (GUIs) with web technologies (JavaScript,  HTML and CSS) - <i className="text-danger">Weeks 4-5</i></h3></li>
	    <li><h3>From websites to platform independent responsive and reactive standalone applications - <i className="text-danger">Week 6-8</i></h3></li>
	    
	    <li><h3>Programming guide lines for open source applications - <i className="text-danger">Week 8</i></h3></li>
	    <li> <h3>Data analysis and visualization (Matplotlib and D3.js) - <i className="text-danger">Week 9-10</i></h3></li>
	    <li><h3>Machine Intelligence and automation - what the heck is AI? - <i className="text-danger">Week 11-12</i></h3></li>
	    <li><h3>Cyber Security - <i className="text-danger">Week 13</i></h3></li>
	  </ul>
	</div>

	<div className="jumbotron ">
	  <h2 className="text-center">Homework</h2>
	  <p>Your weekly work is due Thursday of every week. If you are focus during class hours you may not have any homework!</p>
	</div>

	<div className="alert alert-success text-center" role="alert"><h4>Tip for Success: Do your work during class!</h4></div>
	
	<div className="jumbotron ">
	  <h2 className="text-center">Projects</h2>
	  <p>Your final project is a portfolio of one or more applications you developed during the year. You will have to write a documentation and do a presentation for at least one application. Collaboration is allowed and encoraged but I will be grading based on each individual effort.</p>
	</div>

	<div className="jumbotron ">
	  <h2 className="text-center">Grading</h2>
	  <ul>
	    <li><p>Projects: 40%</p></li>
	    <li><p>Weekly Work: 30%</p></li>
	    <li><p>Quizes: 20%</p></li>
	    <li><p>Being Present: 10%</p></li>
	  </ul>
	</div>

	<div className="alert alert-danger text-center" role="alert"><p>Honesty: Students are expected to exercise academic honesty and integrity. Violations such as cheating and plagiarism will result in disciplinary action which may include recommendation for dismissal.</p></div>
	
	<div className="modal fade" id="meetQ"  role="dialog" aria-labelledby="myModalLabel">
	  <div className="modal-dialog" role="document">
	    <div className="modal-content">
	      <div className="modal-header">
		<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		<h4 className="modal-title" id="myModalLabel">Meet and Greet Questionnarie</h4>
	      </div>
	      <div className="modal-body">
		<ol>
		  <h3><li>Why did you choose this class?</li></h3>
		  <h3><li>Are you planning to go to College? Do you know what major?</li></h3>
		  <h3><li>What is your favorite sport or hobbie?</li></h3>
		  <h3><li>What is your favorite candy or dessert?</li></h3>
		  <h3><li>Did you do anything exciting this summer? Did you work?</li></h3>
		  <h3><li>Do you work after school?</li></h3>
		</ol>
	      </div>
	      <div className="modal-footer">
		<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>

	<div className="modal fade" id="assessQ"  role="dialog" aria-labelledby="myModalLabel">
	  <div className="modal-dialog" role="document">
	    <div className="modal-content">
	      <div className="modal-header">
		<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		<h4 className="modal-title" id="myModalLabel">Assessment Questionnarie</h4>
	      </div>
	      <div className="modal-body">
		<ol>
		  <h3><li>Try do define what Computer Science is</li></h3>
		  <h3><li>Have you done any programming before?</li></h3>
		  <h3><li>Have you used Emacs, Vi/Vim or Sublime?</li></h3>
		  <h3><li>Have you used a Unix terminal?</li></h3>
		  <h3><li>Have you used Git or Github before?</li></h3>
		  <h3><li>Have you plot or visualize data with anything other than Excel or its equivalents?</li></h3>
		</ol>
	      </div>
	      <div className="modal-footer">
		<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
	
      </div>
    );
  }
}


RopCS.propTypes = {
  loading: PropTypes.bool,
  syllExists: PropTypes.bool,
  syllabus: PropTypes.object
};

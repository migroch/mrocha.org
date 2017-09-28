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
    if(loading){
      return(
	<p>loading ...</p>
      )
    }else{
      return (
	<div className="container-fluid nopadding">
	  <Helmet>
            <title>ROP Exploring Computer Science Syllabus</title>
          </Helmet>
	  
	  <div className="container-fluid rop-header nopadding">
	    <a href="http://www.rop.santacruz.k12.ca.us/">
	      <img className="img-responsive" src="rop_header.gif" />
	    </a>
	  </div>
	  
	  <div className= "container-fluid syllabus">
	    <div className="container text-center bpadding">
	      <h1 className="title">{syllabus.CourseName}</h1>
	      <h2 className="teacherInfo"><small>Miguel Rocha - mrocha@scottsvalleyusd.org - <a href="https://mrocha.org/ropcs">mrocha.org/ropcs</a></small></h2>
	    </div>
	    {/*<div className="alert alert-info text-center" role="alert"><h4>This is your syllabus. It will be updated as we move on! You can access it at <a href="https://mrocha.org/ropcs">mrocha.org/ropcs</a></h4></div>*/}

	    <div className="container-fluid row bpadding">

	      <div className="container-fluid col-md-6 announcements bpadding">
		<h3 className="bg-info text-center">Week 5 Announcements</h3>

		<p>This week we are going to learn data driven web development <a href="https://slides.com/migroch/deck-1-3-7-11-14/fullscreen" target="_blank">Intro to Web Development 2: Data Driven Web Development </a></p>
		
		<p><a href="https://ide.c9.io/migroch/simple-react-data-app" target="_blank">Assignment 5: Data driven REACT app example in C9</a></p>
		
		<p><a href="https://ide.c9.io/testst/html5-cloned2" target="_blank">Assignment 4: Multiple page website example in C9</a></p>

	        <p><a href="https://facebook.github.io/react/" target="_blank">React</a></p>
	
		<p><a href="https://www.w3schools.com" target="_blank">W3 Schools</a></p>

		<p><a href="http://getbootstrap.com/docs/3.3/" target="_blank">Bootstrap</a></p>

		<p><a href="https://api.jquery.com/" target="_blank">jQuery</a></p>

		<p><a  href="http://cheatsheetworld.com/programming/unix-linux-cheat-sheet/" target="_blank">Unix commands cheat sheet</a></p>
		
		<p><button type="button" className="btn btn-default" data-toggle="modal" data-target="#Quiz3">Week 3 Quiz Answers</button></p> 
		
	      </div>
	      
	      <div className="container-fluid col-md-6 calendar">
		<iframe  src="https://calendar.google.com/calendar/embed?showTitle=0&amp;mode=AGENDA&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=81kff9uhearbf24dsena9mb3us%40group.calendar.google.com&amp;color=%230F4B38&amp;ctz=America%2FLos_Angeles" style={{borderWidth:0}} width="100%" height="350" frameBorder="0" scrolling="no" fontSize="500"></iframe>
	      </div>
	      
	    </div>
	    
	    <div className="jumbotron ">
	      <h2 className="text-center">Learning Objectives! </h2>
	      <ul>
		<li><h3>Learning to code (JavaScript and Python) - <i className="text-success">Weeks: 0-3</i></h3></li>
		<li><h3>How computers work and history of computing - <i className="text-success">Week 1</i></h3></li>

		<li><h3>The unix terminal and text editors - <i className="text-success">Week 3</i></h3></li>
							
		<li><h3>Graphic User Interfaces (GUIs) with web technologies (JavaScript,  HTML and CSS) - <i className="text-warning">Weeks 4-5</i></h3></li>

		<li><h3>Using Git repositories and GitHub for version control and collaborative programming - <i className="text-warning">Week 4</i></h3></li>
		
		<li><h3>How the internet works - <i className="text-danger">Week 5</i></h3></li>
		
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
		<li><p>Quizzes: 20%</p></li>
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

	    <div className="modal fade" id="Quiz0"  role="dialog" aria-labelledby="myModalLabel">
	      <div className="modal-dialog" role="document">
		<div className="modal-content">
		  <div className="modal-header">
		    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		    <h4 className="modal-title" id="myModalLabel">Week 0 Quiz</h4>
		  </div>
		  <div className="modal-body">
		    <ol>
		      <h3><li>Who knows more about how computers are built?
			<ul className="list-inline">
			  <li className="bg-success">a) Electrical Engineers</li>
			  <li>b) Computer Scientists</li>
			</ul>
		      </li></h3>
		      <h3><li>
			Computer Engeneers don't study anything related to computer hardware.
			<ul className="list-inline">
			  <li>a) True</li>
			  <li className="bg-success">b) False</li>
			</ul>
		      </li></h3>
		      <h3><li>
			Computer Science is all about 
			<ul>
			  <li>a) Coding</li>
			  <li className="bg-success">b) Coding and problem solving</li>
			  <li>c) Building computer software and hardware</li>
			</ul>
		      </li></h3>
		      <h3><li>
			Making video games is not considered a Computer Science job.
			<ul className="list-inline">
			  <li>a) True</li>
			  <li className="bg-success">b) False</li>
			</ul>
		      </li></h3>
		      <h3><li>
			Answering this question could be considered a boolean operation.
			<ul className="list-inline">
			  <li className="bg-success">a) True</li>
			  <li>b) False</li>
			</ul>
		      </li></h3>
		      <h3><li>
			Which of the following is a control flow statements.
			<ul className="list-inline">
			  <li>a) break</li>
			  <li>b) for</li>
			  <li>c) while</li>
			  <li>d) exit</li>
			  <li className="bg-success">e) All of the above</li>
			</ul>
		      </li></h3>
		    </ol>
		  </div>
		  <div className="modal-footer">
		    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		  </div>
		</div>
	      </div>
	    </div>


	    <div className="modal fade" id="Quiz1"  role="dialog" aria-labelledby="myModalLabel">
	      <div className="modal-dialog" role="document">
		<div className="modal-content">
		  <div className="modal-header">
		    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		    <h4 className="modal-title" id="myModalLabel">Week 1 Quiz</h4>
		  </div>
		  <div className="modal-body">
		    <ol>
		      <h3><li>Which one is a type of switch that you can use to make a computer?
			<ul className="list-inline">
			  <li>a) Relay</li>
			  <li>b) Vacuum Tube</li>
			  <li>c) Transistor</li>
			  <li  className="bg-success">d) All of the above</li>
			</ul>
		      </li></h3>
		      <h3><li>
			A transistor is just a switch that you can turn on and off by applying a current to the base/gate.
			<ul className="list-inline">
			  <li  className="bg-success">a) True</li>
			  <li>b) False</li>
			</ul>
		      </li></h3>
		      <h3><li>
			If my inputs are 1 and 1, which logic gate will give me a 1 as an output?
			<ul className="list-inline">
			  <li>a) AND</li>
			  <li>b) OR</li>
			  <li>c) XOR</li><br />
			  <li  className="bg-success">d) a) and b)</li>
			</ul>
		      </li></h3>
		      <h3><li>
			How would you write the number 5 in binary?
			<ul className="list-inline">
			  <li>a) 111</li>
			  <li>b) 100</li>
			  <li  className="bg-success">c) 101</li>
			</ul>
		      </li></h3>
		      <h3><li>
			What is the highest number you can represent with 3 bits?
			<ul className="list-inline">
			  <li>a) 100</li>
			  <li>b) 5 </li>
			  <li  className="bg-success">c) 7 </li>
			</ul>
		      </li></h3>
		      <h3><li>
			How many bits is a byte?
			<ul className="list-inline">
			  <li>a) 16</li>
			  <li>b) 32</li>
			  <li  className="bg-success">c) 8</li>
			</ul>
		      </li></h3>
		      <h3><li>
			Order the types of memory in a computer from fast access to slow access, i.e. fastest to access first, slowest to access last. 
			<ul className="list-inline">
			  <li>a) Storage, RAM, Cache</li>
			  <li>b) Storage, Cache, RAM</li>
			  <li  className="bg-success">c) Cache, RAM, Storage</li>
			</ul>
		      </li></h3>
		    </ol>
		  </div>
		  <div className="modal-footer">
		    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		  </div>
		</div>
	      </div>
	    </div>


	    <div className="modal fade" id="Quiz2"  role="dialog" aria-labelledby="myModalLabel">
	      <div className="modal-dialog" role="document">
		<div className="modal-content">
		  <div className="modal-header">
		    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		    <h4 className="modal-title" id="myModalLabel">Week 2 Quiz</h4>
		  </div>
		  <div className="modal-body">
		    <ol>
		      <h3><li>Python and JavaScript are both examples of
			<ul className="list-inline">
			  <li>a) Compiled Languages</li>
			  <li  className="bg-success">b) Interpreted Languages</li>
			</ul>
		      </li></h3>
		      <h3><li>
			The biggest advantage of interpreted languages is
			<ul className="list-inline">
			  <li>a) Speed of execution</li>
			  <li  className="bg-success">b) Speed of development</li>
			</ul>
		      </li></h3>
		      <h3><li>
			The biggest advantage of compiled languages is
			<ul className="list-inline">
			  <li  className="bg-success">a) Speed of execution</li>
			  <li>b) Speed of development</li>
			</ul>
		      </li></h3>
		      <h3><li>
			Which is the most used programming language today?
			<ul className="list-inline">
			  <li>a) Python</li>
			  <li  className="bg-success">b) JavaScript</li>
			  <li>c) C/C++</li>
			</ul>
		      </li></h3>
		      <h3><li>
			You can use Python on the client side of your web application.
			<ul className="list-inline">
			  <li>a) True</li>
			  <li  className="bg-success">b) False</li>
			</ul>
		      </li></h3>
		      <h3><li>
			Which language would you use on the server side of your application if you care about speed of development?
			<ul className="list-inline">
			  <li  className="bg-success">a) Python</li>
			  <li>b) JavaScript</li>
			  <li>c) C/C++</li>
			</ul>
		      </li></h3>
		      <h3><li>
			Which language would you use on the server side of your application if you care about speed of execution?
			<ul className="list-inline">
			  <li>a) Python</li>
			  <li>b) JavaScript</li>
			  <li  className="bg-success">c) C/C++</li>
			</ul>
		      </li></h3>
		    </ol>
		  </div>
		  <div className="modal-footer">
		    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		  </div>
		</div>
	      </div>
	    </div>

	    <div className="modal fade" id="Quiz3"  role="dialog" aria-labelledby="myModalLabel">
	      <div className="modal-dialog" role="document">
		<div className="modal-content">
		  <div className="modal-header">
		    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		    <h4 className="modal-title" id="myModalLabel">Week 3 Quiz: Intro to web development</h4>
		  </div>
		  <div className="modal-body">
		    <ol>
		      <h3><li>
			What language do we use for the structure of a web document?
			<ul className="list-inline">
			  <li className="bg-success">a) HTML</li>
			  <li >b) CSS</li>
			  <li >c) JavaScript</li>
			</ul>
		      </li></h3>
		      <h3><li>
			What language do we use for the style of a web document?
			<ul className="list-inline">
			  <li>a) HTML</li>
			  <li className="bg-success">b) CSS</li>
			  <li >c) JavaScript</li>
			</ul>
		      </li></h3>
		      <h3><li>
			What language do we use for the logic of a web document?
			<ul className="list-inline">
			  <li>a) HTML</li>
			  <li >b) CSS</li>
			  <li className="bg-success">c) JavaScript</li>
			</ul>
		      </li></h3>
		      <h3><li>
			What are the 3 required elements that every HTML document must have?
			<ul className="list-inline">
			  <li className="bg-success">a) html (document), head and body</li> <br />
			  <li>b) p, div and button</li> <br />
			  <li>c) script, link and a</li>
			</ul>
		      </li></h3>
		      <h3><li>
			You can select HTML elements in CSS and JavaScript by their
			<ul className="list-inline">
			  <li>a) type</li>
			  <li >b) id</li>
			  <li >c) class</li> <br />
			  <li className="bg-success">d) All of the above</li>
			</ul>
		      </li></h3>
		      <h3><li>
			To select an HTML element with id="thisid", which syntax would you use?
			<ul className="list-inline">
			  <li>a) .thisid</li>
			  <li className="bg-success">b) #thisid</li>
			  <li>c) thisid</li>
			</ul>
		      </li></h3>
		      <h3><li>
			To select an HTML element with class="thisclass", which syntax would you use?
			<ul className="list-inline">
			  <li className="bg-success">a) .thisclass</li>
			  <li>b) #thisclass</li>
			  <li>c) thisclass</li>
			</ul>	
		      </li></h3>
		    </ol>
		  </div>
		  <div className="modal-footer">
		    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		  </div>
		</div>
	      </div>
	    </div>
	    
	  </div>
	</div>
);
    }
  }
}

RopCS.propTypes = {
  loading: PropTypes.bool,
  syllExists: PropTypes.bool,
  syllabus: PropTypes.object
};


/* <div className="container thisweek">
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
    <li><button type="button" className="btn btn-default" data-toggle="modal" data-target="#Quiz0">Week 0 Quiz</button></li>
    <li><a href="http://slides.com/migroch/deck-1-3/fullscreen" target="_blank">Thinking Binary</a> - <a href="https://slides.com/migroch/deck-1-3/live"  target="_blank" >Live</a></li>
    <li><a href="https://youtu.be/O5nskjZ_GoI?t=148" target="_blank">Computer History</a></li>
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
    </div> */

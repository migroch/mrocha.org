// ROPCScontainer.jsx
// Container component for the ROP CS site
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="container syllabus">
	<div className="container-fluid rop-header">
	  <a href="http://www.rop.santacruz.k12.ca.us/">
	    <img className="img-responsive" src="rop_header.gif" height="90" />
	  </a>
	</div>
	<div className="container text-center">
	  <h1>Welcome to ROP Computer Science!</h1>
	  <h2><small>Miguel Rocha - mrocha@scottsvalleyusd.org</small></h2>
	</div>
	<div className="alert alert-info text-center" role="alert"><h4>This is your syllabus. It will be updated as we move on!</h4></div>

	<div className="container thisweek">
	  <h2><small>This week</small></h2>
	  <div className="panel panel-primary col-sm-4">
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
	  
	  <div className="panel panel-primary col-sm-4">
	    <div className="panel-heading">
	      <h3 className="panel-title">Tuesday</h3>
	    </div>
	    <div className="panel-body">
	      <ol>
		<li>Typing games! <a href="http://www.typinggames.zone/" target="_blank">typinggames.zone</a> <a href="http://games.sense-lang.org/EN.php" target="_blank">sense-lang.org</a>
		</li>
		<li>What is Computer Science?</li>
		<li>What jobs can you get as a Computer Scientist?</li>
		<li><a href="https://codehs.com" target="_blank">CodeHS</a></li>
	      </ol>
	    </div>
	  </div>
	  
	  <div className="panel panel-primary col-sm-4">
	    <div className="panel-heading">
	      <h3 className="panel-title">Thursday</h3>
	    </div>
	    <div className="panel-body">
	      <ol>
		<li>Typing games!</li>
		<li><a href="https://codehs.com" target="_blank">CodeHS</a></li>
	      </ol>
	    </div>
	  </div>
	</div>
	
	<div className="jumbotron ">
	  <h2 className="text-center">Learning Objectives! </h2>
	  <ul>
	    <li><h3>Introduction to programming (JavaScript and Python)</h3></li>
	    <li><h3>The unix terminal and text editors</h3></li>
	    <li><h3>How the internet works</h3></li>
	    <li><h3>Graphic User Interfaces (GUIs) with web technologies (JavaScript,  HTML and CSS)</h3></li>
	    <li><h3>From websites to platform independent responsive and reactive standalone applications</h3></li>
	    <li><h3>Using Git repositories and GitHub for version control and collaborative programming</h3></li>
	    <li><h3>Programming guide lines for open source applications</h3></li>
	    <li> <h3>Data analysis and visualization (Matplotlib and D3.js)</h3></li>
	    <li><h3>Machine Intelligence - what the heck is AI?</h3></li>
	  </ul>
	  <h2 className="text-center"><small className="text-danger">More details coming soon...</small></h2>
	</div>

	
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


// RopCS.jsx
// Page component for the RopCS page
import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import RopCSNavbar from '../components/RopCSNavbar.jsx'

export default class RopCS extends React.Component {
  constructor(props) {
    super(props);
  }

  userInfo(user){
    if (user){
      return (
	<div className="container text-center alert alert-success alert-dismissible" role="alert">
	  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	  <p><strong>Hello {user.profile.First}!</strong> your current balance is: <strong>{user.profile.Robux} K</strong>  Robux</p>
	</div>
      )
    } else {
      return
    }
  }
  
  render() {
    const {user, loading, syllExists, syllabus } = this.props;
    if(loading){
      return(
	<p>loading ...</p>
      )
    }else{
      return (
	<div className="container-fluid nopadding">
	  <Helmet>
            <title>ROP Exploring Computer Science</title>
	    <meta name="description" content="Page for Miguel Rocha's  ROP Exploring Computer Science class"/>
          </Helmet>

	  <RopCSNavbar syllabus={syllabus} />

	  {this.userInfo(user)}
	  
	  <div className="container-fluid rop-header nopadding bpadding">
	    <div className="container text-center">
	      <h1 className="title">{syllabus.CourseName}</h1>
	      <h2 className="teacherInfo"><small>Miguel Rocha - mrocha@scottsvalleyusd.org - <a href="https://mrocha.org/ropcs">mrocha.org/ropcs</a></small></h2>
	    </div>
	  </div>
	  
	  <div className= "container-fluid syllabus">
	    
	    {/*<div className="alert alert-info text-center" role="alert"><h4>This is your syllabus. It will be updated as we move on! You can access it at <a href="https://mrocha.org/ropcs">mrocha.org/ropcs</a></h4></div>*/}

	    <div className="container-fluid row bpadding">

	      <div className="container-fluid col-md-6 announcements bpadding">
		<h3 className="bg-info text-center">Week 10</h3>

		<p>This week we will continue with <a href="https://www.meteor.com/" target="_blank">Meteor</a>, and also  learn about <a href="https://slides.com/migroch/deck-2-4-9-12-15-21/fullscreen" target="_blank">Databases</a> </p>
		
		<p><a href="https://www.meteor.com/tutorials/react/creating-an-app" target="_blank">Assignment 8: Todo App with Meteor and React</a></p>

		<p>Useful links for this week:</p>
		<ul>
		  <li><p><a href="https://www.meteor.com/" target="_blank">Meteor</a></p></li>
		  <li><p><a href="https://facebook.github.io/react/" target="_blank">React</a></p></li>
		  <li><p><a  href="http://cheatsheetworld.com/programming/unix-linux-cheat-sheet/" target="_blank">Unix commands cheat sheet</a></p></li>
		  <li><p><a  href="https://docs.mongodb.com/" target="_blank">MongoDB</a></p></li>
		  
		</ul>
				
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
							
		<li><h3>Graphic User Interfaces (GUIs) with web technologies (JavaScript,  HTML and CSS) - <i className="text-success">Week 4-7</i></h3></li>

		<li><h3>Data Structures  - <i className="text-success">Week 6</i></h3></li>

		<li><h3>Servers and how the internet works  - <i className="text-success">Week 7</i></h3></li>

		<li><h3>From websites to platform independent responsive and reactive standalone applications - <i className="text-warning">Week 8-10</i></h3></li>

		<li><h3>Databases - <i className="text-warning">Week 10</i></h3></li>

		<li><h3>Using Git repositories and GitHub for version control and collaborative programming - <i className="text-warning">Week 10</i></h3></li>
		
		<li><h3>Programming guide lines for open source applications - <i className="text-warning">Week 10</i></h3></li>
		
		<li> <h3>Data Analysis and Visualization (Matplotlib and D3.js) - <i className="text-danger">Week 11-12</i></h3></li>
		<li><h3>Machine Intelligence and Automation - what the heck is AI? - <i className="text-danger">Week 13</i></h3></li>
		<li><h3>Cybersecurity - <i className="text-danger">Week 14</i></h3></li>
	      </ul>
	    </div>

	    <div className="jumbotron ">
	      <h2 className="text-center">Homework</h2>
	      <p>Your weekly work is due Thursday of every week. If you are focused during class hours you may not have any homework!</p>
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

	    <div className="modal fade" id="Quiz6"  role="dialog" aria-labelledby="myModalLabel">
	      <div className="modal-dialog modal-lg" role="document">
		<div className="modal-content">
		  <div className="modal-header">
		    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		    <h4 className="modal-title" id="myModalLabel">Week 6 Quiz: Data Driven Web Development</h4>
		  </div>
		  <div className="modal-body">
		    <ol>
		      <h3><li>
			If I define the variable
			<pre><code>const list = &#91;"Coffee", "Milk", "Sugar", "Chocolate"&#93;</code></pre>
		       <code>list</code> would be an example of
			<ul className="list-inline">
			  <li>a) an object</li>
			  <li  className="bg-success">b) an array</li>
			  <li >c) a class</li>
			</ul>
		      </li></h3>
		      <h3><li>
			If <code>list</code> is defined as in Question 1 above, what would <code>list[3]</code> return?
			<ul className="list-inline">
			  <li>a) Coffee</li>
			  <li>b) Milk</li>
			  <li >c) Sugar</li>
			  <li  className="bg-success">d) Chocolate</li>
			</ul>
		      </li></h3>
		      <h3><li>
			If I define the variable
			<pre><code>person = &#123;name: "Panfilo", age: 22&#125;</code></pre>
                        <code>person</code> would be an example of
			<ul className="list-inline">
			  <li  className="bg-success">a) an object</li>
			  <li >b) an array</li>
			  <li >c) a class</li>
			</ul>
		      </li></h3>
		      <h3><li>
			If <code>person</code> is defined as in Question 3 above, what would you write in your code to get person's	name <em>Panfilo</em>
			<ul className="list-inline">
			  <li>a) <code>person&#123;name&#125;</code></li> 
			  <li>b) <code>person(name)</code></li>
			  <li  className="bg-success">c) <code>person.name</code></li>
			</ul>
		      </li></h3>
		      <h3><li>
			If you want to create multiple instances (e.g. person1, person2, person3) of the data structure <code>person</code>, the best type of data structure to use would be 
			<ul className="list-inline">
			  <li>a) an object</li>
			  <li >b) an array</li>
			  <li  className="bg-success">c) a class</li>
			</ul>
		      </li></h3>
		      <h3><li>
			What tool are we going to use in order to create HTML elements as we iterate over data structures?
			<ul className="list-inline">
			  <li  className="bg-success">a) React</li>
			  <li>b) Angular</li>
			  <li>c) SpaceBars/Blaze</li>
			</ul>
		      </li></h3>
		      <h3><li>
			The React framework   
			<ul className="list-unstyled">
			  <li  className="bg-success">a) exteds JavaScript so that we can write HTML within JavaScript</li>
			  <li>b) extends HTML so that we can use JavaScript functionality/logic within HTML</li>
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

	    <div className="modal fade" id="Quiz7"  role="dialog" aria-labelledby="myModalLabel">
	      <div className="modal-dialog modal-lg" role="document">
		<div className="modal-content">
		  <div className="modal-header">
		    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		    <h4 className="modal-title" id="myModalLabel">Week 7 Quiz: GUI Components with REACT</h4>
		  </div>
		  <div className="modal-body">
		    <ol>
		      <h3><li>
			The job of smart components is to
			<ul className="list-inline">
			  <li>a) control everthing in the App.</li>
			  <li  className="bg-success">b) manipulate and pass data to reusable components.</li>
			  <li>c) do smart decisions for the user.</li>
			</ul>
		      </li></h3>
		      <h3><li>
			The job of reusable components is to pass data to child components.
			<ul className="list-inline">
			  <li>a) True</li>
			  <li  className="bg-success">b) False</li>
			</ul>
		      </li></h3>
		      <h3><li>
			If the App component passes some data to the Category component in the following way
			<pre><code>&lt;Category cool_data=&#123;some_data&#125; /&gt;</code></pre>
                        how would you access that data from within the Category component?
			<ul className="list-inline">
			  <li  >a) by calling <code>this.props.some_data</code></li>
			  <li >b) by calling <code>this.cool_data</code></li>
			  <li  className="bg-success">c) by calling <code>this.props.cool_data</code></li>
			</ul>
		      </li></h3>
		      <h3><li>
			Why would you add a <strong className="text-primary">state</strong> to a REACT component?
			<ul className="list-inline">
			  <li  className="bg-success">a) To add reactivity to the component (i.e. to re-render the component if the state changes)</li> 
			  <li>b) To add responsiveness to the component (i.e. to adapt to the screen size/resolution)</li>
			  <li>c) Because in REACT all components must have a <strong className="text-primary">state</strong></li>
			</ul>
		      </li></h3>
		      <h3><li>
			How would you change the <strong className="text-primary">state</strong> of a REACT component?
			<ul className="list-inline">
			  <li>a) <code>this.state = new_state</code></li>
			  <li  className="bg-success">b) <code>this.setState(new_state)</code></li>
			  <li >c) <code>this.state.new_state</code></li>
			</ul>
		      </li></h3>
		      <h3><li>
			In a REACT component, <code>this.state</code> is 
			<ul className="list-inline">
			  <li >a) a variable that can have only one value</li>
			  <li>b) an array with a list of multiple values</li>
			  <li  className="bg-success">c) an object with one or more named values</li>
			</ul>
		      </li></h3>
		      <h3><li>
			<strong className="text-primary">Handlers</strong> are methods/functions that extend the <code>React.Component</code>
			class, and we can access them anywhere within a component by calling <code>this.handlerName</code> 
			<ul className="list-unstyled">
			  <li  className="bg-success">a) True</li>
			  <li>b) False</li>
			</ul>	
		      </li></h3>
		      <h3><li>
		        <strong className="text-primary">Handlers</strong> defined in a parent component can not be passed to child components.
			<ul className="list-unstyled">
			  <li >a) True</li>
			  <li  className="bg-success">b) False</li>
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

	    <div className="modal fade" id="Quiz10"  role="dialog" aria-labelledby="myModalLabel">
	      <div className="modal-dialog modal-lg" role="document">
		<div className="modal-content">
		  <div className="modal-header">
		    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		    <h4 className="modal-title" id="myModalLabel">Week 10 Quiz: The Internet, Servers and Databases</h4>
		  </div>
		  <div className="modal-body">
		    <ol>
		      <h3><li>
			Every computer connected to the internet must have a
			<ul className="list-inline">
			  <li>a) server program.</li>
			  <li>b) internet Protocol (IP) address.</li>
			  <li>c) name.</li>
			</ul>
		      </li></h3>
		      <h3><li>
			The job of a Domain Name Server (DNS) is 
			<ul className="list-unstyled">
			  <li>a) to translate domain names (such as google.com) to IP addresses. </li>
			  <li>b) to assing  domain names to people.</li>
			  <li>c) to create new domain names.</li>
			</ul>
		      </li></h3>
		      <h3><li>
			To create a web server (or HTTP server) you need special and sophisticated computers.
			<ul className="list-inline">
			  <li >a) True</li>
			  <li >b) False</li>
			</ul>
		      </li></h3>
		      <h3><li>
			What do we use Node.js for?
			<ul className="list-unstyled">
			  <li>a) To be able to run JavaScript prgrams on the server side of our applications.</li> 
			  <li>b) To create HTTP server programs that run efficiently.</li>
			  <li>c) All of the above.</li>
			</ul>
		      </li></h3>
		      <h3><li>
			To request some data from a database you need to
			<ul className="list-unstyled">
			  <li>a) submit a query to the database.</li>
			  <li >b) send an HTTP request to the database.</li>
			  <li >c) just knock on the right PORT.</li>
			</ul>
		      </li></h3>
		      <h3><li>
			The data model for Relational Databases is
			<ul className="list-inline">
			  <li >a) tables</li>
			  <li>b) &#123;key:value&#125; pairs</li>
			</ul>	
		      </li></h3>
		      <h3><li>
		        The data model for Document Databases is
			<ul className="list-inline">
			  <li >a) tables</li>
			  <li>b) &#123;key:value&#125; pairs</li>
			</ul>	
		      </li></h3>
		      <h3><li>
			Why do we call to all databases that are not Relational Databases "NoSQL Databases" ?
			<ul className="list-unstyled">
			  <li >a) Because SQL is the query language of all Relational Databases. </li>
			  <li>b)  Because the query language of Non-Relational Database is everything but SQL. </li>
			  <li>c) All of the above.</li>
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
  user: PropTypes.object,
  loading: PropTypes.bool,
  syllExists: PropTypes.bool,
  syllabus: PropTypes.object,
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

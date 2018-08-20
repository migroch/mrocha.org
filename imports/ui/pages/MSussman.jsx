// MSussman.jsx
// Page component for Maile Sussman portfolio

import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import MsNavbar from '../components/MsNavbar.jsx'

export default class MSussman extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="container-fluid nopadding">
	<Helmet>
          <title>Maile Sussman CTEP CS Portfilio</title>
	  <meta name="description" content="Page showing Maile Sussman CTEP Computer Science Portfilio" />
        </Helmet>

	<div className="container-fluid nopadding bpadding msussman-header">
	  <MsNavbar />
	  <div className="container text-center ms-header-text">
	    <h1><strong>Maile Sussman</strong></h1>
	    <h2>CTEP Exploring Computer Science Portfolio</h2>
	    <h3>Scotts Valley High School - 2018 </h3>
	  </div>
	</div>

	<div className="container-fluid text-center bpadding" id="table-contents">
	  <p><h1>Table of Contents</h1></p>
	  <ul className="list-unstyled">
	    <li><p><a href="https://drive.google.com/file/d/13fzB_BkJfN51glCg4hD13ub-F23rBPZx/view?usp=sharing" target="_blank">Job Application</a></p></li>
	    <li><p><a href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit#bookmark=id.u7nf5o7tbl0h" target="_blank">Cover Letter</a></p></li>
	    <li><p><a href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit#bookmark=id.azt6wkuhqfrc" target="_blank">Resume</a></p></li>
	    <li><p><a href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit#bookmark=id.cp45a8t6m2yd" target="_blank" >References</a></p></li>
	    <li><p><a href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit#bookmark=id.nekb2u7fx1qq"  target="_blank">Recommendation Letter</a></p></li>
	    <li><p><a href="#workexamples"  target="_blank">Work Examples</a></p></li>
	    <li><p><a href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit#bookmark=id.3vgmiyaffghd" target="_blank">Parent Review Form</a></p></li>
	  </ul>
	</div>


	<div className="container-fluid row bpadding">
	  <div className="container-fluid col-md-6 center-block">
	    <img src="MSussmanImage2.png" className="img-responsive center-block" width="60%"/>
	  </div>
	  <div className="container-fluid col-md-6">
	    <img src="MSussmanImage1.png" className="img-responsive center-block img-rounded" width="70%"/>
	  </div>
	</div>

	<div className="container-fluid row text-center bpadding" id="workexamples">
	  <p><h1>Work Examples</h1></p>

	  <div className="container-fluid col-md-4 center-block">
	    <p><h4><a href="https://meteor-react-app-sussmanm.c9users.io" target="_blank">Todo App with Meteor and REACT</a></h4></p>
	    
	    <a className="btn btn-default " role="button" data-toggle="collapse" href="#work-description1" aria-expanded="false" aria-controls="work-description1">
	      Show Description <span className="caret"></span>
	    </a>

	    <div className="collapse" id="work-description1">
	      <div className="well">
		This is a To Do list application with multi-user support created with Meteor, a tool to write JavaScript Applications.
		
		This app was created in Cloud 9, which supports hundreds of programming languages. This app was also created using React and the coding language JSX. Through this project, I learned about defining views with React components, adding CSS to improve how HTML elements are to be displayed on screen and using MongoDB. MongoDB is becoming the preferred NoSQL Database. It uses collections to identify sets of documents. Additionally, I learned how to add tasks to collections, add user accounts and wrap a blaze component in react.

		While this was the most challenging project, it was also the most informative. This assignment gave me a good insight into creating functional applications and presented me with skills that I can translate into future projects. 
	      </div>
	    </div>
	    
	    <a href="https://meteor-react-app-sussmanm.c9users.io/" target="_blank"><img src="MSussmanImage3.png" className="img-responsive center-block work-img-padding" width="100%"/></a>

	  </div>    

	  <div className="container-fluid col-md-4 center-block">

	    <p><h4><a href="https://assignment-5-cloned-sussmanm.c9users.io/" target="_blank">Data-Driven WebApp with REACT</a></h4></p>

	    <a className="btn btn-default " role="button" data-toggle="collapse" href="#work-description2" aria-expanded="false" aria-controls="work-description2">
	      Show Description <span className="caret"></span>
	    </a>

	    <div className="collapse" id="work-description2">
	      <div className="well">
		This is an application that generates a list of images of animals from a provided data structure, and separates the list by categories (reptiles, mamals and birds) based on the data.
		
		In this assignment, we used React to create HTML elements while we iterated over data structures. Whilst creating this project, I learned more about data driven web development. I was educated about JavaScript arrays, objects and classes. These are all examples of data structures that are common to all programming languages. I was also introduced to ECMAScript 2016 (ES7), which introduced the const and let variable declarations; const is used for variables that won't change through the code while let is for variables that change trhough the code. In addition, I learned about smart components; these pass data to reusable components. Component handlers and states were also included in this project.

		In this project, react let me write HTML inside JavaScript; React’s language, mixing HTML and JavaScript, is called JSX. 

	      </div>
	    </div>
	    
	    <a href="https://assignment-5-cloned-sussmanm.c9users.io/" target="_blank"><img src="MSussmanImage4.png" className="img-responsive center-block work-img-padding" width="100%" /></a>
	  </div>

	  <div className="container-fluid col-md-4 center-block">

	    <p><h4><a href="DegreesMoneyPlot.svg" target="_blank">Data Analysis with Python</a></h4></p>
	    
	    <a className="btn btn-default " role="button" data-toggle="collapse" href="#work-description3" aria-expanded="false" aria-controls="work-description3">
	      Show Description <span className="caret"></span>
	    </a>

	    <div className="collapse" id="work-description3">
	      <div className="well">
		In this assignment I learned about Data Analysis and Visualization. I learned about the three stages of data analysis; Exploration, Manipulation and Transformation, and Analytics. Analytics is the discovery, interpretation, and communication of meaningful patterns in data. 

		For this application, I used python as the coding language. I used mainly the following three libraries: Numpy, Matplotlib and Pandas. Numpy stands for Numerical Python. The most powerful feature of NumPy is n-dimensional array objects. Matplotlib is useful for plotting vast variety of graphs, starting from histograms to line plots to heat plots. Pandas was used for structured data operations and manipulations. It is extensively used for data exploration and preparation.

		Here I am showing a plot I created from a given dataset about how much degrees pay.
	      </div>
	    </div>
	    
	    <a href="DegreesMoneyPlot.svg" target="_blank"><img src="DegreesMoneyPlot.svg" className="img-responsive center-block work-img-padding" width="100%"/></a>
	  </div>
	  
	</div>
	
      </div>

    ); 
  }
  }

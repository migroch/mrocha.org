// Phys1.jsx
// Page component for the Phys1 page
import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';

export default class Phys1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { loading, syllExists, syllabus } = this.props;
    return (
      <div className="container syllabus">
	<Helmet>
          <title>{syllabus.CourseName}</title>
        </Helmet>

	<div className="container-fluid phys1-header">
	  <a href="http://www.gavilan.edu">
	    <img className=" center-block" src="Gavilan_College_Logo_Wide_300dpi.png" height="100px;"/>
	  </a>
	</div>

	<h1>{syllabus.CourseName}</h1>
	<p>{syllabus.InstructorName}</p>
	
      </div>
      );
  }
}

Phys1.propTypes = {
  loading: PropTypes.bool,
  syllExists: PropTypes.bool,
  syllabus: PropTypes.object
};

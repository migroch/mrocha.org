// MsNavbar.jsx
// Navbar component for Maile Sussman Portfolio
import React from 'react';

export default class MsNavbar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-inverse msnavbar" role="navigation">
	<div className="container-fluid js-navbar-container msnavbar-container">

	  <div className="navbar-header">
            <span>
              <a className="navbar-brand" href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit?usp=sharing" target="_blank">
		CTEP Portfolio
              </a>
            </span>
            
            <button type="button" className="navbar-toggle collapsed" id="menu-button"
                    data-toggle="collapse" data-target="#navbarlist">
              <span className="glyphicon glyphicon-menu-hamburger"></span>
            </button>
	  </div>


	  <div className="collapse navbar-collapse navbar-right" id="navbarlist">
	    <ul className="nav navbar-nav navbar-right">
	      <li><a href="#table-contents">Table of Contents</a></li>
	      <li><a href="https://drive.google.com/file/d/13fzB_BkJfN51glCg4hD13ub-F23rBPZx/view?usp=sharing" target="_blank">Job Application</a></li>
	      <li><a href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit#bookmark=id.u7nf5o7tbl0h"  target="_blank">Cover Letter</a></li>
	      <li><a href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit#bookmark=id.azt6wkuhqfrc" target="_blank">Resume</a></li>
	      <li><a href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit#bookmark=id.cp45a8t6m2yd" target="_blank" >References</a></li>
	      <li><a href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit#bookmark=id.nekb2u7fx1qq"  target="_blank">Rec. Letter</a></li>
	      <li><a href="#workexamples" >Work Examples</a></li>
	      <li><a href="https://docs.google.com/document/d/1dUOrM9Oj7Va3cRICCIjzyVDU6W4CQ5mC_FnKB-ecESg/edit#bookmark=id.3vgmiyaffghd" target="_blank">Parent Review Form</a></li>
	    </ul>
	  </div>
	  
	</div>
      </nav>

    );
  }
}

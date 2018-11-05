// LandingNav.jsx
// Navbar component for Landing Page

import React, { Component } from 'react';
import { registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import { Link } from 'react-router';

class LandingNav extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
	<a className="navbar-brand" href="#"><img className="rounded-circle mr-1" alt="M.Rocha's Gravatar" src="https://s.gravatar.com/avatar/9e1074bcebf6068571c92814a1bd686c?s=40"/> mrocha.org</a>
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  <span className="navbar-toggler-icon"></span>
	</button>

	<div className="collapse navbar-collapse" id="navbarSupportedContent">
	  <ul className="navbar-nav ml-auto ">
	    {/*About*/}
	    <li className="nav-item active">
              <a className="nav-link" href="#">About</a>
	    </li>
	    {/*Classes*/}
	    <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		Classes
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
		<a className="dropdown-item" href="/phys1">Physics 1</a>
		<a className="dropdown-item" href="/exploringcs">Exploring CS</a>
		<a className="dropdown-item" href="/astro1">Astronomy 1</a>
		<a className="dropdown-item" href="/gamedev">Game Software and Systems</a>
              </div>
	    </li>
	    {/*Publications*/}
	    <li className="nav-item">
	      <a className="nav-link" href="#">Publications</a>
	    </li>
	    {/*Software*/}
	    <li className="nav-item">
	      <a className="nav-link" href="#">Software</a>
	    </li>
	  </ul>
	</div>
      </nav>
    );
  }
}

registerComponent({ name: 'LandingNav', component: LandingNav});

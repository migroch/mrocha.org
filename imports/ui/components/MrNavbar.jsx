// MrNavbar.jsx
// Navbar component for mrocha.org
import React from 'react';

export default class MrNavbar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-default" role="navigation">
	<div className="container-fluid js-navbar-container">

	  <div className="navbar-header">
            <span>
              <a className="navbar-brand" href="/">
		mrocha.org
              </a>
            </span>
            
            <button type="button" className="navbar-toggle collapsed" id="menu-button"
                    data-toggle="collapse" data-target="#navbarlist">
              <span className="glyphicon glyphicon-menu-hamburger"></span>
            </button>
	  </div>


	  <div className="collapse navbar-collapse navbar-right" id="navbarlist">
	    <ul className="nav navbar-nav navbar-right">

              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Classes <span className="caret"></span></a>
		<ul className="dropdown-menu">
		  <li><a href="/exploringcs" id="ropcs">Exploring Computer Science</a></li>
		  <li><a href="/gamedev" id="gamedev">Game Software and Systems Dev</a></li>
		  <li><a href="/phys1" id="phys1">Physics 1</a></li>
		  <li><a href="/astro" id="astro">Astronomy</a></li>
		</ul>
              </li>
	    </ul>
	  </div>
	  
	</div>
      </nav>

    );
  }
}
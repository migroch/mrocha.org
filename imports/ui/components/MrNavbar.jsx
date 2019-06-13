// MrNavbar.jsx
// Navbar component for mrocha.org
import React from 'react';

export default class MrNavbar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
	<a className="navbar-brand" href="#">Miguel Rocha</a>
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  <span className="navbar-toggler-icon"></span>
	</button>

	<div className="collapse navbar-collapse" id="navbarSupportedContent">
	  <ul className="navbar-nav ml-auto ">
	    {/*About*/}
	    
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
	    
	    {/*Software*/}
	   
	  </ul>
	</div>
      </nav>

    );
  }
}

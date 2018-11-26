// GameDevNavbar.jsx
// Navbar component for GameDev
import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class RopCSNavbar  extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const syllabus = this.props.syllabus;
    return (
      <nav className="navbar navbar-default" role="navigation">
	<div className="container-fluid js-navbar-container">

	  <div className="navbar-header">
            <span>
              <a className="navbar-brand" href={"/"+syllabus.ShortName}>
		{syllabus.ShortName}
              </a>
            </span>
            
            <button type="button" className="navbar-toggle collapsed" id="menu-button"
                    data-toggle="collapse" data-target="#navbarlist">
              <span className="glyphicon glyphicon-menu-hamburger"></span>
            </button>
	  </div>

	  <div className="collapse navbar-collapse navbar-right" id="navbarlist">
	    <ul className="nav navbar-nav navbar-right">

	      {/*Lectures*/}
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Lectures <span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		     syllabus.Lectures.map((lecture, index)=>(
		  <li key={index}><a href={lecture.link} target="_blank"><p className="text-primary">{lecture.name}</p></a></li>
		     ))
		  }
		</ul>
              </li>


	      {/*Tutorials*/}
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tutorials <span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		  syllabus.Tutorials.map((tutorial, index)=>(
		  <li key={index}><a href={tutorial.link} target="_blank"><p className="text-primary">{tutorial.name}</p></a></li>
		  ))
		  }
		</ul>
              </li>
	      
	      {/*Quizzes
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Quizzes <span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		  syllabus.Quizzes.map((quiz)=>{
		    if (quiz.active) {
		      return (
			<li key={quiz.id} className="text-center">
		          <a href=""  data-toggle="modal" data-target={"#"+quiz.id}><p className="text-primary">{quiz.name}</p></a>
			</li>
		      )}})
		  }
		</ul>
              </li>*/}

	      {/*Assignments
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Assignments <span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		  syllabus.Assignments.map((assignment)=>(
		  <li key={assignment.id}>
		    <a href={assignment.link} target="_blank"><p className="text-primary">{"Assignment "+assignment.id+": "+assignment.shortDescription}</p></a>
		  </li>
		  ))
		  }
		</ul>
              </li>*/}

	      {/*Tools*/}
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tools<span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		  syllabus.Tools.map((tlink, index)=>(
		  <li key={index}>
		    <a href={tlink.link} target="_blank"><p className="text-primary">{tlink.name}</p></a>
		  </li>
		  ))
		  }
		</ul>
              </li>

	      {/*Useful Links*/}
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Useful Links<span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		  syllabus.Links.map((link, index)=>(
		  <li key={index}>
		    <a href={link.link} target="_blank"><p className="text-primary">{link.name}</p></a>
		  </li>
		  ))
		  }
		</ul>
              </li>


	      {/*Portfolios
              <li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Portfolios<span className="caret"></span></a>
		<ul className="dropdown-menu">
		  {
		  syllabus.Portfolios.map((link, index)=>(
		  <li key={index}>
		    <a href={link.link} target="_blank"><p className="text-primary">{link.name}</p></a>
		  </li>
		  ))
		  }
		</ul>
              </li>*/}
	      
	      <li className="navbar-text">
		<AccountsUIWrapper  />
	      </li>
	      
	      {/*<li><a href="https://docs.google.com/spreadsheets/d/1HlOVIzJSxBOpVKxs677mUnELnBJd8ic0rLoZX2U01us/edit#gid=177394119">RobuxBalances</a></li>*/}
	    </ul>

	    
	  </div>
	</div>
      </nav>

    );
  }
}

export default RopCSNavbar

// RopCSNavbar.jsx
// Navbar component for RopCS
import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class RopCSNavbar  extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const syllabus = this.props.syllabus;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
	
          <a className="navbar-brand" href={"/"+syllabus.ShortName}>
	    {syllabus.ShortName}
          </a>
                     
          <button type="button" className="navbar-toggler" id="menu-button" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" data-toggle="collapse" data-target="#navbarlist">
            <span className="navbar-toggler-icon"></span>
          </button>
	  
	 
	  <div className="collapse navbar-collapse" id="navbarlist">
	    <ul className="navbar-nav ml-auto">

	      {/*Lectures*/}
              <li className="nav-item dropdown">
		<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Lectures <span className="caret"></span></a>
		<ul className="dropdown-menu dropdown-menu-right">
		  {
		     syllabus.Lectures.map((lecture, index)=>(
		  <li key={index}><a className="dropdown-item" href={lecture.link} target="_blank"><p className="text-primary">{lecture.name}</p></a></li>
		     ))
		  }
		</ul>
              </li>
	      
	      {/*Quizzes*/}
              <li className="nav-item dropdown">
		<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Quizzes <span className="caret"></span></a>
		<ul className="dropdown-menu dropdown-menu-right">
		  {
		  syllabus.Quizzes.map((quiz)=>{
		    if (quiz.active) {
		      return (
			<li key={quiz.id} className="text-center">
		          <a className="dropdown-item" href=""  data-toggle="modal" data-target={"#"+quiz.id}><p className="text-primary">{quiz.name}</p></a>
			</li>
		      )}})
		  }
		</ul>
              </li>

	      {/*Assignments*/}
              <li className="nav-item dropdown">
		<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Assignments <span className="caret"></span></a>
		<ul className="dropdown-menu dropdown-menu-right">
		  {
		  syllabus.Assignments.map((assignment)=>(
		  <li key={assignment.id}>
		    <a className="dropdown-item" href={assignment.link} target="_blank"><p className="text-primary">{"Assignment "+assignment.id+": "+assignment.shortDescription}</p></a>
		  </li>
		  ))
		  }
		</ul>
              </li>

	      {/*Tools*/}
              <li className="nav-item dropdown">
		<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tools<span className="caret"></span></a>
		<ul className="dropdown-menu dropdown-menu-right">
		  {
		  syllabus.Tools.map((tlink, index)=>(
		  <li key={index}>
		    <a className="dropdown-item" href={tlink.link} target="_blank"><p className="text-primary">{tlink.name}</p></a>
		  </li>
		  ))
		  }
		</ul>
              </li>

	      {/*Useful Links*/}
              <li className="nav-item dropdown">
		<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Useful Links<span className="caret"></span></a>
		<ul className="dropdown-menu dropdown-menu-right">
		  {
		  syllabus.Links.map((link, index)=>(
		  <li key={index}>
		    <a className="dropdown-item" href={link.link} target="_blank"><p className="text-primary">{link.name}</p></a>
		  </li>
		  ))
		  }
		</ul>
              </li>


	      {/*Portfolios*/}
              <li className="nav-item dropdown">
		<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Portfolios<span className="caret"></span></a>
		<ul className="dropdown-menu dropdown-menu-right">
		  {
		  syllabus.Portfolios.map((link, index)=>(
		  <li key={index}>
		    <a className="dropdown-item" href={link.link} target="_blank"><p className="text-primary">{link.name}</p></a>
		  </li>
		  ))
		  }
		</ul>
              </li>
	      
	      <li className="nav-item navbar-text">
		<AccountsUIWrapper  />
	      </li>
	      
	      {/*<li><a href="https://docs.google.com/spreadsheets/d/1HlOVIzJSxBOpVKxs677mUnELnBJd8ic0rLoZX2U01us/edit#gid=177394119">RobuxBalances</a></li>*/}
	    </ul>
	  </div>
      </nav>
    );
  }
}

export default RopCSNavbar

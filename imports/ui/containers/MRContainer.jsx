// MRcontainer.jsx
// Container  component  for MR's page
import React from 'react';

export default class MRcontainer extends React.Component {
  render() {
    return (
      <div className="container">
	<h1>Welcome to Miguel Rocha's page</h1>
	<p><a href="https://www.linkedin.com/in/migroch/">My LinkedIn Profile</a></p>
	<p>More about me and my work coming soon ...</p>
	<p><a href="https://slides.com/migroch/deck-e522e5/fullscreen">Cabrillo Interview Slides</a></p>
      </div>
    );
  }
}


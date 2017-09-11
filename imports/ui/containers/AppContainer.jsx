// AppContainer.jsx
// Container  component  the App
import React from 'react';
import MrNavbar from '../components/MrNavbar.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
	<MrNavbar />
	<div id='aboutMR'>
	</div>
      </div>
    );
  }
}


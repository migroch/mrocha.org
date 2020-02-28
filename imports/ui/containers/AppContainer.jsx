// AppContainer.jsx
// Container  component  the App
import React from 'react';
import MrNavbar from '../components/MrNavbar.jsx';
import MRcontainer from './MRContainer.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
	<MrNavbar />
	<MRcontainer />
      </div>
    );
  }
}


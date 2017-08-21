// routes.js
// Handle routing
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import MRcontainer from '../../ui/containers/MRcontainer.jsx';
import RopCScontainer from '../../ui/containers/RopCScontainer.jsx';
import Phys1Container from '../../ui/containers/Phys1Container.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={AppContainer}/>
      <Route path="/ropcs" component={RopCScontainer}/>
      <Route path="/phys1" component={Phys1Container}/>
      <Route path="/mrocha" component={MRcontainer}/>
    </div>
  </Router>
);

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});

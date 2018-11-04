import React from 'react';
import { Components, replaceComponent, registerComponent } from 'meteor/vulcan:core';

const Layout = ({ children }) => (
  <div className="layout">
    <div className="LandingNav"><Components.LandingNav/></div>
    {/* <div className="main-content">{children}</div> */}
  </div>
);

replaceComponent('Layout', Layout);

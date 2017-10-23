import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import PropTypes from 'prop-types';

export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.renderWithData(Template.loginButtons, {align: this.props.align},
			     ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }
  render() {
    // Just render a placeholder container that will be filled in
    return <span ref="container" />;
  }
}

AccountsUIWrapper.propTypes = {
  align: PropTypes.string
};

AccountsUIWrapper.defaultProps = {align: 'right'};

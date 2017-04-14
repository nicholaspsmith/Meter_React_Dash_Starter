import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
 
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';

// To import a collection
// import { Collection } from '../api/collection.js';

class App extends Component {
 
  render() {
    return (
      <div className="container">
        <div className="Sidebar">
          <div className="head">
            <img src="http://placehold.it/100x100" alt="Logo"/>
          </div>
          <div className="body"></div>
        </div>
        <div className="Header">
          <AccountsUIWrapper />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  // to check for prop of collection
  // collection: PropTypes.array.isRequired
};
 
export default createContainer(() => {
  return {
    // to use a collection as a prop (this.props.collection)
    // collection: Collection.find({}).fetch(),
    currentUser: Meteor.user(),
  };
}, App);
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
 
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';

// To import a collection
import { Collection } from '../api/collection.js';

class Home extends Component {
  render() {
    return (
      <div className="page-container">
        You are Home
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div className="page-container">
        This is the about page...
      </div>
    )
  }
}


class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="container">
          <Sidebar />
          <div className="Header">
            <AccountsUIWrapper />
          </div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  // to check for prop of collection
  // collection: PropTypes.array.isRequired
};
 
export default createContainer(() => {
  // To subscribe to your collection
  // Meteor.subscribe('collection');

  return {
    // to use a collection as a prop (this.props.collection)
    // collection: Collection.find({}).fetch(),
    currentUser: Meteor.user(),
  };
}, App);
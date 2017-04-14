import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.dateChanged = this.dateChanged.bind(this)

    this.state = {
      date: moment()
    }
  }

  dateChanged(date) {
    debugger
    this.setState({ date })
  }

  render() {
    const path = window.location.pathname
    
    let dashboard, about = '';
    switch (path) {
      case '/' :
        dashboard = 'current';
        break;
      case '/about':
        about = 'current';
        break;
      default:
        break;
    }
    return (
    <div className="Sidebar">
      <div className="head">
        <img src="http://placehold.it/70x70" alt="Logo"/>
        <DatePicker
          selected={this.state.date}
          onChange={this.dateChanged}
        />
      </div>
      <div className="body">
        <ul>
          <li>
            <Link to="/" className={dashboard}>
              <i className="fa fa-dashboard"></i>
              <span className="link-title">Dashboard</span>
              <span className="notification-bubble">3</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className={about}>
              <i className="fa fa-list"></i>
              <span className="link-title">About</span>
              <span className="notification-bubble"></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    )
  }
}

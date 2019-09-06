import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreatePrayerRequest from "./components/create-prayer-request.component";
import EditPrayerRequest from "./components/edit-prayer-request-list.component";
import PrayerRequestList from "./components/prayer-requests-list.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logo} width="30" height="30" alt="Church Sign Up" />
            </a>
            <Link to="/" className="navbar-brand"> Church Sign Up</Link>
            <div className="collpase nav-collpase">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link"> Prayer Requests</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link"> Create Prayer Request</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/edit" className="nav-link"> Edit Prayer Request</Link>
                </li>

              </ul>
            </div>
          </nav>

          <Route path="/" exact component={PrayerRequestList} />
          <Route path="/edit" component={EditPrayerRequest} />
          <Route path="/create" component={CreatePrayerRequest} />
        </div>

      </Router>
    );
  }
}
export default App;

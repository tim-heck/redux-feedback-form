import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feelings from '../Feelings/Feelings';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  // startSurvey = () => {
  //   this.history.props.push('/feedback/feelings');
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <Link to="/feedback/feelings">Start Survey</Link>
          {/* <button onClick={this.startSurvey}>Start Survey</button> */}
          <Route exact path='/feedback/feelings' component={Feelings} />
          <br/>
        </div>
      </Router>
    );
  }
}

export default connect()(App);

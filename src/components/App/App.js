import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Feelings from '../Feelings/Feelings';
import Feedback from '../Feedback/Feedback';
import Understanding from '../Understanding/Understanding';
import StartButton from '../StartButton/StartButton';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <Route exact path="/" component={StartButton} />
          <Route exact path="/feedback/feelings" component={Feelings} />
          <Route exact path="/feedback/understanding" component={Understanding} />

          <Route path="/feedback" component={Feedback} />
          <br/>
        </div>
      </Router>
    );
  }
}

export default connect()(App);

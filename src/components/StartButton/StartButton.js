import React, { Component } from 'react';
import { connect } from 'react-redux';

class StartButton extends Component {

    startSurvey = () => {
        this.props.history.push('/feedback/feelings');
    }

    render() {
        return (
            <button onClick={this.startSurvey}>Start Survey</button>
        );
    }
}

export default connect()(StartButton);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {

    redoSurvey = () => {
        this.props.history.push('/feedback/feelings');
    }

    render() {
        return (
            <>
                <h2>Thank You</h2>
                <button onClick={this.redoSurvey}>Leave New Feedback</button>
            </>
        );
    }
}

export default connect()(ThankYou);

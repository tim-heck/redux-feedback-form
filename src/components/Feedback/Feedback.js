import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feedback extends Component {

    submitButton = () => {
        let formChecks = this.props.reduxStore.inputsIn;
        if (formChecks.feelings && formChecks.understanding && formChecks.support && formChecks.comments) {
            return (
                <button>SUBMIT</button>
            );
        } else {
            return (
                <button disabled>SUBMIT</button>
            );
        }
    }

    render() {
        return (
            <>
                <h2>Review Your Feedback</h2>
                <ul>
                    <li>Feelings: {this.props.reduxStore.formInput.feelings}</li>
                    <li>Understanding: {this.props.reduxStore.formInput.understanding}</li>
                    <li>Support: {this.props.reduxStore.formInput.support}</li>
                    <li>Comments: {this.props.reduxStore.formInput.comments}</li>
                </ul>
                {this.submitButton()}
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(stateToProps)(Feedback);
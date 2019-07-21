import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Feedback extends Component {

    state = {
        feeling: this.props.reduxStore.formInput.feelings,
        understanding: this.props.reduxStore.formInput.understanding,
        support: this.props.reduxStore.formInput.support,
        comments: this.props.reduxStore.formInput.comments
    }

    /**
     * Method that sets the local state with the values stored in the reducer
     * sends a post request to the server with that information
     */
    handleSubmit = () => {
        Axios.post('/feedback-info', this.state).then(response => {
            console.log(response);
            this.props.history.push('/thank-you');
        }).catch(err => {
            console.log(err);
        })
    }

    /**
     * Method that conditionally rendors the submit button based on if
     * each of the forms have been submitted
     */
    submitButton = () => {
        let formChecks = this.props.reduxStore.inputsIn;
        if (formChecks.feelings && formChecks.understanding && formChecks.support && formChecks.comments) {
            return (
                <button onClick={() => this.handleSubmit()}>SUBMIT</button>
            );
        } else {
            return (
                <button disabled>SUBMIT</button>
            );
        }
    }

    render() {
        console.log(this.state);
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
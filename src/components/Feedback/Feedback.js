import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Feedback extends Component {

    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ''
    }

    submitButton = () => {
        let formChecks = this.props.reduxStore.inputsIn;
        if (formChecks.feelings && formChecks.understanding && formChecks.support && formChecks.comments) {
            return (
                <button onClick={(event) => this.handleSubmit(event)}>SUBMIT</button>
            );
        } else {
            return (
                <button disabled>SUBMIT</button>
            );
        }
    }

    handleSubmit = () => {
        this.setState({
            feeling: this.props.reduxStore.formInput.feelings,
            understanding: this.props.reduxStore.formInput.understanding,
            support: this.props.reduxStore.formInput.support,
            comments: this.props.reduxStore.formInput.comments
        });
        Axios.post('/feedback-info', this.state).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
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
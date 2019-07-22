import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: 0
    }

    /**
     * Method that updates the local state as the user enters
     * information into the input
     */
    handleChangeFor = (event, propName) => {
        this.setState({
            [propName]: event.target.value
        })
    }

    /**
     * Method for dispatching the local states value to the index.js to be
     * stored in a reducer in the reduxStore
     * Also updates the check for if the user has filled out the support form
     */
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.support });
        this.props.dispatch({ type: 'CHECK_SUPPORT', payload: true });
        this.props.history.push('/feedback/comments');
    }

    render() {
        return (
            <>
                <h2>How well are you being supported?</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="number" placeholder="Support?"
                        value={this.state.support} onChange={(event) => this.handleChangeFor(event, 'support')} />
                    <button type="submit">NEXT</button>
                </form>
            </>
        );
    }
}

export default connect()(Support);
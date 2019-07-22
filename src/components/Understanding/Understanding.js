import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: 0
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
    * Also updates the check for if the user has filled out the understanding form
    */
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding });
        this.props.dispatch({ type: 'CHECK_UNDERSTANDING', payload: true });
        this.props.history.push('/feedback/support');
    }

    render() {
        return (
            <>
                <h2>How well are you understanding the content?</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="number" placeholder="Understanding?"
                        value={this.state.understanding} onChange={(event) => this.handleChangeFor(event, 'understanding')} />
                    <button type="submit">NEXT</button>
                </form>
            </>
        );
    }
}

export default connect()(Understanding);
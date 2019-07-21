import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {

    state = {
        feelings: 0
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
    * Also updates the check for if the user has filled out the feelings form
    */
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state.feelings });
        this.props.dispatch({ type: 'CHECK_FEELINGS', payload: true });
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <>
                <h2>How are you feeling today?</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="number" placeholder="Feeling?"
                        value={this.state.feelings} onChange={(event) => this.handleChangeFor(event, 'feelings')} />
                    <button type="submit">NEXT</button>
                </form>
            </>
        );
    }
}

export default connect()(Feelings);
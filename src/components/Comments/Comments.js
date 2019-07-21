import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
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
    * Also updates the check for if the user has filled out the comments form
    */
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments });
        this.props.dispatch({ type: 'CHECK_COMMENTS', payload: true });
        this.props.history.push('/feedback');
    }

    render() {
        return (
            <>
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" placeholder="Comments"
                        value={this.state.comments} onChange={(event) => this.handleChangeFor(event, 'comments')} />
                    <button type="submit">NEXT</button>
                </form>
            </>
        );
    }
}

export default connect()(Comments);
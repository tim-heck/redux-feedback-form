import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: 0
    }

    handleChangeFor = (event, propName) => {
        this.setState({
            [propName]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.support })
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
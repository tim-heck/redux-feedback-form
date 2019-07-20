import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: 0
    }

    handleChangeFor = (event, propName) => {
        this.setState({
            [propName]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding })
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
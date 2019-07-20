import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feelings extends Component {

    state = {
        feelings: 0
    }

    handleChangeFor = (event, propName) => {
        this.setState({
            [propName]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'SET_FEELINGS', payload: this.state.feelings})
        this.props.history.push('/feedback/understanding');
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
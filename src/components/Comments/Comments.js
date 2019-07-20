import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleChangeFor = (event, propName) => {
        this.setState({
            [propName]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments })
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
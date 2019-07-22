import React, { Component } from 'react';
import { connect } from 'react-redux';

// styling
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        margin: theme.spacing.unit,
        width: 200,
    },
})

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
        const { classes } = this.props;
        return (
            <>
                <h2>How are you feeling today?</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    {/* <input type="number" placeholder="Feeling?"
                        value={this.state.feelings} onChange={(event) => this.handleChangeFor(event, 'feelings')} /> */}
                    <TextField
                        required
                        id="standard-name"
                        label="Feeling?"
                        onChange={(event) => this.handleChangeFor(event, 'feelings')}
                        margin="normal"
                        value={this.state.feelings}
                        className={classes.textField}
                    />
                    {/* <button type="submit">NEXT</button> */}
                    <Button variant="contained" type="submit" className={classes.button}>
                        NEXT
                    </Button>
                </form>
            </>
        );
    }
}

export default withStyles(styles)(connect()(Feelings));
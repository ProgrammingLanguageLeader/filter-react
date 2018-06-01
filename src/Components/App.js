import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Filter, Items } from './Layouts';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 12,
  },
  items: {
    minHeight: '100vh',
  },
  filter: {
    minHeight: '100vh',
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={9} className={classes.items}>
            <Items />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.filter}>
            <Filter />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);

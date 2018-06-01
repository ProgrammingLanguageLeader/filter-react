import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: theme.spacing.unit,
  }),
});

class Items extends Component {
  state = {
    data: [
      {
        name: 'Макдак',
        photo: '',
        type: 'Фастфуд',
        kitchen: 'Европейская',
        address: 'ул. Пушкина, дом Колотушкина 1',
        timeStart: '09:00',
        timeEnd: '19:00',
      },
      {
        name: 'Макдак',
        photo: '',
        type: 'Фастфуд',
        kitchen: 'Европейская',
        address: 'ул. Пушкина, дом Колотушкина 2',
        timeStart: '09:00',
        timeEnd: '19:00',
      },
      {
        name: 'Макдак',
        photo: '',
        type: 'Фастфуд',
        kitchen: 'Европейская',
        address: 'ул. Пушкина, дом Колотушкина 3',
        timeStart: '09:00',
        timeEnd: '19:00',
      },
    ]
  }
  render() {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.state.data.map(restaurant => (
            <Grid item xs={12} sm={6} key={restaurant.name}>
              <Paper className={classes.paper}>
                <Typography variant="headline" component="h3">
                  {restaurant.name}
                </Typography>
                <Typography component="p">
                  {restaurant.type}
                </Typography>
                <Typography component="p">
                  {restaurant.address}
                </Typography>
                <Typography component="p">
                  {restaurant.timeStart} - {restaurant.timeEnd}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Items);
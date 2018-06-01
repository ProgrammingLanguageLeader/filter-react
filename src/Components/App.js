import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Filter, Items } from './Layouts';
import { fetchStoreData } from '../API'

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
  constructor(props) {
    super(props);
    this.state = {
      uploaded: false,
      filterData: {},
      stores: [],
    };

    this.loadStores = this.loadStores.bind(this);
    this.updateFilterData = this.updateFilterData.bind(this); 
  }

  componentDidMount() {
    // TODO: get rid of fake data
    const data = [
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
    ];
    this.setState({
      stores: data,
    });
  }

  async updateFilterData(data) {
    this.setState({
      filterData: data,
    });
    await this.loadStores();
  }

  async loadStores() {
    this.setState({
      uploaded: false
    })
    const newStores = await fetchStoreData(this.state.filterData);
    this.setState({
        uploaded: true,
        stores: this.state.stores.concat(newStores),
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={9} className={classes.items}>
            <Items data={this.state.stores} />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.filter}>
            <Filter updateData={this.updateFilterData} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);

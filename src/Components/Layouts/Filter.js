import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import {
  FormControl, InputLabel, Select, MenuItem, Input, Checkbox, ListItemText,
  Divider, Typography, FormGroup, FormControlLabel, withStyles
} from '@material-ui/core';

const styles = theme => ({
  formControl: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  typography: {
    marginTop: theme.spacing.unit,
  }
});

const metroStationList = [
  'Арбатская',
  'Славянский бульвар',
  'Серпуховская',
  'Киевская',
];

const storeTypeList = [
  'Заведение быстрого питания',
  'Кафе',
  'Ресторан',
];

const kitchenTypeList = [
  'Итальянская',
  'Кавказская',
  'Мексиканская',
  'Французская',
  'Азиатская',
]

function TextMaskPrice(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={createNumberMask({
        prefix: '₽ ',
        suffix: ''
      })}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station: '',
      type: '',
      kitchen: [],
      alcohol: false,
      hookah: false,
      priceStart: '0',
      priceEnd: '10000',
      timeStart: '09:00',
      timeEnd: '20:00',
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleKitchenChange = this.handleKitchenChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.updateData(this.state);
  };

  handleKitchenChange = event => {
    this.setState({ kitchen: event.target.value });
    this.props.updateData(this.state);
  };

  handleCheckboxChange = event => {
    this.setState({ [event.target.name]: event.target.checked });
    this.props.updateData(this.state);
  }

  render() {
    const { classes } = this.props;

    return(      
      <form autoComplete="off">
        <Typography variant="title">
          Расположение и тип заведения
        </Typography>
        <Divider />
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="station">Станция метро</InputLabel>
          <Select
            value={this.state.station}
            onChange={this.handleSelectChange}
            inputProps={{
              name: 'station',
              id: 'station',
            }}
          >
            <MenuItem key="" value="">
              <em>Не выбрано</em>
            </MenuItem>
            {metroStationList.map(station => (
              <MenuItem key={station} value={station}>
                {station}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="type">Тип заведения</InputLabel>
          <Select
            value={this.state.type}
            onChange={this.handleSelectChange}
            inputProps={{
              name: 'type',
              id: 'type',
            }}
          >
            <MenuItem value="">
              <em>Не выбрано</em>
            </MenuItem>
            {storeTypeList.map(storeType => (
              <MenuItem key={storeType} value={storeType}>
                {storeType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="kitchen">Кухня</InputLabel>
          <Select
            multiple
            value={this.state.kitchen}
            onChange={this.handleKitchenChange}
            input={<Input id="kitchen" />}
            renderValue={selected => selected.join(', ')}
          >
            {kitchenTypeList.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.kitchen.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography className={classes.typography} variant="title">
          Алкоголь и кальян
        </Typography>
        <Divider />
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.alcohol}
                  onChange={this.handleCheckboxChange}
                  inputProps={{
                    name: 'alcohol',
                    id: 'alcohol',
                  }}
                  value="alcohol"
                />
              }
              label="Алкоголь"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.hookah}
                  onChange={this.handleCheckboxChange}
                  inputProps={{
                    name: 'hookah',
                    id: 'hookah',
                  }}
                  value="hookah"
                />
              }
              label="Кальян"
            />
          </FormGroup>
        </FormControl>
        <Typography className={classes.typography} variant="title">
          Средний чек
        </Typography>
        <Divider />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="priceStart">От</InputLabel>
          <Input
            value={this.state.priceStart}
            onChange={this.handleSelectChange}
            inputProps={{
              name: 'priceStart',
              id: 'priceStart',
            }}
            inputComponent={TextMaskPrice}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="priceEnd">До</InputLabel>
          <Input
            value={this.state.priceEnd}
            onChange={this.handleSelectChange}
            inputProps={{
              name: 'priceEnd',
              id: 'priceEnd',
            }}
            inputComponent={TextMaskPrice}
          />
        </FormControl>
        <Typography className={classes.typography} variant="title">
          Часы работы
        </Typography>
        <Divider />
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="timeStart">C</InputLabel>
          <Input
            value={this.state.timeStart}
            onChange={this.handleSelectChange}
            type="time"
            inputProps={{
              name: 'timeStart',
              id: 'timeStart',
              step: 300,
            }}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="timeEnd">До</InputLabel>
          <Input
            value={this.state.timeEnd}
            onChange={this.handleSelectChange}
            type="time"
            inputProps={{
              name: 'timeEnd',
              id: 'timeEnd',
              step: 300,
            }}
          />
        </FormControl>
      </form>
    )
  }
}

export default withStyles(styles)(Filter);
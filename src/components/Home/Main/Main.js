import React, { Component } from 'react';
import './Main.css';

import Result from './../Result/Result';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masculino: true,
      peso: 60,
      idade: 18,
      medida1: 18,
      medida2: 18,
      medida3: 18,
      gorduraCorporal: 0,
      gorduraAbsoluta: 0,
      massaMagra: 0,
      pesoIdeal: 0
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: +event.target.value,
    }, this.calcAll);
  }

  handleSwitch = (event) => {
    this.setState({
      [event.target.name]: event.target.checked
    }, this.calcAll);
  }

  calcAll = () => {
    const somaDobras = this.state.medida1 + this.state.medida2 + this.state.medida3;
    const densidade = this.state.masculino ? 1.1714 - 0.0671 * Math.log10(somaDobras)
                                           : 1.1665 - 0.0706 * Math.log10(somaDobras);
    const gorduraCorporal = ((4.95 / densidade) - 4.5) * 100;
    const gorduraAbsoluta = this.calcGABS(gorduraCorporal);
    const massaMagra = this.calcMassaMagra(gorduraAbsoluta);
    const pesoIdeal = this.calcPesoIdeal(massaMagra);
    this.setState({
      gorduraCorporal,
      gorduraAbsoluta,
      massaMagra,
      pesoIdeal
     });
    console.log('gorduraCorporal: ', gorduraCorporal);
    console.log('gordura absoluta: ', gorduraAbsoluta);
    console.log('massaMagra: ', massaMagra);
    console.log('pesoIdeal: ', pesoIdeal);
    return gorduraCorporal;
  }

  calcGABS = (gorduraCorporal) => {
    const gorduraAbsoluta = this.state.peso * (gorduraCorporal / 100);
    return gorduraAbsoluta;
  }

  calcMassaMagra = (gorduraAbsoluta) => {
    const massaMagra = this.state.peso - gorduraAbsoluta;
    return massaMagra;
  }

  calcPesoIdeal = (massaMagra) => {
    const pesoIdeal = this.state.masculino ? (massaMagra / 0.85) : (massaMagra / 0.75);
    return pesoIdeal;
  }

  render() {
    return (
      <form className='Form'>
        <div className='container'>
          <FormControlLabel
            className='Input'
            label="Masculino"
            control={
              <Switch
                checked={this.state.masculino}
                onChange={this.handleSwitch}
                name='masculino'
                color="primary"
              />
          }/>
          <TextField
            className='Input'
            type='number'
            name='idade'
            label='Idade'
            value={this.state.idade}
            onChange={this.handleChange}
          />
          <TextField
            className='Input'
            type='number'
            name='peso'
            label='Peso'
            value={this.state.peso}
            onChange={this.handleChange}
          />
          <TextField
            className='Input'
            type='number'
            name='medida1'
            label='Medida 1'
            value={this.state.medida1}
            onChange={this.handleChange}
          />
          <TextField
            className='Input'
            type='number'
            name='medida2'
            label='Medida 2'
            value={this.state.medida2}
            onChange={this.handleChange}
          />
          <TextField
            className='Input'
            type='number'
            name='medida3'
            label='Medida 3'
            value={this.state.medida3}
            onChange={this.handleChange}
          />
        </div>
        <div className='container'>
          <Result title={'Gordura corporal'} value={this.state.gorduraCorporal} variant='%' />
          <Result title={'Gordura absoluta'} value={this.state.gorduraAbsoluta} variant=' Kg' />
          <Result title={'Massa magra'} value={this.state.massaMagra} variant=' Kg' />
          <Result title={'Peso ideal'} value={this.state.pesoIdeal} variant=' Kg' />
        </div>
      </form>
    );
  }

}

export default Main;

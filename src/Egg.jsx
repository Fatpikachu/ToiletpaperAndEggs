import React, { Component } from 'react';
import Slider from './Slider';
import Eggpic from './egg.png';
import AdvancedEggOpt from './AdvancedEggsOpt';

class Egg extends Component {
  constructor() {
    super();
    this.state = {
      eggs: 12,
      consumePerDay: 2,
      chickens: 0,
      laidPerDay: 0,
    };
  }



  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
    let {eggs, consumePerDay, chickens, laidPerDay} = this.state;
    this.props.calculateEggs(eggs, consumePerDay, chickens, laidPerDay)
    }
  }
  
  componentDidMount() {
    let {eggs, consumePerDay, chickens, laidPerDay} = this.state;
    this.props.calculateEggs(eggs, consumePerDay, chickens, laidPerDay)
  }

  handleChange = (event, name, add, min, max) => {
    if(add){
      let num = Number(this.state[name] + add);
      num = Math.min(Math.max(num, min), max)
      this.setState({[name]: Number(num)})
    } else {
      this.setState({[name]: Number(event.target.value)});
    }
  }

  toggle = () => {
    this.setState({showAdvanced: !this.state.showAdvanced})
  }
  

  render() {
    let{ eggs, consumePerDay, chickens, laidPerDay } = this.state;
    return (
      <React.Fragment>
        <div className='egg-container'>
        <div className='header'>
          {/* <img src={Eggpic}/> */}
          Eggs</div>
        <Slider min={0} max={500} 
          label={'Eggs you have now'} 
          handleChange={this.handleChange} 
          value={eggs} name={'eggs'} />
          <Slider min={0} max={100} 
          label={'Consumption per day'} 
          handleChange={this.handleChange} 
          value={consumePerDay} name={'consumePerDay'} />
          <button className='button-advanced' onClick={this.toggle}>Advanced Options</button>
          {
            this.state.showAdvanced
            ? <AdvancedEggOpt 
            chickens={{value: chickens, min: 0, max: 100, label: 'Number of chickens(livestock)' }}
            laidPerDay={{value: laidPerDay, min: 0, max: 10, label: 'Average number of eggs laid per day'}}
            // quaratine={{value: quarantine, min: 1, max: 90}}
            handleChange={this.handleChange} />
            :null
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Egg;
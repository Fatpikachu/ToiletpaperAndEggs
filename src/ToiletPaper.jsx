import React, { Component } from 'react';
import Slider from './Slider';
import TPpic from './toiletpaperpic.png';
import AdvancedTP from './AdvancedTP';

class ToiletPaper extends Component {
  constructor(props) {
    super(props);
    this.rangeSlider = React.createRef();
    this.rangeBullet = React.createRef();
    this.state = {
      rolls: 1,
      visits: 2,
      wipesPerTrip: 4,
      sheetsPerWipe: 5,
      sheetsPerRoll: 284,
      household: 1,
      quaratine: 14,
      showAdvanced: false,
    };
  }
  
  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (prevState !== this.state) {
      let {rolls, visits, wipesPerTrip, sheetsPerWipe, sheetsPerRoll, household, quaratine} = this.state;
    this.props.calculateTp(rolls, visits, wipesPerTrip, sheetsPerWipe, sheetsPerRoll, household, quaratine)
    }
  }
  
  componentDidMount() {
    let {rolls, visits, wipesPerTrip, sheetsPerWipe, sheetsPerRoll, household, quaratine} = this.state;
    this.props.calculateTp(rolls, visits, wipesPerTrip, sheetsPerWipe, sheetsPerRoll, household, quaratine)
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
    let {
    rolls,
    visits,
    wipesPerTrip,
    sheetsPerWipe,
    sheetsPerRoll,
    household,
    quaratine} = this.state;
    return (
      <div className='tp-container'>
        <div className='header'>
          {/* <img src={TPpic}/> */}
          ToiletPaper</div>
          <Slider min={0} max={100} label={'Rolls you have now'} handleChange={this.handleChange} value={rolls} name={'rolls'} />
          <Slider min={0} max={20} label={'Restroom visits per day'} handleChange={this.handleChange} value={visits} name={'visits'}/>
          <button className='button-advanced' onClick={this.toggle}>Advanced Options</button>
          {
            this.state.showAdvanced
            ? <AdvancedTP 
            wipesPerTrip={{value: wipesPerTrip, min: 1, max: 15, label: 'Wipes per trip' }}
            sheetsPerWipe={{value: sheetsPerWipe, min: 1, max: 10, label: 'Sheets per wipe'}}
            sheetsPerRoll={{value: sheetsPerRoll, min: 1, max: 500, label: 'Sheets per roll'}}
            household={{value: household, min: 1, max: 15, label: 'People in Household'}}
            // quaratine={{value: quarantine, min: 1, max: 90}}
            handleChange={this.handleChange} />
            :null
          }
      </div>
    );
  }
}

export default ToiletPaper;
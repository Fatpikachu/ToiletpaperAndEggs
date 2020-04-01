import React, { Component } from 'react';
import ToiletPaper from './ToiletPaper';
import Egg from './Egg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPooStorm, faBars} from '@fortawesome/free-solid-svg-icons';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tpResult: 0,
      eggResult: 0,
    };
  }
  calcTp = (rolls,
    visits,
    wipesPerTrip,
    sheetsPerWipe,
    sheetsPerRoll,
    household,
    quaratine) => {
      let dayUsage = visits * (wipesPerTrip * sheetsPerWipe) * household
      this.setState({tpResult: Math.floor((rolls * sheetsPerRoll)/dayUsage)});
  }

  calcEggs = (eggs, consume, chickens, laidPerDay) => {
      if((chickens*laidPerDay) >= consume){
        this.setState({eggResult: 'Infinite'});
      } else { 
      eggs = Math.floor(eggs/(consume - (chickens * laidPerDay)))
      this.setState({eggResult: eggs});
      }
  }

  render(){
    return (
    <React.Fragment>
      <div className='app-container'>
        <div className='title'>
          <div className='logo'><FontAwesomeIcon icon={faPooStorm}/>&nbsp;&nbsp;FatPikachu</div>
          <div className='left-nav'>
            <div className='left-nav-text'>Random Text Look Cool</div>
            <FontAwesomeIcon icon={faBars} />
          </div>
          How much toilet paper and eggs to survive quarantine?
          <br/><p className='sub-title'>Lets calculate it</p>
        </div>
        <div className='tp-result'>Your toilet paper supply <br /> will last you <strong>{this.state.tpResult}</strong> days</div>
        <div className='egg-result'>Your egg supply <br /> will last you <strong>{this.state.eggResult}</strong> days</div>
        <ToiletPaper calculateTp={this.calcTp} />
        <Egg calculateEggs={this.calcEggs}/>
        <div className='social-media'> Share with friends: </div>
        <div className='footer'>
          <a href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'
            target='_blank'>Learn more about COVID-19 from the CDC</a>
            <hr/>
            <p>&copy; 2020 FatPikachu. All rights reserved. </p>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default App;

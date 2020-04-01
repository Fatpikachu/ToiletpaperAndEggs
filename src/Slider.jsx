import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

class Slider extends Component {
  constructor() {
    super();
    this.range = React.createRef();
    this.rangeV = React.createRef();
  }



  render() {
    let {min, max, label, value, name} = this.props;
    const newValue = Number(
      ((value - min) * 100) / (max - min)
    )
    let newPosition = 10 - newValue * 0.2;
    return (
      <div className='slider-container'>
        <div className='label'>{label}</div>
        <button className='arrow-button' onClick={(e)=>this.props.handleChange(e, name, -1, min, max)}><FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
        <div className="range-wrap">
        <div className="range-value" id="rangeV" ref={this.rangeV}
        style={{left: `calc(${newValue}% + (${newPosition}px))`}}>
          <span>{value}</span>
        </div>
        <input id="range" ref={this.range} onChange={(e)=>this.props.handleChange(e, name)} 
          type="range" min={min} max={max} value={value} step="1"/>
        </div>
        <button className='arrow-button' onClick={(e)=>this.props.handleChange(e, name, 1, min, max)}><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
      </div>
    )
  }
}


export default Slider;
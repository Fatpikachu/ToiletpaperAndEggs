import React, { Component } from 'react';
import Slider from './Slider';

class AdvancedTP extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <div className='advanced-options'>
          {
            Object.keys(this.props).map((data) => {
              if(data === 'handleChange') return;
              let {min, max, handleChange, name, value, label} = this.props[data];
              return <Slider min={min} max={max} label={label} 
              handleChange={this.props.handleChange} 
              value={value} name={data} />
            })
          }
        </div>
      </React.Fragment>
    );
  }
}

export default AdvancedTP;
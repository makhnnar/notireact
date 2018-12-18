import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import V1 from './v1';
import V2 from './v2';
import V3 from './v3';
import V4 from './v4';
import izquierda from './izquierda.css';

class Izquierda extends Component {
  
  onClickBtn1 = ()=>{
    this.props.onChange(0);
  }

  onClickBtn2 = ()=>{
    this.props.onChange(1);
  }

  onClickBtn3 = ()=>{
    this.props.onChange(2);
  }

  onClickBtn4 = ()=>{
    this.props.onChange(3);
  }

  render() {
    return (
    	<div className="inf">
          <div onClick={this.onClickBtn1}>
            <V1/>
          </div>
    		<div onClick={this.onClickBtn2}>
          <V2/>
        </div>
    		<div onClick={this.onClickBtn3}>
          <V3/>
        </div>
    		<div onClick={this.onClickBtn4}><V4/></div>
    	</div>
    );
  }
}

export default Izquierda;
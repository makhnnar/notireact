import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import m from './m.css';

class M1 extends Component {
  render() {
    const {titulo} =this.props.noticia;
    return (
    	<div className="mm">
    		<img className="pequeña" src={logo}/>
    		<div>{titulo}</div>
    	</div>
    );
  }
}

export default M1;
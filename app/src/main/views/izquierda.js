import React, { Component } from 'react';
import V from './V';
import izquierda from './izquierda.css';

class Izquierda extends Component {

  constructor(props){
    super(props);
    this.state={
      idc:0
    }
  }

  onClickBtn = (idc)=>{
    //hacemos el menos uno para evitar que se vaya de rango
    this.props.onChange((idc-1));
  }

  render() {
    //alert(JSON.stringify(this.props.categorias));
    return (
    	<div className="inf">
        {this.props.categorias.map(
          (categoriaItem)  =>
              <V 
                categoria={categoriaItem} 
                onClick={this.onClickBtn}
              />
          )
        }
    	</div>
    );
  }
}

export default Izquierda;
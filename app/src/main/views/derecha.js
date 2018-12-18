import React, { Component } from 'react';
import M1 from './m1';
import derecha from './derecha.css';

class Derecha extends Component {

	render() {
		return (
			<div className="una">
		  		{this.props.noticias.map((titulo)  => <M1 noticia={titulo}/>)}
			</div>
		);
	}
}

export default Derecha;
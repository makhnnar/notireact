import React, { Component } from 'react';
import M from './M';
import derecha from './derecha.css';
import Detallesnoticias from './Detallesnoticias.js';

const GETDETALLE = 'http://localhost:3005/post_detalle';

class Derecha extends Component {

	constructor(props){
		super(props);
		this.state={
		    detalles:[],
		    id:0,
		    render:false,
		    deta:false,
		    id2:0
		}
  	}

  	componentWillUpdate(){
  		this.state.deta = this.props.mostrarDetalle;
  	}

	onPressItem = (idItem)=>{
		console.log('idItem: '+idItem);
 		fetch(
	      	GETDETALLE,
	      	{
		    	method: 'POST',
		    	headers:{
		    	'Content-Type': 'application/json',
		    	'Access-Control-Allow-Origin': '*'
		    	},
	        	body:JSON.stringify({
	          		id_detalle:idItem
	        	})
		    }
		).then(
			(res) => res.json()
		).then(
		    (data) => {
		        let detalles = data.data;
		        console.log(JSON.stringify(data.data));
		        console.log(' ');
		        let render = true;
		        let deta =true;
		        this.setState({detalles,render,deta});
		    }
		).catch(
			(error) => { 
		    	console.log('Error:'+error);
		    	console.log('error en mostrar detalles');
			}
		);
  	}

  	onPress = () =>{
  	
  	}

  	onChangedetalles = () => {
  		let deta=false;
  		let render = true;
  		this.setState({deta,render});
  	}
	render() {
		//alert(JSON.stringify(this.props.actualizar));
		return (
			<div className="una">
		  			{!this.state.deta&&
		  				this.props.noticias.map((noticia)  =>
		  					<div>
		  						<M 
		  							noticia={noticia} 
		  							onPress={this.onPressItem}
		  						/>
	  						</div>
	  					)
		  			}
		  			{this.state.deta&& 
		  				<Detallesnoticias 
		  					detalles={this.state.detalles}
		  					onChangedetalle={this.onChangedetalles} 
		  					actualizar={this.props.actualizar}
		  				/>
		  			}
			</div>
		);
	}
}

export default Derecha;
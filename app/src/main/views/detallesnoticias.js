import React, { Component } from 'react';

class Detallesnoticias extends Component {
	componentDidMount(){
	    fetch(
	      URL2,
	      {
	        method: 'GET',
	        headers:{
	          'Content-Type': 'application/json',
	          'Access-Control-Allow-Origin': '*'
	        },
	        body:{
	          id_noticia:idNoticia
	        }
	      }
	    )
	    .then((res) => res.json())
	    .then(
	      (data) => {
	          let detalles = data.data;
	          console.log(JSON.stringify(detalles));
	          let render = true;
	          this.setState({detalles,render});
	      }
	    )
	    .catch(
	      (error) => { 
	        console.log('Error: no muestra los detalles - '+JSON.stringify(error));;
	      }
	    );
  	}
  render() {
  	this.props.
    return (
    	<div className="">
    		<div>{titulo}</div>
    		<img className="pequeña" src={logo}/>
    		<div>{informacion}</div>
    		<div>{autor}</>
    	</div>
    );
  }
}

export default Detallesnoticias;
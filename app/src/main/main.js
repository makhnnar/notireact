import React, { Component } from 'react';
import Izquierda from './views/izquierda';
import Derecha from './views/derecha';
import main from './main.css';

const GETNOTICIAS = 'http://localhost:3005/get_noticias';
const GETCATEGORIAS = 'http://localhost:3005/get_categoria';

class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      noticias:[],
      render:false,
      categorias:[],
      id_categoria:0,
      mostrarDetalle:false
      }
  }

  componentDidMount(){
    fetch(
      GETCATEGORIAS,
      {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
    .then((res) => res.json())
    .then(
      (data) => {
        let categorias = data.data;
        console.log('DATA: '+JSON.stringify(categorias));
        this.setState({categorias});
        console.log('DATA STATE: '+JSON.stringify(this.state.categorias));
        this.getNoticias(0);
      }
    )
    .catch(
      (error) => { 
        console.log('Error:'+JSON.stringify(error));
        console.log('error en el primer endpoint');
      }
    );    
  }

  onChangeNoticia = (id_noticias) =>{
    this.getNoticias(id_noticias);
  }

  getNoticias = (id_noticias) => {
    fetch(
      GETNOTICIAS+'/'+id_noticias,
      {
        method:'GET',
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
    .then((res) => res.json())
    .then(
      (data) => {
        let noticias = data.data;
        console.log('RECIBIENDO NOTICIAS SELECCIONADAS: '+JSON.stringify(noticias));
        let render = true;
        this.setState({noticias,render});
      }
    )
    .catch(
      (error) => { 
        console.log('Error:'+JSON.stringify(error));
        console.log('error en el segundo endpoint');
      }
    );
  }

  render() {
    //alert(JSON.stringify(this.state.noticias[1].categoriaa));
    return(
    	<div className="Contenedor">	
        <div className="menu">
          <h2>Categorias</h2>
      		<Izquierda
            categorias={this.state.categorias} 
            onChange={this.onChangeNoticia}
          />
      	</div>
      	<div className="mostrar">
      		{this.state.render&&
            <Derecha
              noticias={this.state.noticias} 
              mostrarDetalle={this.state.mostrarDetalle}
            />
          }
      	</div>
      </div>
    );
  }
}

export default Main;

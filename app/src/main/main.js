import React, { Component } from 'react';
import Izquierda from './views/izquierda';
import Derecha from './views/derecha';
import main from './main.css';

const URL1 = 'http://localhost:3005/get_noticias';
const URL2 = 'http://localhost:3005/get_all_noti';

class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      noticias:[],
      id:0,
      render:false
    }
  }

  componentDidMount(){
    fetch(
      URL1,
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
          let noticias = data.data;
          console.log(JSON.stringify(noticias));
          let render = true;
          this.setState({noticias,render});
      }
    )
    .catch(
      (error) => { 
        console.log('Error:'+JSON.stringify(error));
        console.log('error en el primero');
      }
    );
  }

  onChangeNoticia = (id) =>{
    this.setState({id})
  }

  render() {
    return (
    	<div className="Contenedor">
      		
          <div className="menu">
      			<Izquierda onChange={this.onChangeNoticia}/>
      		</div>

      		<div className="mostrar">
      			{this.state.render&&
              <Derecha noticias={this.state.noticias[this.state.id]}/>
            }
      		</div>
    	
      </div>
    );
  }
}

export default Main;

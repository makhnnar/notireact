const cors = require('cors');

const express = require('express');

const bodyParser = require('body-parser');

const restApi = express();

const data = require('./data');

//restApi.use(express.json());

restApi.use(express.static('imagenes'));
restApi.use(bodyParser.json());
restApi.use(bodyParser.urlencoded({ extended: true }));

restApi.use(cors());

restApi.options('*', cors());

var server = require('http').createServer(restApi);

server.listen(3005,()=>console.log('Listening in port 3005'));

restApi.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

restApi.get('/get_noticias/:id',(req,res)=>{
  console.log(' ');
  console.log('SENDING FROM <<get_noticias>> : '+JSON.stringify(req.params.id));
  console.log('SENDING FROM <<get_noticias>> : '+JSON.stringify(data.noticias[req.params.id]));
  console.log(' ');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({
      status:'success',
      data:data.noticias[req.params.id]
  });
});

restApi.post('/post_detalle',(req,res)=>{
  console.log(' ');
  console.log('Estare recibiendo el id????: '+JSON.stringify(req.body));
  console.log(' ');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  let id_detalle = req.body.id_detalle;
  if(
    id_detalle!==null&&
    id_detalle!==undefined
  ){
    res.send({
      status:'success',
      data:data.detalles[id_detalle-1]
    });
  }else{
    res.send({status:'No Params for Query'});
  }
});

restApi.get('/get_categoria',(req,res)=>{
  console.log(' ');
  console.log('Se enviaron las categorias: '+JSON.stringify(req.body));
  console.log(' ');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({
    status:'success',
    data:data.categoria
    });
});
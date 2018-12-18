const cors = require('cors');

const express = require('express');

const restApi = express();

const data = require('./data');

restApi.use(express.json());

restApi.use(cors());

restApi.options('*', cors());

var server = require('http').createServer(restApi);

server.listen(3005,()=>console.log('Listening in port 3005'));

restApi.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

restApi.get('/get_noticias',(req,res)=>{
  console.log(' ');
  console.log('SENDING FROM <<get_noticias>> : '+JSON.stringify(data.noticias));
  console.log(' ');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({
      status:'success',
      data:data.noticias
  });
});

restApi.post('/post_all_detalles',(req,res)=>{
  console.log(' ');
  console.log('BODY <<post_all_detalles>> : '+JSON.stringify(req.body));
  console.log(' ');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  console.log('SENDING FROM <<post_all_detalles>> : '+JSON.stringify(data.building_1));
  if(
    req.body.id_detalles!==null&&
    req.body.id_detalles!==undefined
  ){
    res.send({
      status:'success',
      data:data.detalles[req.body.id_detalles-1]
    });
  }else{
    res.send({status:'No Params for Query'});
  }
});
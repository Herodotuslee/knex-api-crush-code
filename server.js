const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.use(bodyParser.json());


//GET ALL BUESE DATA
app.get('/buses',(req,res)=>{
  knex.select()
  .from('bus')
  .then((result)=>{
    res.send(result)
  })
  .catch((err) => {
      console.error(err)
    });
})

//GET UNIQUE BUS DATA
app.get('/buses/:id',(req,res)=>{
  knex.select()
  .from('bus')
  .where('id',req.params.id)
  .then((result)=>{
    res.send(result)
  })
  .catch((err) => {
    console.error(err)
  });
})


//POST A BUS
app.post('/buses', (req, res) => {
  knex('bus').insert({
      seats:req.body.seats,
      color:req.body.color,
      driver_name:req.body.driver_name
    })
    .then(()=>{
      res.send("OK!! Add one bus!!")
    }).catch((err) => {
      console.error(err)
    });
})

//POST UPDATE A BUS
app.put('/buses/:id',(req,res)=>{
  knex('bus').where('id',req.params.id).update({
    seats:req.body.seats,
    color:req.body.color,
    driver_name:req.body.driver_name
  })
  .then(()=>{
    res.send('OK!! Updated a Bus!!')
  }).catch((err) => {
    console.error(err)
  });
})

//DELETE A BUS DATA

app.delete('/buses/:id',(req,res)=>{
  knex('bus')
  .where('id',req.params.id)
  .del()
  .then(()=>{
    res.send('Deleted')
  })

})


//GET all route data
app.get('/bus_routes',(req,res)=>{
  knex.select()
  .from('bus_route')
  .then((result)=>{
    res.send(result)
  })
})


//GET a bus route by ID
app.get('/bus_routes/:id', (req, res) => {
  knex.select()
  .from('bus_route')
  .where('id', req.params.id)
  .then((result) => {
    res.send(result);
  })
})


//POST Update a bus route by json
app.post('/bus_routes',(req,res)=>{
  knex.select()
  .from('bus_route')
  .insert(
    {
    description: req.body.description,
    bus_id: req.body.bus_id
  })
  .then((result)=>{
    res.send('Added a route');
  })
})



//PUT A update route
app.put('/bus_routes/:id',(req,res)=>{
  knex('bus_route').where('id',req.params.id)
  .update({
    description:req.body.description,
    bus_id: req.body.bus_id
  })
  .then(()=>{
    res.send('OK!! Updated a Bus!!')
  })
})


//DELETE A route DATA
app.delete('/bus_routes/:id',(req,res)=>{
  knex('bus_route')
  .where('id',req.params.id)
  .del()
  .then(()=>{
    res.send('Route Deleted')
  })

})


//GET all bus stops datas
app.get('/bus_stops',(req,res)=>{
  knex.select()
  .from('bus_stop')
  .then((result)=>{
    res.send(result)
  })
})


//GET a bus stop by ID
app.get('/bus_stops/:id', (req, res) => {
  knex.select()
  .from('bus_stop')
  .where('id', req.params.id)
  .then((result) => {
    res.send(result);
  })
})



//POST Update a bus stop by json
app.post('/bus_stops',(req,res)=>{
  knex.select()
  .from('bus_stop')
  .insert(
    {
    street: req.body.street,

  })
  .then((result)=>{
    res.send('Added a bus stop');
  })
})



//PUT update a bus stop
app.put('/bus_stops/:id',(req,res)=>{
  knex('bus_stop')
  .where('id',req.params.id)
  .update({
    street:req.body.street
  })
  .then(()=>{
    res.send('OK!! Updated a Bus stop!!')
  })
})


//DELETE a bust stop
app.delete('/bus_stops/:id',(req,res)=>{
  knex('bus_stop')
  .where('id',req.params.id)
  .del()
  .then(()=>{
    res.send('Bus Stop Deleted')
  })
})

//MIDDLEWARE 404
app.use((req, res)=>{
  res.sendStatus(404);
})


app.listen(port, function() {
  console.log('Listening on', port);
});

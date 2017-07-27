const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');

var db = mongojs('mongodb://yurei:Master123@ds121192.mlab.com:21192/ade',['personas'])

// GET ALL Personas
router.get('/personas', (req, res, next) => {
  db.personas.find(function(err, personas){
    if(err){
      res.send(err);
    }
    res.json(personas);
  });
});

// Save Persona
router.post('/persona', (req, res, next) => {
  var persona = req.body;
  if(!persona.name && !(persona.email)){
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  }else {
    db.personas.save(persona, function(err, persona) {
      if(err){
        res.send(err);
      }
      res.json(persona);
    });
  }
});

// Update Persona
router.put('/persona/:id', (req, res, next) => {
  var persona = req.body;
  var updPersona = persona;
  delete updPersona._id;
  // updPersona = {
  //   name : persona.name,
  //   email : persona.email
  // }

  if(!updPersona){
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  }else {
    db.personas.update({ _id: mongojs.ObjectId(req.params.id)}, updPersona, {}, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(persona);
    });
  }
});


// GET ALL Tasks
router.get('/tasks', (req, res, next) => {
  db.tasks.find(function(err, tasks){
    if(err){
      res.send(err);
    }
    res.json(tasks);
  });
});

// Get Single Taks
router.get('/task/:id', (req, res, next) => {
  db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id)}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  });
});

// Save task
router.post('/task', (req, res, next) => {
  var task = req.body;
  if(!task.title || !(task.isDone + '')){
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  }else {
    db.tasks.save(task, function(err, task) {
      if(err){
        res.send(err);
      }
      res.json(task);
    });
  }
});

// Delete task
router.delete('/task/:id', (req, res, next) => {
  db.tasks.remove({ _id: mongojs.ObjectId(req.params.id)}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  });
});

// Update task
router.put('/task/:id', (req, res, next) => {
  var task = req.body;
  var updTask = {};

  if(task.isDone) {
    updTask.isDone = task.isDone;
  }
  if(task.title) {
    updTask.title = task.title;
  }

  if(!updTask){
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  }else {
    db.tasks.update({ _id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(task);
    });
  }
});


module.exports = router;

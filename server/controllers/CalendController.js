var Event = require('../models/eventSchema.js');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var config = require('../config/config');


exports.submitReq = function(req, res) {
    console.log('bruuu');
    var event = new Event ({
      title : req.body.title,
      date : req.body.date,
      startTime : req.body.startTime,
      endTime : req.body.endTime,
      description: req.body.description
    });
    
    event.save(function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        console.log('event saved');
        //res.json(user);
        res.status(201).json({ success: true });
        }
    });
  };

  exports.listEvents = function(req, res) {
   
    //editing find all function from bootcamp 3 to sort, empty brackets returns all users
    // .sort() returns alphabetically by default
    Event.find().sort('date').then(events => {
      res.send(events);
    }).catch(err => {
      res.status(400).send(err); 
      console.log('error: ' + err); 
    }
    )
  };

  exports.deleteEvent = function(req, res) {
    // Gets user from request variable, then removes it and puts it in the response variable. 
    var event = req.event; 
    
    event.remove(err=>{
      if(err) throw err; 
      res.json(event); 
      console.log('event deleted');
    })
  };

exports.findEventId = function(req, res, next, id) {

  Event.findById(id).exec(function(err, event) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.event = event;
      next();
    }
  });
};

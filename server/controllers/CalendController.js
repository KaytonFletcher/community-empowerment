var Event = require('../models/eventSchema.js');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var config = require('../config/config');


exports.register = function(req, res) {
  
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

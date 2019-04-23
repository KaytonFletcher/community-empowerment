var Event = require('../models/eventSchema.js');
var User = require('../models/userSchema.js')
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var config = require('../config/config');
const { google } = require('googleapis')
const key = require('../config/calendarAuth.json')
const scopes = 'https://www.googleapis.com/auth/calendar'
const jot = new google.auth.JWT(key.client_email, null, key.private_key, scopes)
const view_id = 'XXXXXXX'

process.env.GOOGLE_APPLICATION_CREDENTIALS = '../config/calendarAuth.json'



exports.submitReq = function(req, res) {
    console.log('bruuu');
    var event = new Event ({
      title : req.body.title,
      startTime : req.body.startTime,
      endTime : req.body.endTime,
      description: req.body.description,
      user: req.body.user
    });
    
    event.save(function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        User.findByIdAndUpdate(event.user,
          { "$push": { "eventReqs": event._id } },
          { "new": true, "upsert": true },
          function (err) {
              if (err) throw err;
          });
        console.log('event saved');
        //res.json(user);
        res.status(201).json({ success: true });
        }
    });
  };

  exports.listEvents = function(req, res) {
   
    //editing find all function from bootcamp 3 to sort, empty brackets returns all users
    // .sort() returns alphabetically by default
    Event.find().sort('date').populate('user').then(events => {
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
    var userId = event.user;

    User.findByIdAndUpdate(userId).exec(function(err, user){
      if(err) {
        res.status(400).send(err);
      } else {
        console.log("Removing reference to event in user");
        user.eventReqs.remove(event._id); 
      }
    });
    
    event.remove(err=>{
      if(err) throw err; 
      res.json(event); 
      console.log('event deleted');
    })
  };

exports.findEventId = function(req, res, next, id) {

  Event.findById(id).populate('user').exec(function(err, event) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.event = event;
      next();
    }
  });
};

exports.addEvent = function(req, res) {
  var calendar = google.calendar('v3');

  jot.authorize(function (err, tokens) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Successfully connected!");
    }
   });

  var eventToAdd = {
    'summary': req.event.title,
    'location': 'Gainesville, FL',
    'description': req.event.description,
    'start': {
      'dateTime': req.event.startTime,
      'timeZone': 'America/New_York',
    },
    'end': {
      'dateTime': req.event.endTime,
      'timeZone': 'America/New_York',
    },
  };
    
    calendar.events.insert({
      auth: jot,
      calendarId: 'spoderdev@gmail.com',
      resource: eventToAdd,
    }, function(err, event) {
      if (err) {
        console.log('There was an error contacting the Calendar service: ' + err);
        return;
      }
      console.log('Event created: %s', event.htmlLink);
    });
  }

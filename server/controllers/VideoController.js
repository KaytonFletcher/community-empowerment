var Video = require('../models/videoSchema.js');

exports.add = function(req, res) {

  console.log(req.body.tags);
  var parsedTags = [];
  req.body.tags.forEach(element => {
    parsedTags.push(element.text);
  });
  var video = new Video ({
    title : req.body.title,
    description: req.body.description,
    url : req.body.url,
    tags: parsedTags
  });
  
  video.save(function(err) {
    if(err) {
      console.log("SAVE ERROR" + err);
      return res.status(400).send(err.name);
      
    } else {
      //here is how you return data, can be accessed in authController front end with res.data.auth, res.data.token
      return res.status(201).send(video);
      }
  });
}

exports.list = function(req, res) {
    Video.find().sort('title').then(videos => {
      res.send(videos);
    }).catch(err => {
      res.status(400).send(err); 
      console.log('error: ' + err); 
    }
    )
  };

exports.delete = function(req, res) {
      // Gets video from request variable, then removes it and puts it in the response variable. 
      var video = req.video; 
      video.remove(err=>{
        if(err) throw err; 
        res.json(video); 
      })
    };

exports.findVideoById = function(req, res, next, id) {

  Video.findById(id).exec(function(err, video) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.video = video;
      next();
    }
  });
};


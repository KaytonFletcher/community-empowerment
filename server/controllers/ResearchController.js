var Video = require('../models/researchSchema.js');

exports.add = function(req, res) {

  var research = new Research ({
    title : req.body.title,
    description: req.body.description,
    url : req.body.url
  });
  
  research.save(function(err) {
    if(err) {
      console.log("SAVE ERROR" + err);
      return res.status(400).send(err.name);
      
    } else {
      //here is how you return data, can be accessed in authController front end with res.data.auth, res.data.token
      return res.status(201).send(research);
      }
  });
}

exports.list = function(req, res) {
    Research.find().sort('title').then(researches => {
      res.send(researches);
    }).catch(err => {
      res.status(400).send(err); 
      console.log('error: ' + err); 
    }
    )
  };

exports.delete = function(req, res) {
      // Gets research from request variable, then removes it and puts it in the response variable. 
      var research = req.research; 
      research.remove(err=>{
        if(err) throw err; 
        res.json(research); 
        console.log('research deleted');
      })
    };

exports.findResearchById = function(req, res, next, id) {

  Research.findById(id).exec(function(err, research) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.research = research;
      next();
    }
  });
};


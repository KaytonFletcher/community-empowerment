//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    //same database as for bootcamp 3
    uri: 'mongodb://yeet:yote420@ds163053.mlab.com:63053/uf_listings', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT || 8080
};
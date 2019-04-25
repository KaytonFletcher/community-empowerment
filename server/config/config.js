module.exports = {
    db: {
        uri: 'mongodb://michaelMorris:Spoder#2019@ds157735.mlab.com:57735/spoder',
    } ,
    port: process.env.PORT || 8080 ,
    secret: 'this is the unique spoder key, must protec', 
    calendarKey: 'AIzaSyCUCBUEbfvOFZ_k3VbNOWfA8B32Onx-nrg'
}
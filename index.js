var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/reminders');

var db = mongoose.connection;

// will console.log an error if db cannot connect to MongoDB
db.on('error', function(err){
  console.log(err);
});
// will console.log "database has been connected" if successfully connects
db.once('open', function() {
  console.log("database has been connected!");

  // INSERT CODE HERE!

});

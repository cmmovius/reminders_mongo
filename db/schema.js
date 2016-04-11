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

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var ReminderSchema = new Schema({
  body: String
});

var AuthorSchema = new Schema({
  name: String,
  reminders: [ReminderSchema]
});

var ReminderModel = mongoose.model("Reminder", ReminderSchema);
var AuthorModel = mongoose.model("Author", AuthorSchema);

module.exports = {
  ReminderModel: ReminderModel,
  AuthorModel: AuthorModel
}

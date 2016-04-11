var Schema = require("../db/schema.js");

var ReminderModel = Schema.ReminderModel;
var AuthorModel = Schema.AuthorModel;

var authorsController = {
  index: function(){
    AuthorModel.find({}, function(err, authors){
      if (err) {
        console.log(err);
      } else {
        console.log(authors);
      }
    });
  },
  show: function(req){
    AuthorModel.findOne({name: req.name}, function(err, author){
      if (err) {
        console.log(err);
      } else {
        console.log(author);
      }
    });
  }
};

authorsController.index();
authorsController.show({name: "Evan"});

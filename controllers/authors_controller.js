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
  },
  update: function(req, update){
    AuthorModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, author){
      if (err) {
        console.log(err);
      } else {
        console.log(author);
      }
    });
  },
  destroy: function(req){
    AuthorModel.findOneAndRemove({name: req.name}, function(err, author){
      if (err) {
        console.log(err);
      } else {
        console.log(author);
      }
    });
  }
  // show: function(req){
  //   AuthorModel.findById({_id: req}, function(err, author){
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(author);
  //     }
  //   });
  // }
};

// authorsController.index();
// authorsController.show({name: "Evan"});
//authorsController.show("570bc28340628bdfa4f34559");
//authorsController.update({name: "Christine"}, {name: "Momo"});
authorsController.destroy({name: "Momo"});

var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var ReminderModel = Schema.ReminderModel;
var AuthorModel = Schema.AuthorModel;

var christine = new AuthorModel({name: "Christine"});
var becky = new AuthorModel({name: "Becky"});
var evan = new AuthorModel({name: "Evan"});

var reminder1 = new ReminderModel({body: "Finish Compliments HW"});
var reminder2 = new ReminderModel({body: "Grade Projects"});
var reminder3 = new ReminderModel({body: "Practice Capstone Defense"});
var reminder4 = new ReminderModel({body: "Edit Portfolio"});
var reminder5 = new ReminderModel({body: "Look at Apartments in CA"});
var reminder6 = new ReminderModel({body: "Study for Comps"});


var authors = [christine, becky, evan];
var reminders = [reminder1, reminder2, reminder3, reminder4, reminder5, reminder6];

authors.forEach(function(author, i){
  author.reminders.push(reminders[i], reminders [i+3])
  author.save(function(err) {
    if (err) {
       console.log(err);
    } else {
      console.log("An author was saved!");
    }
  });
});

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var settingsSchema = new Schema({
  packageName:{type: String, index: true},
  settings: [{
      key: String,
      value: String,
      admin: Boolean
  }]
});



mongoose.model('Follow', followSchema);



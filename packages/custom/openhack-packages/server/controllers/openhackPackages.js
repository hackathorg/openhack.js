'use strict';

var mongoose = require('mongoose'),
Package = mongoose.model('Settings');

module.exports = function(OpenhackPackages){
  return {
    getpackages: function(req, res) {
      Package.find({}).select('packageName').exec(function (err, packages) {
        res.send(packages);
      });
    },
    setpackage: function(req, res) {
      if (!req.params.packageName) return res.send(404, 'No package specified');
      Package.findOne({
        packageName: req.params.packageName
      }).exec(function (err, thispackage) {
        if (!err && thispackage) {
          Event.findOneAndUpdate({
            packageName: thispackage.packageName
          }, {
            $set: req.body
          }, {
            multi: false,
            upsert: false
          }, function (err, circle) {
            if (err) {
              return res.send(500, err.message);
            }
            res.send(200, 'updated');
          });
        }
      });    
    },
    getpackage: function (req, res) {
      if (!req.params.packageName) return res.send(404, 'No package specified');
      Package.findOne({
        packageName: req.params.packageName
      }).exec(function (err,thispackage) {
        if (!err && thispackage) {
          res.send(200,thispackage);
        }
      });
    }
    /*, 
    get: function (req, res) {
      if (!req.params.packageName) return res.send(404, 'No package specified');
      if (!req.params.settingName) return res.send(404, 'No setting specified');
      Follow.update({userId: {$in:[req.profile._id, req.user._id]}}, {$pull:{follows:{id: req.profile._id}, followers:{id: req.user._id }}},{new: true, multi:true}, function(err, num){
        res.send(num);
      })
    }*/
  };
};

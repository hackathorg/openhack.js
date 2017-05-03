'use strict';

var mongoose = require('mongoose'),
Package = mongoose.model('Settings');
var https = require("https");
var config = require('meanio').getConfig();

module.exports = function(OpenhackPackages){
  return {
    getpackagenames: function(req, res) {
      Package.find({}).select('packageName').exec(function (err, packages) {
        res.send(packages);
      });
    },
    getpackages: function(req, res) {
      Package.find({}).exec(function (err, packages) {
        res.send(packages);
      });
    },
    setpackage: function(req, res) {
      if (!req.params.packageName) return res.send(404, 'No package specified');
      Package.findOne({
        packageName: req.params.packageName
      }).exec(function (err, thispackage) {
        if (err) {
          return res.send(500, err.message);
        }
        Package.findOneAndUpdate({
          packageName: req.params.packageName
        }, {
          $set: req.body
        }, {
          multi: false,
          upsert: true
        }, function (err, circle) {
          if (err) {
            return res.send(500, err.message);
          }
          res.send(200, 'updated');
        });
      });    
    },
    getpackage: function (req, res) {
      if (!req.params.packageName) return res.send(404, 'No package specified');
      Package.findOne({
        packageName: req.params.packageName
      }).exec(function (err,thispackage) {
        if (err) {
          return res.send(500, err.message);
        }
        if (!err && thispackage) {
          res.send(200,thispackage);
        }
      });
    },
    getevent: function(req, res) {
      https.get('https://hackath.org/api/events/' + config.eventid, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done
            var parsed = JSON.parse(body);
            res.send(parsed);
        });

      })
    }
  };
};

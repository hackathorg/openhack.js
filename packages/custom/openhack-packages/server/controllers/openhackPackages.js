'use strict';

var mongoose = require('mongoose'),
  Package = mongoose.model('Package');


module.exports = function(HackathorgProfile){
  return {
    packages: function(req, res) {
      var id = profileOrUser(req, res);
      Package.find({}).select('packageName').exec(function (err, follows) {
        res.send(follows);
      });
    },
    packageset: function(req, res) {
      var id = profileOrUser(req, res);
      Follow.update({userId:id}, {$setOnInsert:{userId:id, follows: [], followers: []}}, {new:true,upsert:true}).select('userId followers -_id').exec(function (err, followers) {
        res.send(followers);
      });
    },
    package: function (req, res) {
      var id = ''
        if (req.profile){
            id = req.profile._id
        }
        else if ( req.user){
          var id = req.user._id
        }
        else {
          res.send('No user selected')
        }

        Follow.aggregate([
            {$match: {userId: id}},
            {$project:{
                followers: {$size: '$followers'},
                follows: {$size: '$follows'}
            }}
        ]).exec(function (err, result){res.send(result)})
    }, 
    set: function (req, res){
      Follow.findOneAndUpdate({follower: req.user._id}, {$setOnInsert:{userId:req.user._id, follows: [], followers: []}}, {new:true,upsert:true}).exec(function (err, followers) {
        Follow.findOneAndUpdate({userId: req.user._id, follows:{$not:{$elemMatch:{id:req.profile._id}}}}, 
        {$push: {follows:{id: req.profile._id, username: req.profile.username}}
      }, {new:true}).exec(function (err, followers) {console.log(followers)});
    });
      Follow.findOneAndUpdate({userId: req.profile._id}, {$setOnInsert:{userId:req.profile._id, follows: [], followers: []}}, {new:true,upsert:true}).exec(function (err, followers) {
        Follow.findOneAndUpdate({userId: req.profile._id, followers:{$not:{$elemMatch:{id:req.user._id}}}}, 
        {$push: {followers:{id: req.user._id, username: req.user.username}}
      }, {new:true}).exec(function (err, followers) {console.log(followers)});
      });

      res.send('OK')
    },
    get: function (req, res) {
      Follow.update({userId: {$in:[req.profile._id, req.user._id]}}, {$pull:{follows:{id: req.profile._id}, followers:{id: req.user._id }}},{new: true, multi:true}, function(err, num){
        res.send(num);
      })
     
  }

   
  };
};

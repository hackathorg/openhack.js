'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var path = require('path');
var _ = require('lodash');
var plugins = gulpLoadPlugins();
var herokuTasks = ['clean', 'webpackBuildProd'];
var defaultTasks = ['clean', 'cssmin', 'uglify', 'prodServe'];
var assets = require('../config/assets.json');
var gutil = require('gulp-util');
var webpackProdConfig = require('../webpack.production.config.js')
var webpack = require('webpack');
gulp.task('env:production', function () {
  process.env.NODE_ENV = 'production';
});


function tokenizeConfig (config) {
  var destTokens = _.keys(config)[0].split('/');

  return {
    srcGlob: _.flatten(_.values(config)),
    destDir: destTokens[destTokens.length - 2],
    destFile: destTokens[destTokens.length - 1]
  };
}
gulp.task('webpackBuildProd',['cssmin','uglify'], webpackBuildProd);

gulp.task('cssmin', function () {
  console.log('in cssmin');
  var config = tokenizeConfig(assets.core.css);

  if (config.srcGlob.length) {
    return gulp.src(config.srcGlob)
      .pipe(plugins.cssmin({
        keepBreaks: true
      }))
      .pipe(plugins.concat(config.destFile))
      .pipe(gulp.dest(path.join('bower_components/build', config.destDir)));
  }
});

gulp.task('uglify', function () {
  console.log('in uglify');
  var config = tokenizeConfig(assets.core.js);

  if (config.srcGlob.length) {
    return gulp.src(config.srcGlob)
      .pipe(plugins.concat(config.destFile))
      .pipe(plugins.uglify({
        mangle: false
      }))
      .pipe(gulp.dest(path.join('bower_components/build', config.destDir)));
  }
});


// var ngAnnotatePlugin = require('ng-annotate-webpack-plugin')


////////////////////////////////////////////////////////////////////

// modify some webpack config options
var prodConfig = Object.create(webpackProdConfig);
prodConfig.devtool = 'sourcemap';
prodConfig.debug = true;
// create a single instance of the compiler to allow caching
var prodCompiler = webpack(prodConfig);

function webpackBuildProd (callback) {
  // run webpack
  prodCompiler.run(function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpackBuild', err);
    }
    gutil.log('webpackBuild', stats.toString({
      colors: true
    }));
    callback()
  })
}
gulp.task('production', defaultTasks)
gulp.task('heroku:production', herokuTasks)

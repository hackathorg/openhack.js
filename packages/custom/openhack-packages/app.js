'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var OpenhackPackages = new Module('openhack-packages');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
OpenhackPackages.register(function(app, auth, database, circles) {
  OpenhackPackages.controller = require('./server/controllers/openhackPackages') (OpenhackPackages);
  //We enable routing. By default the Package Object is passed to the routes
  OpenhackPackages.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  OpenhackPackages.menus.add({
    title: 'openhackPackages example page',
    link: 'openhackPackages example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    OpenhackPackages.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    OpenhackPackages.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    OpenhackPackages.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return OpenhackPackages;
});

'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var OpenhackCoder = new Module('openhack-coder');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
OpenhackCoder.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  OpenhackCoder.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users

  OpenhackCoder.menus.add({
    title: 'Challenges',
    link: 'challenge',
    module: 'challenge',
    roles: ['authenticated'],
    menu: 'main',
    moduleweight: 90
  });

  OpenhackCoder.menus.add({
    title: 'Coding challenges',
    link: 'openhackCoder example page',
    module: 'challenge',
    roles: ['authenticated'],
    menu: 'main/challenge',
    moduleweight: 0
  });
  //OpenhackCoder.angularDependencies(['ui.codemirror']);
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    OpenhackCoder.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    OpenhackCoder.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    OpenhackCoder.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return OpenhackCoder;
});

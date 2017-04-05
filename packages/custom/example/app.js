'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Example = new Module('example');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Example.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Example.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Example.menus.add({
    title: 'Example module',
    link: 'example',
    roles: ['authenticated'],
    menu: 'main',
    moduleweight: 100
  });

  Example.menus.add({
    title: 'Functionality',
    link: 'example functionality',
    roles: ['authenticated'],
    menu: 'main/example',
    moduleweight: 0
  });

  Example.menus.add({
    title: 'Settings',
    link: 'example settings',
    roles: ['authenticated'],
    menu: 'main/example',
    moduleweight: 1
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Example.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Example.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Example.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Example;
});

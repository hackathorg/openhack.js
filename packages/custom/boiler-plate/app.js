'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var BoilerPlate = new Module('boiler-plate');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
BoilerPlate.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  BoilerPlate.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  BoilerPlate.menus.add({
    title: 'boilerPlate',
    link: 'boilerPlate',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    BoilerPlate.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    BoilerPlate.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    BoilerPlate.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return BoilerPlate;
});

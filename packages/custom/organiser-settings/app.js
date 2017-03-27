'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var OrganiserSettings = new Module('organiser-settings');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
OrganiserSettings.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  OrganiserSettings.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  OrganiserSettings.menus.add({
    title: 'Admin',
    link: 'admin',
    module: 'organiser-settings',
    roles: ['authenticated'],
    menu: 'main',
    moduleweight:999
  });

  OrganiserSettings.menus.add({
    title: 'Event status',
    link: 'eventstatus',
    module: 'organiser-settings',
    roles: ['authenticated'],
    menu: 'main/admin',
    moduleweight:0
  });

  OrganiserSettings.menus.add({
    title: 'Event staging',
    link: 'eventstaging',
    module: 'organiser-settings',
    roles: ['authenticated'],
    menu: 'main/admin',
    moduleweight:1
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    OrganiserSettings.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    OrganiserSettings.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    OrganiserSettings.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return OrganiserSettings;
});

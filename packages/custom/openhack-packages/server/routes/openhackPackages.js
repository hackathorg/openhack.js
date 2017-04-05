(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(OpenhackSettings, app, auth, database, circles) {

        var requiresAdmin = circles.controller.hasCircle('admin');
        var requiresLogin = circles.controller.hasCircle('authenticated');
        var requiresOrganiser = circles.controller.hasCircle('organiser');
        var requiresMentor = circles.controller.hasCircle('mentor');
        var requiresAttendee = circles.controller.hasCircle('attendee');

        var packages = OpenhackSettings.controller;

        app.route('/api/openhackSettings/:packageName')
            .get(packages.getpackage)
            .put(packages.setpackage);
        app.get('/api/openhackSettings', packages.getpackages);

        app.get('/api/openhackSettings/example/anyone', function(req, res) {
            res.send('Anyone can access this');
        });

        app.get('/api/openhackSettings/example/auth', requiresLogin, function(req, res) {
            res.send('Only authenticated users can access this');
        });

        app.get('/api/openhackSettings/example/admin', requiresAdmin, function(req, res) {
            res.send('Only users with Admin role can access this');
        });

        app.get('/api/openhackSettings/example/render', function(req, res) {
            OpenhackSettings.render('index', {
                package: 'openhack-settings'
            }, function(err, html) {
                //Rendering a view from the Package server/views
                res.send(html);
            });
        });
    };
})();

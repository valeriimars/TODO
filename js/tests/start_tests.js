(function () {

    require.config({
        baseUrl: 'js/',
        paths: {
            underscore: 'lib/underscore'
        }

    });

    var testModules = [
        "js/tests/test_models.js",
        "js/tests/test_views.js",
        "js/tests/test_controller.js"
    ];

    require(testModules, function(){
        QUnit.load();
        QUnit.start();
    });
}());

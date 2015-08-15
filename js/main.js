'use strict';

require.config({
    paths: {
        underscore: 'lib/underscore'
    }

});

require(['controller'], function (Controller) {
    new Controller().start();
});

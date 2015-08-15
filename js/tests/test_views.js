define(['views/view'],
    function (View) {

        return (function () {

            QUnit.test("Test View Rendering", function () {
                var expectedOutput = "<b> dataValue </b>";
                var view = new View();
                var renderingResult =  view.render({data: 'dataValue'});
                QUnit.equal(renderingResult, expectedOutput);
            });

            // Potentially business events handling/triggering could be tested
            // But for interview purpose this should be enough

        }());
    });

define(['models/model', 'models/item_model', 'models/items_collection_model'],
    function (Model, ItemModel, ItemsCollection) {
        return (function () {

            var getItemModel = function (title) {
                var model = new ItemModel();
                model.setTitle(title || 'MockedItemTitle');
                return model;
            };

            QUnit.test("Test Model Getters And Setters", function () {
                var model = new Model();
                model.set('field1', 3);
                QUnit.equal(model.get('field1'), 3, "Basic GET/SET functionality doesn't work");
            });

            QUnit.test("Test Model JSON representation works correctly", function () {
                var model = new Model();
                model.set('f', 'tst_val');
                model.set('attr', 'val');
                model.set('bool', false);

                QUnit.equal(model.stringify().f, 'tst_val');
                QUnit.equal(model.stringify().attr, 'val');
                QUnit.ok(!model.stringify().bool);
            });

            QUnit.test("Test Model Pub/Sub", function () {
                var model = new Model();
                var hasModelchanged = false;

                model.addListener(function () {
                    hasModelchanged = true;
                });

                model.set('field', 'val');
                QUnit.ok(hasModelchanged);
            });

            QUnit.test("Test ItemsCollectionModel Get/Add/Delete from models collection", function () {
                var itemModel = getItemModel('tite 1');
                var itemModel2 = getItemModel('tite 2');
                var collection = new ItemsCollection();
                collection.addItems([itemModel, itemModel2]);
                QUnit.equal(collection.getItems().length, 2, "Collection should contain 2 models");
                QUnit.equal(collection.getItems().length, collection.getItemsNumber());

                collection.deleteItemById(itemModel.getId());
                QUnit.equal(collection.getItems().length, 1, "Collection should contain 1 model");
                QUnit.equal(collection.getItems().length, collection.getItemsNumber());
            });
        }());
    });

define(['underscore', 'models/model'], function (_, Model) {
    
    var ItemsCollectionModel = Model.extend({

         _logName: 'ItemsCollectionModel',
         _itemsNumber: 0,

        FIELDS: _.extend({
            ITEMS: 'item_models',
            ITEMS_NUMBER: 'items_count'
        }, Model.prototype.FIELDS),

        _constructor : function () {
            Model.prototype._constructor.call(this);
            this._modelStore.item_models = [];
        },

        getItemsNumber : function () {
            return this.get(this.FIELDS.ITEMS_NUMBER) || this.get(this.FIELDS.ITEMS).length;
        },


        getItemById : function (id) {
            return _.find(this.get(this.FIELDS.ITEMS), function (item) {
                return item.getId() === id;
            }, this);
        },

        deleteItemById : function (id) {
            this.set(this.FIELDS.ITEMS, _.reject(this.get(this.FIELDS.ITEMS), function (item) {
                return String(item.getId()) === String(id);
            }));
        },

        getItems : function () {
            return this.get(this.FIELDS.ITEMS);
        },

        addItem : function (item) {
            this.get(this.FIELDS.ITEMS).push(item);
        },

        addItems : function (items) {
            this.set(this.FIELDS.ITEMS, this.get(this.FIELDS.ITEMS).concat(items));
        }

    });

    return ItemsCollectionModel;
});

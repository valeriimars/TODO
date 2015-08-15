define(['underscore', 'models/model'], function (_, Model) {
    
  var ItemModel = Model.extend({

         _logName: 'ItemModel',

        FIELDS: _.extend({
            TITLE: 'item_title',
            IS_ACTIVE: 'is_active'
        }, Model.prototype.FIELDS),

        setTitle: function (title) {
            this.set(this.FIELDS.TITLE, title);
        },

        getTitle: function () {
            return this.get(this.FIELDS.TITLE);
        },

        isActive: function () {
            return this.get(this.FIELDS.IS_ACTIVE);
        },

        setIsActive: function (isActive) {
            this.set(this.FIELDS.IS_ACTIVE, isActive)
        }

    });

    return ItemModel;
});

define(['underscore', 'views/view'], function (_, View) {

    var ItemView = function () {
    };

    _.extend(ItemView.prototype, View.prototype, {

        EVENTS: {
            DELETE_ITEM: 'delete_item'
        },

        _getTemplate: function () {
            return "<li class='todo_item'" +
                "<p><%= item_title %>" +
                    "<button type='button' data-id='<%= id%>' clas='delete_item'> Delete </button>" +
                "</p>" +
            " </li>";
        },

        initializeDOMListeners : function () {
            this._addEventListener('click', this.EVENTS.DELETE_ITEM, '', 'delete_item');
        },

        _getElementData : function (eventTarget){
            return eventTarget.getAttribute('data-id');
        }

    });

    return ItemView;

});

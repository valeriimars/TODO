define(['underscore'], function (_) {
    
    var View = function () {};
    
    _.extend(View.prototype, {

        _mountPoint: '#mount_point',
        _callBacks: {},

        start: function (data) {
            this.render(data);
        },

        initializeDOMListeners : function () {},

        _addEventListener : function (eventType, businessEventType, targetId, targetClass) {
            var self = this;
            document.querySelector('#mount_point').addEventListener(eventType, function (event) {
                event.preventDefault();
                var isEventOnTarget = event.target.id === targetId || event.target.className === targetClass;

                if (isEventOnTarget && self._callBacks[businessEventType]) {
                    self._callBacks[businessEventType].forEach(function (callBack) {
                        callBack(self._getElementData(event.target));
                    });
                }
            });
        },

        addBusinessEventHandler : function (businessEventType, callBack) {
            this._callBacks[businessEventType] = this._callBacks[businessEventType] || [];
            this._callBacks[businessEventType].push(callBack);
        },

        _getElementData : function (domElement) {
            return domElement.id;
        },

        render : function (data) {
            return _.template(this._getTemplate())(data);
        },

        _getTemplate : function () {
            return "<b> <%= data %> </b>";
        }

    });

    return View;
});

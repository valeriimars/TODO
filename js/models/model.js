define(['underscore'], function (_) {
    
    var Model = function (data) {
        this._constructor();
        this.setId(new Date().getTime());
    };
    
    _.extend(Model.prototype, {

        FIELDS: { ID: 'id' },

        _modelStore : {},
        _callBacks: [],
        _logName: 'CoreModel',

        addListener : function (callBack) {
            this._callBacks.push(callBack);
        },

        _constructor : function (data) {
            this._modelStore = data || {};
        },

        set : function (field, value) {
            this.log('set ' + field + '=' + value);
            this._modelStore[field] = value;

            _.map(this._callBacks, function (func) {
                func(this);
            }, this);
        },

        get : function (field) {
            this.log('get ' + field);
            return this._modelStore[field];
        },

        getId : function () {
            return this.get(this.FIELDS.ID);
        },

        setId : function (id) {
            this.set(this.FIELDS.ID, id);
        },

        log : function (data) {
            console.log('Perform [' + data + '] on Model' + this._logName);
        },

        /**
        Returns object that represents current model state
        **/
        stringify: function () {
            var keys = Object.keys(this._modelStore);
            return _.reduce(keys, function (memo, key) {
                memo[key] = this._modelStore[key];
                return memo;
            }, {}, this);
        }

    });

    Model.extend = function (attrs) {
        var parent = this;
        var Child = attrs.hasOwnProperty('_constructor') ?
            attrs._constructor : function () {return parent.apply(this, arguments);};
        
        _.extend(Child, parent);
        
        var Proto = function () {};
        Proto.prototype = parent.prototype;
        Child.prototype = new Proto;
         _.extend(Child.prototype, attrs);
         return Child;
    };
    
    return Model;
});

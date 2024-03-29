// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.CollectionBoxView = (function(_super) {
    __extends(CollectionBoxView, _super);

    function CollectionBoxView() {
      return CollectionBoxView.__super__.constructor.apply(this, arguments);
    }

    CollectionBoxView.prototype.className = 'collectionBox';

    CollectionBoxView.prototype.template = _.template('<h2>"Disgarded"</h2>');

    CollectionBoxView.prototype.initialize = function() {
      this.collection.on('add remove change', (function(_this) {
        return function() {
          return _this.render();
        };
      })(this));
      return this.render();
    };

    CollectionBoxView.prototype.render = function() {
      this.$el.children().detach();
      return this.$el.html(this.template);
    };

    return CollectionBoxView;

  })(Backbone.Collection);

}).call(this);

//# sourceMappingURL=CollectionBoxView.map

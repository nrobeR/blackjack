// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ChipsView = (function(_super) {
    __extends(ChipsView, _super);

    function ChipsView() {
      return ChipsView.__super__.constructor.apply(this, arguments);
    }

    ChipsView.prototype.className = 'chips';

    ChipsView.prototype.template = _.template('<div>5: "@collection.getNumOf(5)" 10: "@collection.getNumOf(10)"</div>');

    ChipsView.prototype.initialize = function() {
      this.collection.on('add remove change', (function(_this) {
        return function() {
          return _this.render();
        };
      })(this));
      return this.render();
    };

    ChipsView.prototype.render = function() {
      this.$el.children().detach();
      this.$el.html('<div>HELLO</div>');
      return this.$el.html(this.template);
    };

    return ChipsView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=ChipsView.map

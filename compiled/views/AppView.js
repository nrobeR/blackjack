// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.AppView = (function(_super) {
    __extends(AppView, _super);

    function AppView() {
      return AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.template = _.template('<button class="hit-button">Hit</button> <button class="stand-button">Stand</button> <button class="new-button">NewGame</button> <div class="player-hand-container"></div> <div class="dealer-hand-container"></div>');

    AppView.prototype.events = {
      "click .hit-button": function() {
        return this.model.get('playerHand').hit();
      },
      "click .stand-button": function() {
        this.model.get('playerHand').stand();
        return this.model.get('dealerHand').stand();
      },
      "click .new-button": function() {
        this.model.get('playerHand').reset([this.model.get('deck').pop(), this.model.get('deck').pop()]);
        this.model.get('dealerHand').reset([this.model.get('deck').pop().flip(), this.model.get('deck').pop()]);
        return this.render();
      }
    };

    AppView.prototype.initialize = function() {
      this.render();
      this.model.get('playerHand').on('overLoaded', (function(_this) {
        return function() {
          console.log("overLoaded");
          return _this.model.youLost();
        };
      })(this));
      this.model.get('dealerHand').on('standed', (function(_this) {
        return function() {
          return _this.model.checkGame();
        };
      })(this));
      return this.model.get('deck').on('remove', (function(_this) {
        return function() {
          console.log(_this.model.get('deck').length);
          if (_this.model.get('deck').length === 0) {
            console.log("empty");
            return _this.model.get('deck').refill();
          }
        };
      })(this));
    };

    AppView.prototype.render = function() {
      this.$el.children().detach();
      this.$el.html(this.template());
      this.$('.player-hand-container').html(new HandView({
        collection: this.model.get('playerHand')
      }).el);
      this.$('.dealer-hand-container').html(new HandView({
        collection: this.model.get('dealerHand')
      }).el);
      this.$el.append('<div class=test>HELLO</div>');
      return this.$el.append(new ChipsView({
        collection: this.model.get('playerChips')
      }).el);
    };

    return AppView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=AppView.map

// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Hand = (function(_super) {
    __extends(Hand, _super);

    function Hand() {
      return Hand.__super__.constructor.apply(this, arguments);
    }

    Hand.prototype.model = Card;

    Hand.prototype.initialize = function(array, deck, isDealer) {
      this.deck = deck;
      this.isDealer = isDealer;
    };

    Hand.prototype.hit = function() {
      this.add(this.deck.pop()).last();
      return this.checkOverload();
    };

    Hand.prototype.scores = function() {
      var hasAce, score;
      hasAce = this.reduce(function(memo, card) {
        return memo || card.get('value') === 1;
      }, false);
      score = this.reduce(function(score, card) {
        return score + (card.get('revealed') ? card.get('value') : 0);
      }, 0);
      if (hasAce) {
        return [score, score + 10];
      } else {
        return [score];
      }
    };

    Hand.prototype.checkOverload = function() {
      console.log(this.scores()[0]);
      if (this.scores()[0] > 21) {
        return this.trigger('overLoaded');
      }
    };

    Hand.prototype.stand = function() {
      if (this.isDealer) {
        this.first().flip();
        while (this.scores()[0] < 17) {
          this.add(this.deck.pop()).last();
        }
        this.trigger('standed');
      }
      if (this.isDealer !== true) {
        return console.log("boom!");
      }
    };

    return Hand;

  })(Backbone.Collection);

}).call(this);

//# sourceMappingURL=Hand.map

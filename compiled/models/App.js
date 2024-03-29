// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.App = (function(_super) {
    __extends(App, _super);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      var deck, playerChips;
      this.set('deck', deck = new Deck());
      this.set('playerHand', deck.dealPlayer());
      this.set('dealerHand', deck.dealDealer());
      return this.set('playerChips', playerChips = new ChipsCollection());
    };

    App.prototype.youLost = function() {
      return alert("You Lost!");
    };

    App.prototype.youWin = function() {
      return alert("You Win!");
    };

    App.prototype.youDraw = function() {
      return alert("Draw");
    };

    App.prototype.checkGame = function() {
      var dealerScore, playerScore;
      dealerScore = this.get('dealerHand').scores()[0];
      playerScore = this.get('playerHand').scores()[0];
      if (dealerScore < playerScore || dealerScore > 21) {
        this.youWin();
      }
      if (dealerScore > playerScore && dealerScore < 22) {
        this.youLost();
        if (dealerScore === playerScore) {
          return this.youDraw();
        }
      }
    };

    return App;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=App.map

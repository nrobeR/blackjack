// Generated by CoffeeScript 1.7.1
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

window.CollectionBox = (function(_super) {
  __extends(CollectionBox, _super);

  function CollectionBox() {
    return CollectionBox.__super__.constructor.apply(this, arguments);
  }

  CollectionBox.prototype.model = Card;

  return CollectionBox;

})(Backbone.Collection);

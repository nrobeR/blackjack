class window.AppView extends Backbone.View

  template: _.template '
    <button class="hit-button">Hit</button>
    <button class="stand-button">Stand</button>
    <button class="new-button">NewGame</button>
    <div class="player-hand-container"></div>
    <div class="dealer-hand-container"></div>
  '

  events:
    "click .hit-button": -> @model.get('playerHand').hit()
    "click .stand-button": -> 
      @model.get('playerHand').stand()
      @model.get('dealerHand').stand()
    "click .new-button": ->
      @model.get('playerHand').reset([@model.get('deck').pop(),@model.get('deck').pop()])
      @model.get('dealerHand').reset([@model.get('deck').pop().flip(),@model.get('deck').pop()])
      # @model.set 'playerHand', @model.get('deck').dealPlayer()
      # @model.set 'dealerHand', @model.get('deck').dealDealer()
      @render()

  initialize: ->
    @render()
    @model.get('playerHand').on 'overLoaded', => 
      console.log "overLoaded"
      @model.youLost()
    @model.get('dealerHand').on 'standed', =>
      @model.checkGame()

    @model.get('deck').on 'remove', =>
      # console.log "test"
      console.log @model.get('deck').length
      # console.log @model.get('deck').refill
      if @model.get('deck').length == 0
        console.log "empty"
        @model.get('deck').refill()


  render: ->
    @$el.children().detach()
    @$el.html @template()
    @$('.player-hand-container').html new HandView(collection: @model.get 'playerHand').el
    @$('.dealer-hand-container').html new HandView(collection: @model.get 'dealerHand').el
    @$el.append '<div class=test>HELLO</div>'
    @$el.append new ChipsView(collection: @model.get 'playerChips').el

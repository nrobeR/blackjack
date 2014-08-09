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

    # @model.on 'change', =>
    #   @model.get('playerHand').on 'overLoaded', =>
    #     @model.youLost()
    # @model.on 'change', =>
    #   @model.get('dealerHand').on 'standed', =>
    #     @model.checkGame()

  render: ->
    @$el.children().detach()
    @$el.html @template()
    @$('.player-hand-container').html new HandView(collection: @model.get 'playerHand').el
    @$('.dealer-hand-container').html new HandView(collection: @model.get 'dealerHand').el

class window.Deck extends Backbone.Collection

  model: Card

  refill: ->
    @reset _([0...52]).shuffle().map (card) ->
      new Card
        rank: card % 13
        suit: Math.floor(card / 13)

  initialize: ->

    @add _([0...52]).shuffle().map (card) ->
      new Card
        rank: card % 13
        suit: Math.floor(card / 13)

    # @on 'remove', => 
    #   console.log "Deck: #{@length}"
    #   if @length == 0
    #   	@shuffleDeck()

  	# @add _([0...52]).shuffle().map (card) ->
  	#   new Card
  	#     rank: card % 13
  	#     suit: Math.floor(card / 13)

  dealPlayer: -> new Hand [ @pop(), @pop() ], @

  dealDealer: -> new Hand [ @pop().flip(), @pop() ], @, true


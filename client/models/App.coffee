#todo: refactor to have a game beneath the outer blackjack model
class window.App extends Backbone.Model

  initialize: ->
    @set 'deck', deck = new Deck()
    @set 'playerHand', deck.dealPlayer()
    @set 'dealerHand', deck.dealDealer()

  youLost: ->
  	alert "You Lost!"

  youWin: ->
  	alert "You Win!"

  youDraw: ->
  	alert "Draw"

  checkGame: ->
  	dealerScore = @get('dealerHand').scores()[0]
  	playerScore = @get('playerHand').scores()[0]

  	if dealerScore < playerScore or dealerScore > 21
  		@youWin()
  	if dealerScore > playerScore and dealerScore < 22
  		@youLost()
    if dealerScore == playerScore
    	@youDraw()
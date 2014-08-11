class window.ChipsCollection extends Backbone.Collection
  
  model: Chip

  initialize: ->
  	@add([new Chip(5), new Chip(10)])

  point: ->
    
    points = @reduce (points,chip) ->
      points + chip.get 'value'
    , 0

    points

  getNumOfChips: (chipValue)->
  	num = @reduce (count, chip)->
  	  count + if chip.get('value') == chipValue then 1 else 0
  	,0
  	num




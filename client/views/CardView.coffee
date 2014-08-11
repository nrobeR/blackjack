class window.CardView extends Backbone.View

  className: 'card'

  # template: _.template '<%= rankName %> of <%= suitName %>'

  template: _.template '<img src="img/cards/<%=typeof(rankName)=="number"? rankName.toString() : rankName.toLowerCase()%>-<%=suitName.toLowerCase()%>.png">'

  initialize: ->
    @model.on 'change', => @render
    @render()

  render: ->
    @$el.children().detach().end().html
    @$el.html @template @model.attributes
    @$el.addClass 'covered' unless @model.get 'revealed'

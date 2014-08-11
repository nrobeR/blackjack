class window.ChipsView extends Backbone.View

  className: 'chips'

  template: _.template '<div>5: "@collection.getNumOf(5)"
  10: "@collection.getNumOf(10)"</div>'

  initialize: ->
  	@collection.on 'add remove change', =>
  	  @render()

  	@render()

  render: ->
  	@$el.children().detach()
  	@$el.html '<div>HELLO</div>'
  	@$el.html @template


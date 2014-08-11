class window.CollectionBoxView extends Backbone.Collection
	
  className: 'collectionBox'

  template: _.template '<h2>"Disgarded"</h2>'

  initialize: ->
  	@collection.on 'add remove change', =>
  		@render()

  	@render()

  render: ->
  	@$el.children().detach()
  	@$el.html @template
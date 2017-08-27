/* eslint-disable backbone/no-view-onoff-binding */
var MovieView = Backbone.View.extend({
	tagName: 'div',
	className: 'movieContainer',

	initialize: function(options) {
		console.log('options', options);
		if (!(options && options.model))
			throw new Error('model is not specified');

		this.model.on('change', this.render, this);
	},

	events: {
		'click #delete': 'onClickDelete',
	},

	onClickDelete: function() {
		console.log('delete');
		// this.model.remove();
	},

	render: function() {
		//this el is what i defined in tagName
		var template = $('#movieTemplate').html();
		var html = Mustache.render(template, this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});

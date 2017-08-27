/* eslint-disable backbone/no-view-onoff-binding,backbone/render-return */
var MoviesView = Backbone.View.extend({
	el: '#movies',

	initialize: function(options) {
		if (!(options && options.model))
			throw new Error('model is not specified');

		this.collection = new Movies(options.model);

		console.log('options model', options.model);

		this.render();

		this.collection.on('add', this.onAddMovie, this);
		this.collection.on('remove', this.onRemoveItem, this);
	},

	onAddMovie: function(movie) {
		var view = new MovieView({model: movie});
		this.$('#moviesList').append(view.render().$el);
	},

	onRemoveItem: function(item) {
		console.log('collection on remove');
	},

	events: {
		'click #add': 'onClickAdd',
	},

	onClickAdd: function(e){
		var $form = this.$('addMovie');

		var formData = {};

		$('#addMovie').find('.row div').children('input').each(function(i, el) {
			if($(el).val() !== '') {
				formData[el.id] = $(el).val();
				$(el).val('');
			}
		});

		this.collection.add(new Movie(formData));
	},

	render: function() {
		this.collection.each(function(item) {
			this.renderMovie(item);
		}, this);
	},

	renderMovie: function(item) {
		var movieView = new MovieView({model: item});
		this.$('#moviesList').append(movieView.render().el);
	}
});

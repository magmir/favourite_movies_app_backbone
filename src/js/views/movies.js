var MoviesView = Backbone.View.extend({
  el: '#moviesList',

  initialize: function(options) {
    if (!(options && options.model))
      throw new Error('model is not specified');

    this.collection = new Movies(options.model);
    this.render();
  },

  render: function() {
    this.collection.each(function(item) {
        this.renderMovie(item);
    }, this);
  },

  renderMovie: function(item) {
    var movieView = new MovieView({model: item});
    this.$el.append(movieView.render().el);
  }
});

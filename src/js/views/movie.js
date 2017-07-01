var MovieView = Backbone.View.extend({
  tagName: 'div',
  className: 'movieContainer',

  initialize: function(options) {
    if (!(options && options.model))
      throw new Error("model is not specified");
  },

  render: function() {
    //this el is what i defined in tagName
    var template = $("#movieTemplate").html();
    var html = Mustache.render(template, this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});

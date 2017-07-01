$(document).ready(function(){
  var movies = [
      { title: 'Casablanca', director: 'Michael Curtiz', premiere: '1942', keywords: 'Romance, Drama', poster: 'img/casablanca.jpg' },
      { title: 'Fight Club', director: 'David Fincher', premiere: '1999', keywords: 'Drama', poster: 'img/fight_club.jpg' },
      { title: 'Léon: The Professional', director: 'Luc Besson', premiere: '1994', keywords: 'Action, Drama', poster:'img/leon.jpg' },
      { title: 'Forrest Gump', director: 'Robert Zemeckis', premiere: '1994', keywords: 'Drama, Comedy', poster:'img/forrest_gump.jpg' },
      { title: 'Intouchables', director: 'Olivier Nakache, Eric Toledano', premiere: '2012', keywords: 'Drama, Comedy', poster:'img/intouchables.jpg' }
  ];

  new MoviesView({model: movies});
});

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		imageUrl: 'https://img00.deviantart.net/63d3/i/2015/113/e/d/harry_potter_movie_poster_fanart_by_sparco2-d5rz6ra.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		imageUrl: 'http://1.fwcdn.pl/po/68/80/6880/7398343.5.jpg'
	},
	{
		id: 3,
		title: 'Pulp Fiction',
		desc: 'Film gangsterski',
		imageUrl: 'https://cdn.europosters.eu/image/750webp/1721.webp'
	},
	{
		id: 4,
		title: 'E.T.',
		desc: 'Film o kosmicie',
		imageUrl: 'https://originalvintagemovieposters.com/wp-content/uploads/2015/01/ET-3825-697x1024.jpg'
	}
	
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.imageUrl},
		)
	);		
});

var element = 
React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, moviesElements)
);

		
ReactDOM.render(element, document.getElementById('app'));


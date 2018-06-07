function createCard(data) {
  let posterPath = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
  let genres = getMovieGenre(data.genre_ids);

  let card =
    '<div class="card-wrapper res-fw"> \
      <div class="card-image-wrapper"> \
        <img src="' + posterPath + '"> \
      </div> \
      <div class="card-info-wrapper"> \
        <a href="singleMovie.html?id=' + data.id + '">' + data.title + '</a> \
        <p>' + genres + '</p> \
        <div class="card-info-date-rate"> \
          <p>' + data.vote_average + '</p> \
          <p>' + data.release_date + '</p> \
        </div> \
      </div> \
    </div>';

  return card;
}

function getMovieGenre(genre_ids) {
  let genreString = "";
  for (let i = 0; i < genre_ids.length; i++) {
    for (let j = 0; j < genres.length; j++) {
      if (genre_ids[i] == genres[j].id) {
        genreString += genres[j].name + ", "
      }
    }
  }
  return genreString;
}

let genres = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
]
let createStarCard = (data) => {
  let currentStarCard =
    '<a class="movies-star-card m-r-3" href="singleStar.html?id=' + data.id + '"> \
      <div class="movie-star-card-img-wrapper"> \
        <img src="https://image.tmdb.org/t/p/w500' + data.profile_path + '" /> \
      </div> \
      <div class="movies-star-card-name-wrapper"> \
        <h3 class="topic-header">' + data.name + '</h3> \
      </div> \
    </a > \
    ';

  return currentStarCard;
}
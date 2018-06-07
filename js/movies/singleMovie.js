let sParameterName;
let getUrlParameter = function getUrlParameter(sParam) {
  let sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

getUrlParameter();
sendMovieIdAjaxRequest();
getReviews();
getRecomendedMovies();

function sendMovieIdAjaxRequest() {
  query = 'https://api.themoviedb.org/3/movie/' + sParameterName[1] + '?api_key=' + apikey + '&language=en-US';
  $.get(query, (data, status) => { updatePage(data) })
}

function updatePage(data) {
  $('#single-movie-bg-img').attr('src', 'https://image.tmdb.org/t/p/w500' + data.backdrop_path)
  $('#single-movie-title-tag').attr('href', data.homepage);
  $('#single-movie-title').text(data.original_title);
  $('#single-movie-date').text(data.release_date);
  $('#single-movie-desc').text(data.overview);
  $('#single-movie-rating').text(data.vote_average);
  $('#single-movie-time').text(data.runtime + 'm');
  $('#single-movie-budget').text(data.budget + '$');
  $('#single-movie-revenue').text(data.revenue + '$');
  $('#single-movie-tagline').text(data.tagline);
  $('#single-movie-production-company-image').attr('src', 'https://image.tmdb.org/t/p/w500' + data.production_companies[0].logo_path);
  $('#single-movie-production-company-name').text(data.production_companies[0].name);
  $('#single-movie-production-company-country').text(data.production_companies[0].origin_country);
}

function getRecomendedMovies() {
  query = 'https://api.themoviedb.org/3/movie/' + sParameterName[1] + '/recommendations?page=1&language=en-US&api_key=' + apikey;
  $.get(query, (data, status) => {
    let counter = 0;
    for (let i = 0; i < data.results.length; i++) {
      counter++;
      if (counter >= 6) break;
      let currentCard = createCard(data.results[i])
      $('#single-movie-recomended').append(currentCard);
    }
  })
}

function getReviews() {
  query = 'https://api.themoviedb.org/3/movie/' + sParameterName[1] + '/reviews?page=1&language=en-US&api_key=' + apikey;
  $.get(query, (data, status) => {
    for (let i = 0; i < data.results.length; i++) {
      let currentCard = createReviewCard(data.results[i])
      $('#single-movie-reviews').append(currentCard);
    }
  })
}


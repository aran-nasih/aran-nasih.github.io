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
sendStarIdAjaxRequest();

function sendStarIdAjaxRequest() {
  query = 'https://api.themoviedb.org/3/person/' + sParameterName[1] + '?language=en-US&api_key=' + apikey + '&language=en-US';
  $.get(query, (data, status) => { updatePage(data) })

  query = 'https://api.themoviedb.org/3/person/' + sParameterName[1] + '/movie_credits?api_key=' + apikey;
  $.get(query, (data, status) => { getMoviesByStar(data) })

  query = 'https://api.themoviedb.org/3/person/' + sParameterName[1] + '/images?api_key=' + apikey;
  $.get(query, (data, status) => { getStarImages(data) })
}

function updatePage(data) {
  $('#single-star-bg-img').attr('src', 'https://image.tmdb.org/t/p/w500' + data.profile_path)
  $('#single-star-name').text(data.name);

  $('#single-star-bio').text(data.biography);

  $('#single-star-bd').text(data.birthday);
  if (data.deathday != null) {
    $('#single-star-died-wrapper').fadeIn();
    $('#single-star-dd').text(data.deathday)
  }

  $('#single-star-from').text(data.place_of_birth);
}

function getMoviesByStar(data) {
  for (let i = 0; i < data.cast.length; i++) {
    let currentCard = createCard(data.cast[i]);
    $('#single-star-casted').append(currentCard)
  }
}

function getStarImages(data) {
  for (let i = 0; i < data.profiles.length; i++) {
    let imageTag =
      '<div style="width: 300px; margin: 0px 16px 16px 0px; border-radius: 4px; overflow: hidden"> \
    <img  style="width: 100%" src="https://image.tmdb.org/t/p/w500' + data.profiles[i].file_path + '" /> \
    </div>';
    $('#single-star-photos').append(imageTag)
  }
}
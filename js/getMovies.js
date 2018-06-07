var apikey = '9e1045f266bd24cc57c3983d679b4f30';
(function () {

  let keyword = "";

  sendAjaxRequest(2);
  sendAjaxRequest(3);
  sendAjaxRequest(5);

  $('#movieSearchForm').submit((e) => {
    e.preventDefault();
    keyword = $('#movieSearchInput').val();
    let searchOption = $('#movies-search-option').val();
    sendAjaxRequest(searchOption)
  })

  function sendAjaxRequest(method) {
    let query = "";
    if (method == 1) query = 'https://api.themoviedb.org/3/search/movie?api_key=' + apikey + '&query=' + keyword + '&page=1';
    else if (method == 2)
      query = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apikey + '&language=en-US&page=1';
    else if (method == 3)
      query = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apikey + '&language=en-US&page=1'
    else if (method == 4) {
      query = 'https://api.themoviedb.org/3/search/person?api_key=' + apikey + '&query=' + keyword + '&language=en-US&page=1'
      $.get(query, (data, status) => { getMovieStar(data) })
      return;
    }
    else if (method == 5) {
      query = 'https://api.themoviedb.org/3/movie/latest?language=en-US&api_key=' + apikey;
      $.get(query, (data, status) => { getLatestMovie(data) })
    }

    $.get(query, (data, status) => { getMoviesData(data, method) })
  }

  function getMoviesData(data, method) {
    let wrapper = "";
    if (method == 1) wrapper = '#movie-searched-query';
    else if (method == 2) wrapper = '#movie-nowplaying-container';
    else if (method == 3) wrapper = '#movie-upcoming-container';
    let cards;
    $(wrapper).html('');
    for (let i = 0; i < data.results.length; i++) {
      let currentCard = createCard(data.results[i])
      $(wrapper).append(currentCard);
    }
  }

  function getMovieStar(data) {
    let cards;
    $('#movie-searched-query').html('');
    for (let i = 0; i < data.results.length; i++) {
      if (data.results[i].profile_path != null) {
        let currentCard = createStarCard(data.results[i])
        $('#movie-searched-query').append(currentCard);
      }
    }
  }

  function getLatestMovie(data) {
    console.log(data)
    if (data.backdrop_path != null)
      $('#home-latest-movie-bg').attr('src', 'https://image.tmdb.org/t/p/w500' + data.backdrop_path)
    // else if (data.poster_path != null)
    //   $('#home-latest-movie-bg').attr('src', 'https://image.tmdb.org/t/p/w500' + data.poster_path)
    else
      $('#home-latest-movie-bg').attr('src', 'https://c1.staticflickr.com/8/7414/13072126105_9bc3c9a36b_b.jpg')

    $('#home-latest-movie-title').text(data.original_title)
    $('#home-latest-movie-link').attr('href', 'pages/singleMovie.html?id=' + data.id)

  }

})()
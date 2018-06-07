$(window).scroll(function () {
  var sc = $(window).scrollTop()
  if (sc > 100) {
    $("#header-sroll").addClass("small")
  } else {
    $("#header-sroll").removeClass("small")
  }
});

$(window).resize(function () {
  if ($(window).width() <= 700) {
    $('#header-navs').addClass('header-navs-res');
    $('#header-navs').css({ "display": 'flex' });
  } else {
    $('#header-navs').removeClass('header-navs-res');
  }

})

if ($(window).width() <= 700) {
  $('#header-navs').addClass('header-navs-res');
  $('#header-res-menu').click(() => {
    $('#header-navs').slideDown(200)
  })
  $('#header-res-close-menu').click(() => {
    $('#header-navs').slideUp(200)
  })
}

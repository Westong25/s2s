$(window).on("load", function () {
  setTimeout(fadeSpinner, 500)
})

function fadeSpinner () {
  $(".load-container").fadeOut();
}

$(window).load(function () {
  $('.id-container').hide();
  setTimeout(displayPage, 500);
});

function displayPage() {
  $('.id-container').fadeIn();
};

$(window).load(function () {
  $('.gallery-container').hide();
  setTimeout(displayGallery, 500);
});

function displayGallery() {
  $('.gallery-container').fadeIn();
};
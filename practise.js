$(window).on("load", function () {
  setTimeout(fadeSpinner, 1000)
})

function fadeSpinner () {
  $(".load-container").fadeOut();
}

$(window).load(function () {
  $('.id-container').hide();
  setTimeout(displayPage, 1000);
});

function displayPage() {
  $('.id-container').fadeIn();
};

$(".partner-list").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  infinite: false,
});
$(".job-lists:first").selectable({
  filter: " > li",
});

$(".search-input").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $(".job-item").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    console.log($(this))
  }); 
});

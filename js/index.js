$(".partner-list").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
      },
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
      // breakpoint: 308,
      // settings: {
      //   slidesToShow: 2,
      //   slidesToScroll: 1,
      //   adaptiveHeight: true,
      // },
    }]
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

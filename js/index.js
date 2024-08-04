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
    },
  ],
});
$(".job-lists:first").selectable({
  filter: " > li",
});

$(".search-input").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $(".job-item").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    console.log($(this));
  });
});

$(".select-show").click(function () {
  $(".location-list").show();
  $(".select-show").hide();
  $(".select-hide").show();
});
$(".select-hide").click(function () {
  $(".location-list").hide();
  $(".select-show").show();
  $(".select-hide").hide();
});

// $(".location-list").selectable({
//   stop: ()=>{
//     var result = $(".location-result" ).empty();

//     $(".ui-selected").each(function(){
//       var value = $(".location-list li").text();
//       console.log(value) ;
//     })
//   }
// })

$(".location-list").selectable({
  stop: function () {
    var select = $(".ui-selected").text();
    console.log(select);
    $(".location-result").val(select);
  },
});

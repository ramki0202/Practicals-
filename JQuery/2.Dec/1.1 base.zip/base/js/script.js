$(function () {
  var galaryImage = $(".gallery").find("img").first();

  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  var i = 0;
  setInterval(function () {
    i = (i + 1) % images.length;
    console.log(i);
    galaryImage.fadeOut(function () {
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });
  }, 3000);

  galaryImage.on("click", function () {
    console.log(galaryImage);
  });
});

// $(function () {
//   var galaryImage = $(".gallery").find("img").first();
//   galaryImage.on("click", function () {
//     console.log("Image Clicked");
//   });
// });

// $(function () {
//   const firstElement = $("p:first");
//   firstElement.html(
//     firstElement.html() +
//       "<span style='color:red';>this is testing element</span>"
//   );
//   console.log(firstElement);
// });

// $(function () {
//   $(".btn-click").click(function (event) {
//     $(".red-box").fadeOut(1000);
//   });

//   $(".red-box").click(function (event) {
//     $(this).fadeOut(1000);
//   });
// });

$(function () {
  $(".green-box").hover(function () {
    $(this).text("button was hoverd");
  });
});

// $(function () {
//   $("html").on("click keydown", function () {
//     console.log("mouse or key pressed");
//   });
// });

//run this thang every 2 seconds

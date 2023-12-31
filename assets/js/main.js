"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
      prependTo: "#mobile-menu-wrap",
      allowParentLinks: true,
    });

    /*------------------
		Background Setter
	--------------------*/
    $(".set-bg").each(function () {
      const bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });

    /*------------------
		Hero Slider and Background Set
	--------------------*/
    const hero_s = $(".hero__slider");
    hero_s.owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      dots: true,
      nav: true,
      navText: [
        "<span class='arrow_carrot-left'></span>",
        "<span class='arrow_carrot-right'></span>",
      ],
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      smartSpeed: 6500,
      autoHeight: false,
      autoplay: true,
      mouseDrag: true,
    });

    /*------------------
            FIlter
        --------------------*/
    $(".filter__controls li").on("click", function () {
      $(".filter__controls li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".filter__gallery").length > 0) {
      var containerEl = document.querySelector(".filter__gallery");
      var mixer = mixitup(containerEl);
    }
  });

  // Search model
  $(".search-switch").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

  /*------------------
        Video Player
    --------------------*/
  const player = new Plyr("#player", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "captions",
      "settings",
      "fullscreen",
    ],
    seekTime: 25,
  });

  /*------------------
        Niceselect
    --------------------*/
  $("select").niceSelect();

  /*------------------
        Scroll To Top
    --------------------*/
  $("#scrollToTopButton").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
})(jQuery);

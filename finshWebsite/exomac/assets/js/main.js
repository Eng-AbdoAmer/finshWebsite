(function ($) {
  "use strict";

  /*--
        Commons Variables
    -----------------------------------*/
  var $window = $(window),
    $body = $("body");

  /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
  $("[data-bg-image]").each(function () {
    var $this = $(this),
      $image = $this.data("bg-image");
    $this.css("background-image", "url(" + $image + ")");
  });
  $("[data-bg-color]").each(function () {
    var $this = $(this),
      $color = $this.data("bg-color");
    $this.css("background-color", $color);
  });

  /*---------------------------- 
        Sidebar Search Active
    -----------------------------*/
  function sidebarSearch() {
    var searchTrigger = $(".header-search-toggle"),
      endTriggersearch = $("button.search-close"),
      container = $(".main-search-active");

    searchTrigger.on("click", function () {
      container.addClass("inside");
    });

    endTriggersearch.on("click", function () {
      container.removeClass("inside");
    });
  }
  sidebarSearch();

  /*------------------------------
        Parallax Motion Animation 
    -------------------------------*/
  $(".scene").each(function () {
    new Parallax($(this)[0]);
  });

  /*--
        Header Sticky
    -----------------------------------*/
  $window.on("scroll", function () {
    if ($window.scrollTop() > 350) {
      $(".sticky-header").addClass("is-sticky");
    } else {
      $(".sticky-header").removeClass("is-sticky");
    }
  });

  /*--
        Off Canvas Function
    -----------------------------------*/
  $(".header-mobile-menu-toggle, .mobile-menu-close").on(
    "click",
    ".toggle",
    function () {
      $body.toggleClass("mobile-menu-open");
    }
  );
  $(".site-mobile-menu").on("click", ".menu-toggle", function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.siblings(".sub-menu:visible, .mega-menu:visible").length) {
      $this
        .siblings(".sub-menu, .mega-menu")
        .slideUp()
        .parent()
        .removeClass("open")
        .find(".sub-menu, .mega-menu")
        .slideUp()
        .parent()
        .removeClass("open");
    } else {
      $this
        .siblings(".sub-menu, .mega-menu")
        .slideDown()
        .parent()
        .addClass("open")
        .siblings()
        .find(".sub-menu, .mega-menu")
        .slideUp()
        .parent()
        .removeClass("open");
    }
  });

  $(".header-search-toggle").on("click", function (e) {
    e.preventDefault();
    $(this)
      .siblings(".header-search-form, .header-search-form-2")
      .slideToggle()
      .parent()
      .toggleClass("open");
  });

  $(".header-fs-search-toggle").on("click", function () {
    $("#fullscreen-search").addClass("open");
  });
  $(".fullscreen-search-close").on("click", ".toggle", function () {
    $("#fullscreen-search").removeClass("open");
  });

  $body.on("click", function (e) {
    if (
      !$(e.target).closest(".header-search").length &&
      $window.width() < 768
    ) {
      $(".header-search-form, .header-search-form-2")
        .slideUp()
        .parent()
        .removeClass("open");
    }
    if (
      !$(e.target).closest(".site-main-mobile-menu-inner").length &&
      !$(e.target).closest(".header-mobile-menu-toggle").length
    ) {
      $body.removeClass("mobile-menu-open");
    }
  });

  /*----- 
        Animate Headline Active
    --------------------------------*/
  $(".headline-active").animatedHeadline({
    animationType: "rotate-3",
  });

  /* ----------------------------
        AOS Scroll Animation 
    -------------------------------*/
  AOS.init({
    offset: 80,
    duration: 1200,
    once: true,
    easing: "ease",
  });

  /* ----------------------------
        Tilt Animation 
    -------------------------------*/
  $(".js-tilt").tilt({
    base: window,
    reset: !0,
    scale: 1.04,
    reverse: !1,
    max: 15,
    perspective: 3e3,
    speed: 4e3,
  });

  /* ----------------------------
        Portfolio Masonry Activation
    -------------------------------*/
  $(window).load(function () {
    $(".ag-masonary-wrapper").imagesLoaded(function () {
      // filter items on button click
      $(".messonry-button").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $(this).siblings(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
        $grid.isotope({
          filter: filterValue,
        });
      });

      // init Isotope
      var $grid = $(".mesonry-list").isotope({
        percentPosition: true,
        transitionDuration: "0.7s",
        layoutMode: "masonry",
        masonry: {
          columnWidth: ".resizer",
        },
      });
    });
  });

  /*----------------------------------------
         SVG Inject With Vivus(After Inject) 
    ------------------------------------------*/
  SVGInject(document.querySelectorAll("img.svgInject"), {
    makeIdsUnique: true,
    afterInject: function (img, svg) {
      new Vivus(svg, {
        duration: 80,
      });
    },
  });
  /* Vivus On Hover */
  $("[data-vivus-hover]").hover(function () {
    var svg = $(this).find("svg")[0];
    new Vivus(svg, {
      duration: 50,
    });
  });

  /*-----------------------
        CounterUp JS 
    -------------------------*/
  $(".counter").counterUp({
    time: 2000,
  });

  /*--------------------------------
        Swiper Slider Activation JS 
    ----------------------------------*/

  // Home 1 Slider
  var introSlider = new Swiper(".intro-slider", {
    loop: true,
    speed: 750,
    spaceBetween: 30,
    slidesPerView: 2,
    effect: "fade",
    navigation: {
      nextEl: ".home-slider-next",
      prevEl: ".home-slider-prev",
    },
    //autoplay: {},
  });

  // Testimonial Slider Two
  var testimonialSlider = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    spaceBetween: 50,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1499: {
        slidesPerView: 3,
      },

      991: {
        slidesPerView: 2,
      },

      767: {
        slidesPerView: 1,
      },

      575: {
        slidesPerView: 1,
      },
    },
  });

  // Brand Carousel Slider
  var brandSlider = new Swiper(".brand-carousel", {
    watchSlidesVisibility: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 6,
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 5,
      },
      576: {
        slidesPerView: 4,
      },
      320: {
        slidesPerView: 2,
      },
    },
  });

  /*--
        Isotpe
    -----------------------------------*/
  var $isotopeGrid = $(".isotope-grid");
  var $isotopeFilter = $(".isotope-filter");
  $isotopeGrid.imagesLoaded(function () {
    $isotopeGrid.isotope({
      itemSelector: ".grid-item",
      masonry: {
        columnWidth: ".grid-sizer",
      },
    });
    AOS.refresh();
  });
  $isotopeFilter.on("click", "button", function () {
    var $this = $(this),
      $filterValue = $this.attr("data-filter"),
      $targetIsotop = $this.parent().data("target");
    $this.addClass("active").siblings().removeClass("active");
    $($targetIsotop).isotope({
      filter: $filterValue,
    });
  });

  /*--
        Magnific Popup
    -----------------------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  // Background Video Active
  var htmlVideo = [
    {
      type: "video/mp4",
      src: "assets/media/video/local-video.mp4",
    },
  ];

  var poster1 = "assets/media/video/local-video.jpg";

  var demo1 = new vidim(".bg-video", {
    src: htmlVideo,
    poster: poster1,
  });

  /*--
        Scroll Up
    -----------------------------------*/
  function scrollToTop() {
    var $scrollUp = $("#scroll-top"),
      $lastScrollTop = 0,
      $window = $(window);

    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.addClass("show");
        } else {
          $scrollUp.removeClass("show");
        }
      }
      $lastScrollTop = st;
    });

    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }
  scrollToTop();

  /*-------------------------
        Ajax Contact Form 
    ---------------------------*/
  $(function () {
    // Get the form.
    var form = $("#contact-form");

    // Get the messages div.
    var formMessages = $(".form-messege");

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData,
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $("#contact-form input,#contact-form textarea").val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass("success");
          $(formMessages).addClass("error");

          // Set the message text.
          if (data.responseText !== "") {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    });
  });

  /*--
        On Load Function
    -----------------------------------*/
  $window.on("load", function () {});

  /*--
        Resize Function
    -----------------------------------*/
  $window.resize(function () {});
})(jQuery);

// menu_toggel

function menuToggle() {
  const toggleMenu = document.querySelector(".profile_menu");
  toggleMenu.classList.toggle("active");
}
function menuToggleNotification() {
  const toggleNotification = document.querySelector(".notification-box");
  toggleNotification.classList.toggle("active");
}

//////
var d = new Date();
page.currentYear = d.getFullYear();

function showHide() {
  const toggleNotification = document.querySelector(".notification-box");
  if (toggleNotification.style.display == "none") {
    toggleNotification.style.display = "block";
  } else toggleNotification.style.display = "none";
}
/*=========== pagination ================ */
function getPageList(totalPages, page, maxLength) {
  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var slideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - slideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - slideWidth * 2 - 3) >> 1;

  if (totalPages <= maxLength) {
    return range(1, totalPages);
  }

  if (page <= maxLength - slideWidth - 1 - rightWidth) {
    return range(1, maxLength - slideWidth - 1).concat(
      0,
      range(totalPages - slideWidth + 1, totalPages)
    );
  }

  if (page >= totalPages - slideWidth - 1 - rightWidth) {
    return range(1, slideWidth).concat(
      0,
      range(totalPages - slideWidth - 1 - rightWidth - leftWidth, totalPages)
    );
  }

  return range(1, slideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - slideWidth + 1, totalPages)
  );
}

$(function () {
  var e = document.getElementById("table_size");
  var val = e.options[e.selectedIndex].value;
  $("#table_size").val();
  let selection = document.getElementById("table_size");

  selection.addEventListener("change", () => {
    var val = selection.options[selection.selectedIndex].text;
    // value.innerText = selection.options[Selection.selectedIndex].text;
    console.log(val);
  });
  filterIndex = val;
  // console.log(filterIndex);
  var numberOfItem = $(".accordion .item").length;
  var limitPerPage = val;
  var totalPages = Math.ceil(numberOfItem / limitPerPage);
  var paginationSize = 5;
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".accordion .item")
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();

    $(".pagination li").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
      $("<li>")
        .addClass("page-item")
        .addClass(item ? "current-page" : "dots")
        .toggleClass("active", item === currentPage)
        .append(
          $("<a>")
            .addClass("page-link")
            .attr({ href: "javascript:void(0)" })
            .text(item || "...")
        )
        .insertBefore(".next-page");
    });

    // $(".Previous-page").toggleClass("disable", page === 1);
    // $(".next-page").toggleClass("disable", page === totalPages);
    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass("disable", currentPage === totalPages);

    return true;
  }

  $(".pagination").append(
    $("<li>")
      .addClass("page-item")
      .addClass("previous-page")
      .append(
        $("<a>")
          .addClass("page-link")
          .attr({ href: "javascript:void(0)" })
          .text("Prev")
      ),
    $("<li>")
      .addClass("page-item")
      .addClass("next-page")
      .append(
        $("<a>")
          .addClass("page-link")
          .attr({ href: "javascript:void(0)" })
          .text("Next")
      )
  );

  $(".accordion").show();
  showPage(1);

  $(document).on(
    "click",
    ".pagination li.current-page:not(.active)",
    function () {
      return showPage(+$(this).text());
    }
  );

  $(".next-page").on("click", function () {
    return showPage(currentPage + 1);
  });
  $(".previous-page").on("click", function () {
    return showPage(currentPage - 1);
  });
});

// ===swiper autoPlay===

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 100,
  centeredSlides: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});
//to make Search;

const search = () => {
  const searchBox = document.getElementById("myInput").value.toUpperCase();
  const storeItem = document.getElementById("accordionExample");
  const notification = document.querySelectorAll(".item");
  const name = document.getElementsByTagName("span");
  for (var i = 0; i < name.length; i++) {
    let match = notification[i].getElementsByTagName("span")[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        notification[i].style.display = "";
      } else {
        notification[i].style.display = "none";
      }
    }
  }
};
const searchFaqs = () => {
  const searchBox = document.getElementById("myInput").value.toUpperCase();
  const storeItem = document.getElementById("accordionExample");
  const notification = document.querySelectorAll(".item");
  const name = document.getElementsByTagName("span");
  for (var i = 0; i < name.length; i++) {
    let match = notification[i].getElementsByTagName("span")[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        notification[i].style.display = "";
      } else {
        notification[i].style.display = "none";
      }
    }
  }
};
//

function x() {
  // var e = document.getElementById("table_size");
  // var val = e.options[e.selectedIndex].value;
  // $("#table_size").val();

  // window.location.reload();
  //let value = document.querySelector(".accordion");
  // value.innerText = selection.options[Selection.selectedIndex].text;
  let selection = document.getElementById("table_size");

  selection.addEventListener("change", () => {
    var val = selection.options[selection.selectedIndex].text;
    console.log(val);
  });
}

/*==============pagination FAQs=========*/
function getPageList(totalPages, page, maxLength) {
  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var slideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - slideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - slideWidth * 2 - 3) >> 1;

  if (totalPages <= maxLength) {
    return range(1, totalPages);
  }

  if (page <= maxLength - slideWidth - 1 - rightWidth) {
    return range(1, maxLength - slideWidth - 1).concat(
      0,
      range(totalPages - slideWidth + 1, totalPages)
    );
  }

  if (page >= totalPages - slideWidth - 1 - rightWidth) {
    return range(1, slideWidth).concat(
      0,
      range(totalPages - slideWidth - 1 - rightWidth - leftWidth, totalPages)
    );
  }

  return range(1, slideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - slideWidth + 1, totalPages)
  );
}

$(function () {
  // var e = document.getElementById("table_size");
  // var val = e.options[e.selectedIndex].value;
  // $("#table_size").val();
  // let selection = document.getElementById("table_size");

  // selection.addEventListener("change", () => {
  //   var val = selection.options[selection.selectedIndex].text;
  //   // value.innerText = selection.options[Selection.selectedIndex].text;
  //   console.log(val);
  // });
  // filterIndex = val;
  // console.log(filterIndex);
  var numberOfItem = $(".accordionFAQs .item").length;
  var limitPerPage = 10;
  var totalPages = Math.ceil(numberOfItem / limitPerPage);
  var paginationSize = 5;
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".accordionFAQs .item")
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();

    $(".pagination li").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
      $("<li>")
        .addClass("page-item")
        .addClass(item ? "current-page" : "dots")
        .toggleClass("active", item === currentPage)
        .append(
          $("<a>")
            .addClass("page-link")
            .attr({ href: "javascript:void(0)" })
            .text(item || "...")
        )
        .insertBefore(".next-page");
    });

    // $(".Previous-page").toggleClass("disable", page === 1);
    // $(".next-page").toggleClass("disable", page === totalPages);
    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass("disable", currentPage === totalPages);

    return true;
  }

  $(".pagination").append(
    $("<li>")
      .addClass("page-item")
      .addClass("previous-page")
      .append(
        $("<a>")
          .addClass("page-link")
          .attr({ href: "javascript:void(0)" })
          .text("Prev")
      ),
    $("<li>")
      .addClass("page-item")
      .addClass("next-page")
      .append(
        $("<a>")
          .addClass("page-link")
          .attr({ href: "javascript:void(0)" })
          .text("Next")
      )
  );

  $(".accordionFAQs").show();
  showPage(1);

  $(document).on(
    "click",
    ".pagination li.current-page:not(.active)",
    function () {
      return showPage(+$(this).text());
    }
  );

  $(".next-page").on("click", function () {
    return showPage(currentPage + 1);
  });
  $(".previous-page").on("click", function () {
    return showPage(currentPage - 1);
  });
});
/* =====================test_area =============*/
$(document).ready(
  (function () {
    $(".client-single").on("click", function (event) {
      event.preventDefault();

      var active = $(this).hasClass("active");

      var parent = $(this).parents(".testi-wrap");

      if (!active) {
        var activeBlock = parent.find(".client-single.active");

        var currentPos = $(this).attr("data-position");

        var newPos = activeBlock.attr("data-position");

        activeBlock
          .removeClass("active")
          .removeClass(newPos)
          .addClass("inactive")
          .addClass(currentPos);
        activeBlock.attr("data-position", currentPos);

        $(this)
          .addClass("active")
          .removeClass("inactive")
          .removeClass(currentPos)
          .addClass(newPos);
        $(this).attr("data-position", newPos);
      }
    });
  })(jQuery)
);

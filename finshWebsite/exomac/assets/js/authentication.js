function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function menuToggle() {
  const toggleMenu = document.querySelector("#Client");
  toggleMenu.classList.toggle("active");
}


$(function () {
  "use strict";

  $(".registerId h2 span").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");

    $(".registerId  form").hide();
    $("." + $(this).data("class")).fadeIn(100);

    console.log($(this).data("class"));
  });
});
// ==========================validator=======================
$("#LoginClient").validate({
  rules: {
    email: {
      required: true,
      minlength: 3,
    },
    messages: {
      required: "Required input",
      minlength: jQuery.validator.format(
        "Please, at least 3 characters are necessary"
      ),
    },
  },

  submitHandler: function (form) {
    form.submit();
  },
});
$("#LoginCaption").validate({
  rules: {
    email: {
      required: true,
      minlength: 3,
    },
    messages: {
      required: "Required input",
      minlength: jQuery.validator.format(
        "Please, at least 3 characters are necessary"
      ),
    },
  },

  submitHandler: function (form) {
    form.submit();
  },
});

$("#RegisterClient").validate({
  rules: {
    password: {
      required: true,
      minlength: 8,
    },
    email: {
      required: true,
      minlength: 3,
    },
    messages: {
      password: {
        required: "password field is Required",
        minlength: jQuery.validator.format(
          "Please, at least 8 characters are necessary"
        ),
      },

      email: {
        required: "email field is Required",
        minlength: jQuery.validator.format(
          "Please, at least 3 characters are necessary"
        ),
      },
    },
  },

  submitHandler: function (form) {
    form.submit();
  },
});
$("#RegisterCaption").validate({
  rules: {
    password: {
      required: true,
      minlength: 8,
    },
    email: {
      required: true,
      minlength: 3,
    },
    messages: {
      password: {
        required: "password field is Required",
        minlength: jQuery.validator.format(
          "Please, at least 8 characters are necessary"
        ),
      },

      email: {
        required: "email field is Required",
        minlength: jQuery.validator.format(
          "Please, at least 3 characters are necessary"
        ),
      },
    },
  },

  submitHandler: function (form) {
    form.submit();
  },
});

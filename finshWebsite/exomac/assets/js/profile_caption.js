function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    // tabcontent[1].style.display = "block";
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
// ==============Taps javaScript=================
function openTaps(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabBody");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// ==============Taps javaScript=================
function openTapsDocument(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabDoc");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("press");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* select 2*/
$(document).ready(function () {
  $("#carbrand").select2({
    placeholder: "Select an option",
    allowClear: true,
  });
});
$(document).ready(function () {
  $("#carModel").select2({
    placeholder: "Select an option",
    allowClear: true,
  });
});
$(document).ready(function () {
  $("#typeOfCar").select2({
    placeholder: "Select an option",
    allowClear: true,
  });
});
$(document).ready(function () {
  $("#theYearOfTheCar").select2({
    placeholder: "Select an option",
    allowClear: true,
  });
});

// $(function () {
//   "use strict";

//   $("#showDetails").click(function () {
//     // $(this).addClass("selected").siblings().removeClass("selected");

//     $("#showDetails").hide();
//     $("." + $(this).data("class")).fadeIn(100);

//     console.log($(this).data("class"));
//   });
// });
// function openDetails(evt, cityName) {
//   // Declare all variables
//   var i, tabcontent, tablinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.getElementsByClassName("tabDetails");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tabLinkDetails");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
var div = document.getElementById("showDetails");
var display = 0;
function hideShow() {
  if (display == 1) {
    div.style.display = "block";
    display = 0;
  } else {
    div.style.display = "none";
    display = 1;
  }
}

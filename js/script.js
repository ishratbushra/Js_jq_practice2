function myFunction() {
  document.getElementById("f1").innerHTML = "Value is 5";
}
function myFunction1() {
  let x = document.getElementById("f2").innerHTML;
  document.getElementById("f2").innerHTML = x.toUpperCase();
}
function myFunction2() {
  let x = document.getElementById("f3").innerHTML;
  document.getElementById("f3").innerHTML = x.toLowerCase();
}
function myFunction3() {
  let text = "     Remove unneccessary space     ";
  let result = text.trim();
  document.getElementById("f4").innerHTML = result;
}
function myFunction4() {
  let text = "Return character 2 and 6";
  let result = text.substring(2, 6);;
  document.getElementsByClassName("c1")[0].innerHTML = result;
}
function myFunction5() {
  let text = "Replace eword  ";
  let result = text.replace("Replace eword", "Replaced!!");
  document.getElementsByClassName("c1")[1].innerHTML = result;
}
function myFunction6() {
  let text = "This is a paragraph.";
  let result = text.length;
  document.getElementsByTagName("p")[6].innerHTML = result;
}
function myFunction7() {
  let text = "Hello World";
  let result = text.includes("hello");
  document.getElementsByTagName("p")[7].innerHTML = result;
}
function myFunction8() {
  let text1 = "What a very ";
  text1 += "nice day";

  document.getElementById("f10").innerHTML = text1;
}
$(document).ready(function () {
  $('.hide').click(function () {
    $('h2').hide();
  });
  $('.show').click(function () {
    $('h2').show();
  });

  $('.togl').click(function () {
    $('h2').toggle("fast");
  });

  $('.fi').click(function () {
    $('h2').fadeIn();
  });
  $('.fo').click(function () {
    $('h2').fadeOut();
  });
  $('.ft').click(function () {
    $('h2').fadeToggle("fast");
  });
  $('.fto').click(function () {
    $('h2').fadeTo(1000, .5);
  });
  $('.su').click(function () {
    $('h2').slideUp("slow");
  });
  $('.sd').click(function () {
    $('h2').slideDown("slow");
  });
  $('.st').click(function () {
    $('h2').slideToggle("slow");
  });
  $('.stop').click(function () {
    $('h2').stop();
  });
  $('.an').click(function () {
    $('h2').animate({ left: '250px' });;
  });
  $("input").blur(function () {
    alert("This input field has lost its focus.");
  });
  $('.i').change(function () {
    alert("The text has been changed.");
  });
  $("h3").dblclick(function () {
    alert("The paragraph was double-clicked.");
  });
  $('.i1').focus(function () {
    $("span").css("display", "inline").fadeOut(2000);
  });
  $('.d2').focusin(function () {
    $(this).css("background-color", "#FFFFCC");
  });
  $('.d2').focusout(function () {
    $(this).css("background-color", "#FFFFFF");
  });
  $('.p1').hover(function () {
    $(this).css("background-color", "yellow");
  }, function () {
    $(this).css("background-color", "pink");
  });
  $('.d3').mouseup(function () {
    $(this).after("<p style='color:green;'>Mouse button released.</p>");
  });
  $('.d3').mousedown(function () {
    $(this).after("<p style='color:purple;'>Mouse button pressed down.</p>");
  });
});

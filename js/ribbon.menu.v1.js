$(document).ready(function () {

$('nav ul span.navafter').css('width', '280px');
$("nav ul li").eq(5).children('a:link').hover(function () {
              $('nav ul span.navafter').css('width', '262px');
            }, function () {
               $('nav ul span.navafter').delay(3000).css('width', '280px');
  });
  
  
});

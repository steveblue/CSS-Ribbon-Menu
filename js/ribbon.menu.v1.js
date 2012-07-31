$(document).ready(function () {

/*
Changes the width of .navafter (the ribbon after the nav buttons) when the last-child li is pressed. I chose to use eq method instead 
of last-child b/c it's a more reliable selector.

If this wasn't corrected, the nav menu would overflow. Change the width and eq() accordingly when you add and subtract buttons. This also can be down programmatically, but loads slow. 

Currently bugs out if you hover over the :before skewed depth of the last-child li element. Not a big deal, but kinda annoying.
*/

var deviceAgent = navigator.userAgent.toLowerCase();
var initWidth, hoverWidth, fixRight; 

if ($.browser.mozilla && $.browser.version >= "1.8") { 
  initWidth = 277;
	hoverWidth = 259; 
  fixRight = 1;
  }
else if (deviceAgent.match(/(iphone|ipod|ipad)/)){
 	initWidth = 277;
	hoverWidth = 259; 
  fixRight = 1;
  }
else {
  initWidth = 280;
	hoverWidth = 262;  
  fixRight = 0;
}

$('nav ul span.navafter').css('width', initWidth + 'px');
$('nav ul span.navafter').css('right', fixRight + 'px');
$("nav ul li").eq(5).children('a:link').hover(function () {
              $('nav ul span.navafter').css('width', hoverWidth + 'px');
            }, function () {
               $('nav ul span.navafter').css('width', initWidth + 'px');
  });

  
  
});

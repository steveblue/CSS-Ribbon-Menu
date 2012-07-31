Pure CSS3 Ribbon Menu 
http://stephenbelovarich.com
v1.2b1 | 201207
NOTE:WORK IN PROGRESS
USE WITH CAUTION, ADAPT TO YOUR LAYOUT

This ribbon menu is different than most. It includes a cool 3D hover effect that can also be made :active, making it look pressed down. 


v 1.1 

fixed FF13 and iOS bug that dropped .navafter below the ribbon, good for keeping the 3D illusion.

removed box-shadow from nav ul, was making a hairline horizontal impression on the top of each pressed down nav element.

added gradients to .navbefore and .navafter to emphasize their depth against the background cut out ends

removed reset, b/c codepen includes it now

v 1.0

CSS3 Transforms! The buttons are just begging to be animated.

CSS3 Gradients! Hover over a button to see what I mean.

Depth while hovering is created using pseudo elements, transform and gradients.

When the nav is directed to content on a single page layout on iPad the default behavior keeps touched buttons pressed down. You could make an active pseudo class to keep the active button pressed when the user is viewing content.

Lots of pseudo elements! Whoo hoo! Which means older versions of IE can't handle it. But then again, it says CSS3 Ribbon Menu

Eric Meyer's RESET used, just b/c its always in my CSS so included it here to make sure everything works. *REMOVED in v1.1

Well commented so you can learn how it was made.


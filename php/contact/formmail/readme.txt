PHP FormMail v1.2.3, Copyright (c) 2003 LAMP Host
Matt Brown <mattbrown@lamphost.net>

INSTALL
1. Put the file formmail.php in your web directory.
2. Create a form that points to formmail.php.
   See usage.html for details on required and special form variables.

USAGE
See the included usage.html file.

NOTES
multiple recipients can not contain line breaks

TODO
add style_sheet tag
add banlist
add file upload support

CHANGELOG
--
Version 1.2.3
June 18 2003
added check for magic_quotes_gpc. if set then stripslashes on all form data
thanks to Sheryl Canter of Permutations Software for the suggestion

Version 1.2.2
May 22 2003
added list of methods comment near top of class
added checks for empty values in $referer and $referers_array in the check_referer() method
thanks to Sheryl Canter of Permutations Software for the suggestion

Version 1.2.1
Apr 21 2003
added line_spacing field - allows user to specify
the number of empty lines between name value pairs in the results email.

Version 1.2
Feb 12 2003
added cc_email field - allows option to email copy of form to person who fills it out form
thanks to Michael Hand for the suggestion.

Version 1.1
Aug 22 2002

changed default $referers_array to be equal to $_SERVER["HTTP_HOST"]
Thanks to Daniel Von Fange for the suggestion.

set_arrays(): added "strtolower" to all $config_vars_array index names.
This makes form element naming case insensitive.

send_form(): added ability to handle array elements from the submitted form.

check_referer(): This function now checks for https (as well as http) connections from the $referers_array

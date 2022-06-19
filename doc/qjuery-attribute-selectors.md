In this video we will discuss
Attribute Equals Selector [name="value"]
Attribute Not Equal Selector [name!="value"]
Attribute Contains Selector [name*="value"]
Attribute Contains Word Selector [name~="value"]
Attribute Contains Prefix Selector [name|="value"]
Attribute Starts With Selector [name^="value"]
Attribute Ends With Selector [name$="value"]

This is continuation to Part 7, please watch Part 7 before proceeding.

$('[title="div1Title"]') // Selects all elements that have title attribute value equal to div1Title
$('[title!="div1Title"]') // Selects all elements that have title attribute value not equal to div1Title
$('[title*="Title"]') // Selects all elements that have title attribute value containing the given substring - Title
$('[title~="mySpan"]') // Selects all elements that have title attribute value containing the given word - mySpan, delimited by spaces
$('[title|="myTitle"]') // Selects all elements that have title attribute value equal to myTitle or starting with myTitle followed by a hyphen (-)
$('[title^="div"]') // Selects all elements that have title attribute value starting with div
$('[title$="Heading"]') // Selects all elements that have title attribute value ending with Heading

Selects all elements that have title attribute value equal to div1Title and sets 5px solid red border
[html]
[head]
[title][/title]
[script src="Scripts/jquery-1.11.2.js"][/script]
[script type="text/javascript"]
$(document).ready(function () {
$('[title="div1Title"]').css('border', '5px solid red');
});
[/script]
[/head]
[body]
[div title="div1Title"]
DIV 1
[/div]
[br /]
[div title="div2Title"]
DIV 2
[/div]
[p title="myTitle-paragraph"]
This is a paragraph
[/p]
[p title="myTitleHeading"]
This is a paragraph
[/p]
[span title="div1Title"]
SAPN 1
[/span]
[br /][br /]
[span title="mySpan Heading"]
SPAN 2
[/span]
[/body]
[/html]

Selects all div elements that have title attribute value not equal to div1Title and sets 5px solid red border
[script type="text/javascript"]
$(document).ready(function () {
$('div[title!="div1Title"]').css('border', '5px solid red');
});
[/script]

THIS IS
$('div[title!="div1Title"]').css('border', '5px solid red');
EQUIVALENT TO
$('div:not([title="div1Title"])').css('border', '5px solid red');

Selects all elements that have title attribute value containing the given substring - Title, and sets 5px solid red border
[script type="text/javascript"]
$(document).ready(function () {
$('[title*="Title"]').css('border', '5px solid red');
});
[/script]

Selects all elements that have title attribute value containing the given word - mySpan, delimited by spaces, and sets 5px solid red border
[script type="text/javascript"]
$(document).ready(function () {
$('[title~="mySpan"]').css('border', '5px solid red');
});
[/script]

Selects all elements that have title attribute value equal to myTitle or starting with myTitle followed by a hyphen (-) and sets 5px solid red border
[script type="text/javascript"]
$(document).ready(function () {
$('[title|="myTitle"]').css('border', '5px solid red');
});
[/script]

Selects all elements that have title attribute value starting with div and sets 5px solid red border
[script type="text/javascript"]
$(document).ready(function () {
$('[title^="div"]').css('border', '5px solid red');
});
[/script]

Selects all elements that have title attribute value ending with Heading and sets 5px solid red border
[script type="text/javascript"]
$(document).ready(function () {
$('[title$="Heading"]').css('border', '5px solid red');
});
[/script]



&lt;html&gt;
&lt;head&gt;
&lt;title&gt;&lt;/title&gt;
&lt;script src="jquery-1.11.2.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body style="font-family:Arial"&gt;
First Name : &lt;input type="text" value="John" /&gt;
&lt;br /&gt;&lt;br /&gt;
Last Name : &lt;input type="text" value="Major" /&gt;
&lt;br /&gt;&lt;br /&gt;
Gender :
&lt;input type="radio" name="gender" checked="checked" value="Male"&gt;Male
&lt;input type="radio" name="gender" value="Female"&gt;Female
&lt;br /&gt;&lt;br /&gt;
Skills :
&lt;input type="checkbox" name="skills" checked="checked" value="JavaScript" /&gt;JavaScript
&lt;input type="checkbox" name="skills" checked="checked" value="jQuery" /&gt;jQuery
&lt;input type="checkbox" name="skills" value="C#" /&gt;C#
&lt;br /&gt;&lt;br /&gt;
Country:
&lt;select&gt;
&lt;option selected="selected" value="USA"&gt;USA&lt;/option&gt;
&lt;option value="India"&gt;India&lt;/option&gt;
&lt;option value="UK"&gt;UK&lt;/option&gt;
&lt;/select&gt;
&lt;br /&gt;&lt;br /&gt;
Summary :
&lt;br /&gt;
&lt;textarea&gt;I am a Senior Dot Net Developer with 10 years experience&lt;/textarea&gt;
&lt;br /&gt;&lt;br /&gt;
&lt;input type="submit" value="submit" /&gt;
&lt;/body&gt;
&lt;/html&gt;

Now we want to get the text value from all the textboxes. On this page we have 2 textboxes
1. First Name
2. Last Name

jQuery code to get textbox value using $(input)
&lt;script type="text/javascript"&gt;
$(document).ready(function () {
$('input[type="text"]').each(function () {
alert($(this).val());
});
});
&lt;/script&gt;

jQuery code to get textbox value using $(:input)
&lt;script type="text/javascript"&gt;
$(document).ready(function () {
$(':input[type="text"]').each(function () {
alert($(this).val());
});
});
&lt;/script&gt;
//input selectors
Which one is better for performance $('input[type="text"]') or $(':input[type="text"]')
$('input[type="text"]') is better for performance over $(':input[type="text"]'). This is because $(':input[type="text"]') needs to scan all input elements, textarea, select etc, where as $('input[type="text"]') scans only input elements. So if you want to find elements with an input tag, it is always better to use $('input[type="text"]') over $(':input[type="text"]')
# Jquery CSS

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>height demo</title>
  <style>
  div {
    width: 50px;
    height: 70px;
    float: left;
    margin: 5px;
    background: rgb(255,140,0);
    cursor: pointer;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
</head>
<body>
 
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
 
<script>
$( "div" ).one( "click", function() {
  $( this ).height( 30 ).css({
    cursor: "auto",
    backgroundColor: "green"
  });
});
</script>
 
</body>
</html>
```
simple example with inner height
```javascript
var modHeight = 70;
$( "div" ).one( "click", function() {
  $( this ).innerHeight( modHeight ).addClass( "mod" );
  modHeight -= 8;
});
```

Simple example if innerWidth
```javascript
var modWidth = 60;
$( "div" ).one( "click", function() {
$( this ).innerWidth( modWidth ).addClass( "mod" );
modWidth -= 8;
});

```

## jQuery.escapeSelector() 
This method is useful for situations where a class name or an ID contains characters that have a special meaning in CSS, such as the dot or the semicolon.

```javascript
$.escapeSelector( "#target" ); // "\#target"

$( "div" ).find( "." + $.escapeSelector( ".box" ) );
```
## .offset()

Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.

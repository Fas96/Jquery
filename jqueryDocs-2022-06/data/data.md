# Data  
These methods allow us to associate arbitrary data with specific DOM elements.

 
### .clearQueue()
Remove from the queue all items that have not yet been run.

`When the .clearQueue() method is called, all functions on the queue that have not been executed are removed from the queue. When used without an argument, 
.clearQueue() removes the remaining functions from fx, the standard effects queue. In this way it is similar to .stop(true). 
However, while the .stop() method is meant to be used only with animations, .clearQueue() can also be used to remove any function that has been added to a
generic jQuery queue with the .queue() method.`
 
### .data()
Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements.
```javascript
$( "body" ).data( "foo", 52 );
$( "body" ).data( "bar", { isManual: true } );
$( "body" ).data( { baz: [ 1, 2, 3 ] } );
$( "body" ).data( "foo" ); // 52
$( "body" ).data(); // { foo: 52, bar: { isManual: true }, baz: [ 1, 2, 3 ] }
```

We can check or associate date to a dom element.
```javascript
<div data-role="page" data-last-value="43" data-hidden="true" data-options='{"name":"John"}'></div>
//in javascript the can give us this kinda values
$( "div" ).data( "role" ) === "page";
$( "div" ).data( "lastValue" ) === 43;
$( "div" ).data( "hidden" ) === true;
$( "div" ).data( "options" ).name === "John";
```
 
### .dequeue()
Execute the next function on the queue for the matched elements.
 
### jQuery.data()
Store arbitrary data associated with the specified element and/or return the value that was set.

 
### jQuery.dequeue()
Execute the next function on the queue for the matched element.

### jQuery.hasData()
Determine whether an element has any jQuery data associated with it.
```html

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.hasData demo</title>
  <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
</head>
<body>
 
<p>Results: </p>
 
<script>
var $p = jQuery( "p" ), p = $p[ 0 ];
$p.append( jQuery.hasData( p ) + " " ); // false
 
$.data( p, "testing", 123 );
$p.append( jQuery.hasData( p ) + " " ); // true
 
$.removeData( p, "testing" );
$p.append( jQuery.hasData( p ) + " " ); // false
 
$p.on( "click", function() {} );
$p.append( jQuery.hasData( p ) + " " ); // true
 
$p.off( "click" );
$p.append( jQuery.hasData( p ) + " " ); // false
</script>
 
</body>
</html>

```
 
### jQuery.queue()
Show or manipulate the queue of functions to be executed on the matched element.
 
### jQuery.removeData()
Remove a previously-stored piece of data.
 
### .queue()
Show or manipulate the queue of functions to be executed on the matched elements.
 
### .removeData()
Remove a previously-stored piece of data.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>removeData demo</title>
  <style>
  div {
    margin: 2px;
    color: blue;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
</head>
<body>
 
<div>value1 before creation: <span></span></div>
<div>value1 after creation: <span></span></div>
<div>value1 after removal: <span></span></div>
<div>value2 after removal: <span></span></div>
 
<script>
$( "span" ).eq( 0 ).text( "" + $( "div" ).data( "test1" ) );
$( "div" ).data( "test1", "VALUE-1" );
$( "div" ).data( "test2", "VALUE-2" );
$( "span" ).eq( 1 ).text( "" + $( "div").data( "test1" ) );
$( "div" ).removeData( "test1" );
$( "span" ).eq( 2 ).text( "" + $( "div" ).data( "test1" ) );
$( "span" ).eq( 3 ).text( "" + $( "div" ).data( "test2" ) );
</script>
 
</body>
</html>
```
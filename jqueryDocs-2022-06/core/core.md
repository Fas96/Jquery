# Core

## jQuery()
Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.
 
## jQuery.holdReady()
Holds or releases the execution of jQuery’s ready event.

 
## jQuery.noConflict()
Relinquish jQuery’s control of the $ variable.
Load two versions of jQuery (not recommended). Then, restore jQuery's globally scoped variables to the first loaded jQuery.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.noConflict demo</title>
  <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
</head>
<body>
 
<div id="log">
  <h3>Before $.noConflict(true)</h3>
</div>
<script src="https://code.jquery.com/jquery-1.6.2.js"></script>
 
<script>
var $log = $( "#log" );
 
$log.append( "2nd loaded jQuery version ($): " + $.fn.jquery + "<br>" );
 
// Restore globally scoped jQuery variables to the first version loaded
// (the newer version)
 
jq162 = jQuery.noConflict( true );
 
$log.append( "<h3>After $.noConflict(true)</h3>" );
$log.append( "1st loaded jQuery version ($): " + $.fn.jquery + "<br>" );
$log.append( "2nd loaded jQuery version (jq162): " + jq162.fn.jquery + "<br>" );
</script>
 
</body>
</html>
```

 
## jQuery.ready
A Promise-like object (or “thenable”) that resolves when the document is ready.

```javascript
$.when(
  $.getJSON( "ajax/test.json" ),
  $.ready
).done(function( data ) {
  // Document is ready.
  // Value of test.json is passed as `data`.
}).fail(function (arg1, err, jqXHR) {
    console.log('result : ', arg1);
    console.log('err : ', err);
    console.log('response object : ', jqXHR);
});
```


## jQuery.readyException()
Handles errors thrown synchronously in functions wrapped in jQuery().
 
## jQuery.sub()
Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object.
 
## jQuery.when()
Provides a way to execute callback functions based on zero or more Thenable objects, usually Deferred objects that represent asynchronous events.
```javascript
$.when( $.ajax( "test.aspx" ) ).then(function( data, textStatus, jqXHR ) {
  alert( jqXHR.status ); // Alerts 200
});

$.when( { testing: 123 } ).done(function( x ) {
    alert( x.testing ); // Alerts "123"
});


/deffered was resolve
var d1 = $.Deferred();
var d2 = $.Deferred();
var d3 = $.Deferred();

$.when( d1, d2, d3 ).done(function ( v1, v2, v3 ) {
    console.log( v1 ); // v1 is undefined
    console.log( v2 ); // v2 is "abc"
    console.log( v3 ); // v3 is an array [ 1, 2, 3, 4, 5 ]
});

d1.resolve();
d2.resolve( "abc" );
d3.resolve( 1, 2, 3, 4, 5 );


// we can make calls to two or more ajax objects
//Execute a function after two Ajax requests are successful.
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) ).done(function( a1, a2 ) {
    // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
    // Each argument is an array with the following structure: [ data, statusText, jqXHR ]
    var data = a1[ 0 ] + a2[ 0 ]; // a1[ 0 ] = "Whip", a2[ 0 ] = " It"
    if ( /Whip It/.test( data ) ) {
        alert( "We got what we came for!" );
    }
})   .fail(function (arg1, err, jqXHR) {
    console.log('result : ', arg1);
    console.log('err : ', err);
    console.log('response object : ', jqXHR);
});

```
Execute the function myFunc when both ajax requests are successful, or myFailure if either one has an error.

```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) )
  .then( myFunc, myFailure );
```
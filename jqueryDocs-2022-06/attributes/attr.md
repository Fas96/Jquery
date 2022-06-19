# Attributes

### These methods get and set DOM attributes of elements.

### .addClass()
Adds the specified class(es) to each element in the set of matched elements.
```javascript
$( "p" ).addClass( "myClass yourClass" );

// we can add array of classes
$( "p" ).last().addClass( [ "selected", "highlight" ] );
//we can remove or add
$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );


// we can check the current class applied to the element
$( "div" ).addClass(function( index, currentClass ) {
    var addedClass;

    if ( currentClass === "red" ) {
        addedClass = "green";
        $( "p" ).text( "There is one green div" );
    }

    return addedClass;
});
```

 
### .attr()
Get the value of an attribute for the FIRST element in the set of matched elements or set one or more attributes for every matched element.
```javascript
//getting attributes
var title = $( "em" ).attr( "title" );
$( "div" ).text( title );
//setting multi attr for a div element
// 
$( "img" ).attr({
  src: "/resources/hat.gif",
  title: "jQuery",
  alt: "jQuery Logo"
});
$( "div" ).text( $( "img" ).attr( "alt" ) );

//setting attributes for multi elements and getting them
$( "div" )
    .attr( "id", function( arr ) {
        return "div-id" + arr;
    })
    .each(function() {
        $( "span", this ).html( "(id = '<b>" + this.id + "</b>')" );
    });

```
 
### .hasClass()
Determine whether any of the matched elements are assigned the given class.
```javascript
<div id="mydiv" class="foo bar"></div>
$( "#mydiv" ).hasClass( "quux" ) //returns false

```
 
### .html()
let the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.

 
### .prop()
Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
The .prop() method is a convenient way to set the value of properties
```javascript
$( "input" ).prop( "disabled", false );
$( "input" ).prop( "checked", true );
$( "input" ).val( "someValue" );

// we can set a prop to disable check boxes 
$( "input[type='checkbox']" ).prop({
    disabled: true
});
```

### .removeAttr()
remove an attribute from each element in the set of matched elements.
```javascript

var inputTitle = $( "input" ).attr( "title" );
  $( "button" ).click(function() {
    var input = $( this ).next();
 
    if ( input.attr( "title" ) === inputTitle ) {
      input.removeAttr( "title" )
    } else {
      input.attr( "title", inputTitle );
    });
 
```

### .removeClass()
remove a single class, multiple classes, or all classes from each element in the set of matched elements.
```javascript
  $( "p" ).odd().removeClass( [ "blue", "under" ] );

//
$( "p" ).eq( 1 ).removeClass();
```
 
### .removeProp()
remove a property for the set of matched elements.
We can simply remove specific properties from a dom element.
```javascript
para = $( "p" );
para
  .prop( "luggageCode", 1234 )
  .append( "The secret luggage code is: ", String( para.prop( "luggageCode" ) ), ". " )
  .removeProp( "luggageCode" )
  .append( "Now the secret luggage code is: ", String( para.prop( "luggageCode" ) ), ". " );
```

 
### .toggleClass()
Add or remove one or more classes from each element in the set of matched elements, depending on either the class’s presence or the value of the state argument.
```javascript
var count = 0;
$( "p" ).each(function() {
  var $thisParagraph = $( this );
  var count = 0;
  $thisParagraph.click(function() {
    count++;
    $thisParagraph.find( "span" ).text( "clicks: " + count );
    $thisParagraph.toggleClass( "highlight", count % 3 === 0 );
  });
});
```
 
### .val()
the current value of the first element in the set of matched elements or set the value of every matched element.


```javascript
// Get the value from the selected option in a dropdown
$( "select#foo option:checked" ).val();
 
// Get the value from a dropdown select directly
$( "select#foo" ).val();
 
// Get the value from a checked checkbox
$( "input[type=checkbox][name=bar]:checked" ).val();
 
// Get the value from a set of radio buttons
$( "input[type=radio][name=baz]:checked" ).val();
```
## Category: Ajax
Load data from the server without a browser page refresh.

###    .ajaxComplete()
Register a handler to be called when Ajax requests complete. This is an AjaxEvent.
```javascript
 $( document ).ajaxComplete(function( event, request, settings ) {
        console.log(event)
        console.log(request)
        console.log(settings)
        $( ".log" ).append( "<li>Request Complete.</li>" );
    });
```

###    .ajaxError()
Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
```javascript

    //always run when an ajax call on page returns an error
    $( document ).ajaxError(function() {
        $( ".log" ).text( "Triggered ajaxError handler." );
    });
```
    
###     .ajaxSend()
Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
```javascript

 //executes before an ajax request is sent
    // does not execute if the ajaxError is called
    $( document ).ajaxSend(function( event, jqxhr, settings ) {
        if ( settings.url === "https://jsonplaceholder.typicode.com/todos/1" ) {
            $( ".log" ).text( "Triggered ajaxSend handler." );
        }
    });
```
    
###     .ajaxStart()
Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
```javascript

    //this called when an ajax request starts on page
    //its the first method called when ajax method starts
    $( document ).ajaxStart(function() {
       alert("Ajax request started")
    });
```



###     .ajaxSuccess()
Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.
```javascript
 // This is only called when an ajax request completes successfully
    // occurs before the ajax stop event. ~ After successful completion of a request then the request stops
    $( document ).ajaxSuccess(function( event, xhr, settings ) {
        console.log("request completed successfully")
        if ( settings.url === "ajax/test.html" ) {
            $( ".log" ).text( "Triggered ajaxSuccess handler. The Ajax response was: " +
                xhr.responseText );
        }
    });
```
 
###     .ajaxStop()
Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.

```javascript

   //it is called when all ajax request is completed
    $( document ).ajaxStop(function() {
        // $( "" ).hide();
        alert("All ajax request is completed")
        console.log("This is when all ajax request on a page is completed")
    });
```

    
###  jQuery.ajax()
Perform an asynchronous HTTP (Ajax) request.
```javascript
 $("#callBodyBtn").on('click',()=>{
    // alert("im called")

    $.ajax({
        async:true,
        url: "https://jsonplaceholder.typicode.com/todos/1",
        beforeSend: function( xhr ) {
            xhr.overrideMimeType( "text/plain; charset=UTF-8" );
        }
    })
        .done(function( data, textStatus, jqXHR ) {
            alert(jqXHR)
            if ( data ) {
                alert( "Sample of data:");
            }
        });

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        context: document.body,
        beforeSend: function(){
            // Handle the beforeSend event
        },
        complete: function(){
            // Handle the complete event
        },
        // ......
        ajaxSend: function (){

        },
        success: function (res) {
            console.log("+++++++++++++++++")
            console.log("+++++++++++++++++")
            console.log(res)
        },
        ajaxSuccess: function () {

        },
        error: function () {
            alert("There was an error")
        },
        ajaxError: function (error) {
            alert(error)
        },
        ajaxComplete:function (event, request, settings) {
            $( this ).addClass( "done" );
            alert(event)
        }
        ,
        ajaxStop: function () {
            //if all no more ajax request are being sent
            console.log("The ajax request stopped")
        }
    });

})
```
    
### jQuery.ajaxPrefilter()
Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().

    
###  jQuery.ajaxSetup()
Set default values for future Ajax requests. Its use is not recommended.

    
###  jQuery.ajaxTransport()
Creates an object that handles the actual transmission of Ajax data.

    
###  jQuery.get()
Load data from the server using a HTTP GET request.
All properties except for url are optional

```javascript
$.get( "ajax/test.html", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
});
//as of jquery 1.5
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( "example.php", function() {
    alert( "success" );
})
    .done(function() {
        alert( "second success" );
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        alert( "finished" );
    });

// Perform other work here ...

// Set another completion function for the request above
jqxhr.always(function() {
    alert( "second finished" );
});
//end of jquery 1.5
$.ajax({
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
```
    
###  jQuery.getJSON()
Load JSON-encoded data from the server using a GET HTTP request.
```javascript
$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});

// is similar to the getJSON method
$.getJSON( "/Users/fasbhim/Documents/2022/PersonalFiles/jqueryStudy/JqueryStudy/ajax-tree-plain.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );
});
```
    
###  jQuery.getScript()
Load a JavaScript file from the server using a GET HTTP request, then execute it.
```javascript
     $.getScript( "ajax.js", function( data, textStatus, jqxhr ) {
            console.log( data ); // Data returned
            console.log( textStatus ); // Success
            console.log( jqxhr.status ); // 200
            console.log( "Load was performed." );
        });
```
  
###  jQuery.param()
Create a serialized representation of an array, a plain object, or a jQuery object suitable for use in a URL query string or Ajax request. In case a jQuery object is passed, it should contain input elements with name/value properties.
```javascript

      var myObject = {
            a: {
                one: 1,
                two: 2,
                three: 3
            },
            b: [ 1, 2, 3 ]
        };
        let recursiveEncoded = $.param( myObject );
        let recursiveDecoded = decodeURIComponent( $.param( myObject ) );

        console.log( recursiveEncoded );
        console.log( recursiveDecoded );
        let myObjecta = {
            a: {
                one: 1,
                two: 2,
                three: 3
            },
            b: [ 1, 2, 3 ]
        };
        let shallowEncoded = $.param( myObjecta, true );
        let shallowDecoded = decodeURIComponent( shallowEncoded );

        console.log( shallowEncoded );
        console.log( shallowDecoded );
        
        //padding objects as params
      $.param({ a: [ 2, 3, 4 ] }); // "a=2&a=3&a=4"
      // >=1.4:
      $.param({ a: [ 2, 3, 4 ] }); // "a[]=2&a[]=3&a[]=4"

      // <=1.3.2:
      $.param({ a: { b: 1, c: 2 }, d: [ 3, 4, { e: 5 } ] });
      // "a=[object+Object]&d=3&d=4&d=[object+Object]"

      // >=1.4:
      $.param({ a: { b: 1, c: 2 }, d: [ 3, 4, { e: 5 } ] });
      // "a[b]=1&a[c]=2&d[]=3&d[]=4&d[2][e]=5"
```
    
###  jQuery.post()
Send data to the server using a HTTP POST request.
```javascript
//the shorthand syntax
$.ajax({
  type: "POST",
  url: url,
  data: data,
  success: success,
  dataType: dataType
});


// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.post( "example.php", function() {
    alert( "success" );
})
    .done(function() {
        alert( "second success" );
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        alert( "finished" );
    });

// Perform other work here ...

// Set another completion function for the request above
jqxhr.always(function() {
    alert( "second finished" );
});

//Send form data using Ajax requests
$.post( "test.php", { name: "John", time: "2pm" })
    .done(function( data ) {
        alert( "Data Loaded: " + data );
    });
```
    
###    .load()
Load data from the server and place the returned HTML into the matched elements.

```javascript
//we can load a whole page
$( "#a" ).load( "article.html" );
//load part of a page
$( "#b" ).load( "article.html #target" );

```
    
###    .serialize()
Encode a set of form elements as a string for submission.
```javascript
$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $( this ).serialize() );
});
```
    
###     .serializeArray()
Encode a set of form elements as an array of names and values.
```javascript

$( "form" ).submit(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});

/*[
  {
    name: "a",
    value: "1"
  } ,
  {
    name: "d",
    value: "4"
  },
  {
    name: "e",
    value: "5"
  }
]*/
```

## Ajax Global Events Handlers
These methods register handlers to be called when certain events, such as initialization or completion, take place for any Ajax request on the page.
* .ajaxComplete()
* .ajaxError()
* .ajaxSend()
* .ajaxStart()
* .ajaxStop()
* .ajaxSuccess()

##  Helper Functions
* jQuery.param()
* .serialize()
* .serializeArray()

## Shorthand Methods
* jQuery.get()
* jQuery.getJSON()
* jQuery.getScript()
* jQuery.post()
* .load()



//ajaxComplete is always called when ajax method is completed on a page

$().ready(function () {
    $( document ).ajaxComplete(function( event, request, settings ) {
        console.log(event)
        console.log(request)
        console.log(settings)
        $( ".log" ).append( "<li>Request Complete.</li>" );
    });

    $( ".trigger" ).click(function() {
        $( ".result" ).load("https://jsonplaceholder.typicode.com/todos/1" );
    });

    //always run when an ajax call on page returns an error
    $( document ).ajaxError(function() {
        $( ".log" ).text( "Triggered ajaxError handler." );
    });

    //executes before an ajax request is sent
    // does not execute if the ajaxError is called
    $( document ).ajaxSend(function( event, jqxhr, settings ) {
        if ( settings.url === "https://jsonplaceholder.typicode.com/todos/1" ) {
            $( ".log" ).text( "Triggered ajaxSend handler." );
        }
    });


    //this called when an ajax request starts on page
    //its the first method called when ajax method starts
    $( document ).ajaxStart(function() {
       console.log("Ajax request started")
    });


    //it is called when all ajax request is completed
    $( document ).ajaxStop(function() {
        // $( "" ).hide();
        // alert("All ajax request is completed")
        console.log("This is when all ajax request on a page is completed")
    });

    // This is only called when an ajax request completes successfully
    // occurs before the ajax stop event. ~ After successful completion of a request then the request stops
    $( document ).ajaxSuccess(function( event, xhr, settings ) {
        console.log("request completed successfully")
        if ( settings.url === "ajax/test.html" ) {
            $( ".log" ).text( "Triggered ajaxSuccess handler. The Ajax response was: " +
                xhr.responseText );
        }
    });



    $("#callBodyBtn").on('click',()=>{
        // alert("im called")
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

        console.log("Fas: Testing")
        let res=$.get( "https://jsonplaceholder.typicode.com/todos/1", { "choices[]": ["Jon", "Susan"] } )
       res.done(function( data ) {
            console.log( "Data Loaded: " + data );
        });
        console.log("Fas: Testing")

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


})
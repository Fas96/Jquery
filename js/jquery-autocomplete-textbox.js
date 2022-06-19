$().ready(function (){
//
//
//     $.ajax({
//         url: 'https://code.jquery.com/ui/1.13.1/jquery-ui.js',
//         dataType: 'script',
//         cache: true,
//         success: function() {
//
//         }
//     });

    // $("ol","li" ).appendTo("body");
    for (const number of [1, 2, 2, 3, 4]) {
        $("<li/>", {class: "fas-stylesheet: "+number, id: "fas", text: "//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css:"+number}).appendTo("ol[class='user-Links']");
    }


    //date picker
    $( "#datepicker" ).datepicker();
    $( "#accordion" ).accordion();

    $("div[role=status] div").css("visibility","hidden")
    let availableTags = []
    loadGithubUser()

    console.log(availableTags)

    function split( val ) {
        return val.split( /,\s*/ );
    }
    function extractLast( term ) {
        return split( term ).pop();
    }

    $( "#tags" )
        // don't navigate away from the field on tab when selecting an item
        .on( "keydown", function( event ) {
            if ( event.keyCode === $.ui.keyCode.TAB &&
                $( this ).autocomplete( "instance" ).menu.active ) {
                event.preventDefault();
            }
        })
        .autocomplete({
            minLength: 1,
            source: function( request, response ) {
                // delegate back to autocomplete, but extract the last term
                response( $.ui.autocomplete.filter(
                    availableTags, extractLast( request.term ) ) );
            },
            focus: function() {
                // prevent value inserted on focus
                $(this).autocomplete("search");
                return true;
            },
            select: function( event, ui ) {
                var terms = split( this.value );
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push( ui.item.value );
                // add placeholder to get the comma-and-space at the end
                terms.push( "" );
                this.value = terms.join( ", " );
                return false;
            }


        });



    function loadGithubUser() {
        $.ajax({
            url: 'https://api.github.com/users',
            method: 'get',
            dataType: "json",
            success: function (data) {
                $(data).each(function (index, user) {availableTags.push(user.login);});
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

})
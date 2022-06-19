$().ready(function () {



    $.ajax({
        type: 'GET',
        url: "http://49.247.26.215:8080/alfresco/s/r2dr/peldata/list?pel_type=OM",
        contentType: "application/json; charset=utf-8",


        crossDomain:true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa('YWRtaW46YWRtaW4=' + ":" + 'YWRtaW46YWRtaW4='));
        },
        dataType: 'application/json'


    }) .done(function() {
        alert( "success" );
    })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            alert( "complete" );
        });


})
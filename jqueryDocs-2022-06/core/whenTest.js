// https://api.jquery.com/category/core/
$().ready(function () {
    $("button").on("click",useWhenToFetchBothData)
    function useWhenToFetchBothData(){
        $.when( $.ajax( "https://jsonplaceholder.typicode.com/todos/1" ), $.ajax( "https://jsonplaceholder.typicode.com/users" ) ).done(function( a1, a2 ) {

            let data = a1[ 0 ] + a2[ 0 ];
            if (data)  {
                console.log(a1)
                console.log(a1)
            }
        }) .fail(function (arg1, err, jqXHR) {
            console.log('result : ', arg1);
            console.log('err : ', err);
            console.log('response object : ', jqXHR);
        }).then( executeWhenBothIsSuccess, executeEvenIfOneFails );
    }

    function executeWhenBothIsSuccess(){
        alert("Both was success")
    }
    function executeEvenIfOneFails(){
        alert("one or Both failed")
    }

})
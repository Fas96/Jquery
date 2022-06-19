$().ready(function () {

    $("input[type='checkbox']").button({
        icons:{
            primary: 'ui-icon-disk',
            secondary: 'ui-icon-calculator'
        }
    }).on('click',function () {
       alert($(this).is(":checked")?"The button "+$(this).attr("id")+" is checked":"The button "+$(this).attr("id")+" is NOT checked")
    });

    $("input[type=button],input[type=submit],a").button({
        icons:{
            primary: 'ui-icon-disk',
            secondary: ' ui-icon-calculator'
        }
    })

    //radio buttons
    $('#radioButtons').buttonset();
    $('#radioButtons input[type="radio"]').click(function () {
        alert($(this).attr('id') + ' radio button selected')
    });
})
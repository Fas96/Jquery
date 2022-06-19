$(document).ready(function () {
    // $('#btnClickMe').on('click mouseover mouseout', function (event) {
    //     if (event.type == 'click') {
    //         $('#divResult').html('Button Clicked at ' + 'X = '
    //             + event.pageX + ' Y = ' + event.pageY);
    //     }
    //     else if (event.type == 'mouseover') {
    //         $(this).addClass('ButtonStyle');
    //     }
    //     else {
    //         $(this).removeClass('ButtonStyle');
    //     }
    // });

    $('#btnClickMe').on({
        click: ()=>{  $('#divResult').html('Button Clicked at ' + 'X = '
            + event.pageX + ' Y = ' + event.pageY); },
        mouseover: ()=>{  $(this).addClass('ButtonStyle');},
        mouseout: ()=>{ $(this).removeClass('ButtonStyle');},
    })



    $('#btnEnableMouseOverEffect').click(function () {
        $('#btnClickMe').on('mouseover', function () {
            $(this).addClass('ButtonStyle');
        });
    });

    $('#btnDisableMouseOverEffect').click(function () {
        $('#btnClickMe').off('mouseover');
    });
});
$(document).ready(function () {
    //event bubling occurs from parent to child elements. so only selector is getting the event
    $('ul').on('click', 'li', function () {
        $(this).fadeOut(500);
    });

    $('#btnAdd').on('click', function () {
        $('ul').append('<li>New List Item</li>');
    });
});
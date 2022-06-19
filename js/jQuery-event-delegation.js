$().ready(function () {
    $('ul').delegate('li', 'click', function () {
        $(this).fadeOut(500);
    });

    $('#btnAdd').on('click', function () {
        $('ul').append('<li>New List Item</li>');
    });
})
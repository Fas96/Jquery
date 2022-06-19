$().ready(function () {
    $('#menu').menu({
        icons: { button: 'ui-icon-circle-arrow-e' },
        width: 200,
        select: function (event, ui) {
           alert(ui.item.val)
        }

        }

    );
})
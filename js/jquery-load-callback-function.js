$(document).ready(function () {
    var textBoxes = $('input[type="text"]');
    textBoxes.focus(function () {
        var helpDiv = $(this).attr('id');
        $('#' + helpDiv + 'HelpDiv').load('jquery-load-callback-function.html td:even()', { HelpTextKey: helpDiv },
            function (response, status, xhr) {
                if (status == 'error') {
                    var errorMessage = 'status : ' + xhr.status + '<br/>';
                    errorMessage += 'status text : ' + xhr.statusText + '<br/>';
                    errorMessage += 'response : ' + response;
                    $('#divError').html(errorMessage);
                }

            });
    });

    textBoxes.blur(function () {
        var helpDiv = $(this).attr('id') + 'HelpDiv';
        $('#' + helpDiv).html('');
    });
});
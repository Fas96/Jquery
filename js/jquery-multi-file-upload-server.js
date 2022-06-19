$(document).ready(function () {
    $("#btnUpload").click(function (event) {
        let files = $("#FileUpload1")[0].files;
        if (files.length > 0) {
            let formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append(files[i].name, files[i]);
                console.log(files[i].name)
            }

            let progressbarLabel = $('#progressBar-label');
            let progressbarDiv = $('#progressbar');

            $.ajax({
                //specify the server receiving end point
                url: window.location.url,
                method: 'post',
                data: formData,
                contentType: false,
                processData: false,
                success: function (res) {
                    progressbarLabel.text('Complete');
                    progressbarDiv.fadeOut(2000);
                    console.log(res)
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

            progressbarLabel.text('Uploading...');
            progressbarDiv.progressbar({value: false}).fadeIn(500);
        }
    });
});
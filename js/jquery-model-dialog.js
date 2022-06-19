$(document).ready(function () {
    let dialogDiv = $('#dialog');

    dialogDiv.dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            'Create': CreateEmployee,
            'Cancel': function () {
                dialogDiv.dialog('close');
                clearInputFields();
            }
        }
    });

    function CreateEmployee() {
        let emp = {};
        emp.FirstName = $('#txtFirstName').val();
        emp.LastName = $('#txtLastName').val();
        emp.Email = $('#txtEmail').val();

        $.ajax({
            url: 'EmployeeService.asmx/SaveEmployee',
            method: 'post',
            data: '{ employee:' + JSON.stringify(emp) + '}',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function () {
                loadEmployees();
                dialogDiv.dialog('close');
                clearInputFields();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("user creating was a failure")
            }
        });
    }

    function loadEmployees() {
        let tboby = $('#employees tbody');
        tboby.empty();

        $.ajax({
            url: 'EmployeeService.asmx/GetEmployees',
            method: 'post',
            dataType: 'json',
            success: function(data, textStatus, jqXHR) {
                alert(textStatus)
                $(data).each(function () {
                    var tr = $('<tr></tr>')
                    tr.append('<td>' + this.FirstName + '</td>')
                    tr.append('<td>' + this.LastName + '</td>')
                    tr.append('<td>' + this.Email + '</td>')
                    tboby.append(tr);
                })
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR)
                $("body").append(jqXHR+"--"+textStatus+"--"+errorThrown);
            }

        });
    }

    function clearInputFields() {
        $('#dialog input[type="text"]').val('');
    }

    $('#btnAddEmployee').click(function () {
        dialogDiv.dialog("open");
    });

    loadEmployees();
});
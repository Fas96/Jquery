$(document).ready(function () {
    var currentPage = 1;
    loadPageData(currentPage);
    $(window).scroll(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            currentPage += 1;
            loadPageData(currentPage);
        }
    });

    function loadPageData(currentPageNumber) {
        $.ajax({
            url: 'EmployeeService.asmx/GetEmployees',
            method: 'post',
            dataType: "json",
            data: { pageNumber: currentPageNumber, pageSize: 50 },
            success: function (data) {
                var employeeTable = $('#tblEmployee tbody');

                $(data).each(function (index, emp) {
                    employeeTable.append('<tr><td>' + emp.ID + '</td><td>'
                        + emp.Name + '</td><td>' + emp.Gender
                        + '</td><td>' + emp.Salary + '</td></tr>');
                });
            },
            error: function (err) {
                alert(err);
            }
        });
    }
});
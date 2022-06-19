$().ready(function () {
    // $('#datatable').dataTable();

    setDataTableFromDatabase();
    function setDataTableFromDatabase() {
        $.ajax({
            url: 'https://api.github.com/users',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data)
                let datatableInstance=$('#datatable').dataTable({
                    paging: true,
                    sort: true,
                    searching: true,
                    scrollY: 200,
                    data: data,
                    columns:   [
                        {'data':'Login'},
                        {'data':'node_id'},
                        {'data':'avatar_url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},
                        {'data':'gravatar_id'},
                        {'data':'url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},
                        {'data':'html_url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},

                        {'data':'followers_url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},
                        {'data':'gists_url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},
                        {'data':'starred_url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},
                        {'data':'subscriptions_url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},
                        {'data':'organizations_url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},
                        {'data':'repos_url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},
                        {'data':'events_url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},
                        {'data':'received_events_url','render':(st)=>{ return '<a href=' + st + '>' + st.substr(0, 5) + '...' + '</a>';}},
                        {'data':'type'},
                        {'data':'site_admin'}]
                    //
                    // columns: [
                    //     { 'data': 'Id' },
                    //     { 'data': 'FirstName' },
                    //     { 'data': 'LastName' },
                    //     { 'data': 'Gender' },
                    //     { 'data': 'JobTitle' },
                    //     {
                    //         'data': 'WebSite',
                    //         'sortable': false,
                    //         'searchable': false,
                    //         'render': function (webSite) {
                    //             if (!webSite) {
                    //                 return 'N/A';
                    //             }
                    //             else {
                    //                 return '<a href=' + webSite + '>' + webSite.substr(0, 10) + '...' + '</a>';
                    //             }
                    //         }
                    //     },
                    //     {
                    //         'data': 'Salary',
                    //         'render': function (salary) {
                    //             return "$" + salary;
                    //         }
                    //     },
                    //     {
                    //         'data': 'HireDate',
                    //         'render': function (jsonDate) {
                    //             let date = new Date(parseInt(jsonDate.substr(6)));
                    //             let month = date.getMonth() + 1;
                    //             return month + "/" + date.getDate() + "/" + date.getFullYear();
                    //         }
                    //     }
                    // ]
                });

                $('#datatable tfoot th').each(function () {
                    var title = $('#datatable thead th').eq($(this).index()).text();
                    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
                });

                datatableInstance.columns().every(function () {
                    var dataTableColumn = this;

                    $(this.footer()).find('input').on('keyup change', function () {
                        dataTableColumn.search(this.value).draw();
                    });
                });
            }
        });
    }
})
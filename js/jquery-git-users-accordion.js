$().ready(function () {

    loadGithubUser()


    $( "#datepicker" ).datepicker({
        appendText: "Pick Your Date",
        showOn: 'both',
        buttonText: "Date",
        numberOfMonths: 1,
        changeMonth: true,
        changeYear: true,
        minDate:new Date(1970,1,1),
        maxDate: new Date(2030,1,1)
    });
    function loadGithubUser() {
        $.ajax({
            url: 'https://api.github.com/users',
            method: 'get',
            dataType: "json",
            success: function (data) {
                let finalHtmlBody="";
                let tabsUl="";
                let tabsDiv="";
                let end=1;
                // <div id="tab1">


                $(data).each(function (idx,user) {
                    if(end<4) {
                        tabsUl += ` <li><a href="#tab-${end}">${user.login}</a></li>`;
                        tabsDiv+=`<div id="#tab-${end}"> <p> ${user.login}</p></div>`
                        end+=1;
                    }
                   finalHtmlBody+=` <h3>${user.login}</h3>
                                        <div>
                                            <div class="our-team">
                                                            <div class="picture">
                                                                <img class="img-fluid" src="${user.avatar_url}">
                                                            </div>
                                                            <div class="team-content">
                                                                <h3 class="name">${user.login}</h3>
                                                                <h4 class="title">Web Developer</h4>
                                                            </div>
                                                            <ul class="social"> 
                                                                <li><a href="${user.html_url}" class="fa fa-facebook" aria-hidden="true">Git</a></li>
                                                                <li><a href="${user.organizations_url}" class="fa fa-twitter" aria-hidden="true">Org</a></li>
                                                                <li><a href="${user.events_url}" class="fa fa-google-plus" aria-hidden="true">Event</a></li>
                                                          
                                                            </ul>
                                            </div>
                                        </div>`;
                });
                $("#tabs ul").append(tabsUl)
                $("#tabs ").append(tabsDiv)


                $("#accordion").html(finalHtmlBody).accordion({collapsible:true,active:false});
            },
            error: function (err) {
                console.log(err);
            }
        });

    }

    $('#tabs').tabs();




})
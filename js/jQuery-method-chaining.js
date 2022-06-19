$().ready(
    function () {
        $("li").css("color","blue").slideUp(50).slideDown(100).attr("title","My Title");
        //should not work :text method after li should not work
        $("li").text().css("color","blue").slideUp(50).slideDown(100).attr("title","My Title");
        //would work
        $("li").text("new Text").css("color","blue").slideUp(50).slideDown(100).attr("title","My Title");
    }
)
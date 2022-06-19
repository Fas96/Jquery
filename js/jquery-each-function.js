$().ready(function () {
    //run when dom is ready
    console.log("Section @: With the index and element used")
    $("li").each(function (idx,element) {
        if($(element).text()==='sleep')return false;
        console.log(idx,$(element).text())
    })


    console.log("Section @: With no index")
    $("li").each(function () {
        console.log($(this).text())
    })


    //implicit iteration method for items
    $("li").css("font-size","30px")
})
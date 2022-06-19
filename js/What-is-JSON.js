$().ready(function () {
    let employJSON=[
        {"title": "simple nod " },
        {"key": "2", "title": "item1 with key ", "tooltip": "Look, a tool tip!" },
        {"key": "3", "title": "IG" }
    ];
    let stringJSOn=JSON.stringify(employJSON)
    console.log(stringJSOn)

    let jsonParse = JSON.parse(stringJSOn)
    console.log(jsonParse)

    // we can loop through an object and its index
    $.each(jsonParse,function (idx, item) {
        console.log(idx,item.title)
    })

})
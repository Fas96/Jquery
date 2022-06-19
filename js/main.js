


$(function () {
    $("p").on('click',function () {

    })

    // common jquery selectors and applying css
    $("#first-paragraph").css({'background-color':'lightblue','width':'100px','overflow':'auto','height':'50px'})
   console.log( $("#first-paragraph")[0])

    $('tr[title]').css('background-color','tomato')
    $("[title='fas']").css('background-color','green')


    $('[id*=\'name\']').css('background-color','yellow')
    $('[title*="myselector"]').css('background-color','yellow')


    // case insensitive selectors
    $('div[title]').filter(function () {
        return RegExp('div','i').test($(this).attr('title'));
        // return (/div/i).test($(this).attr('title'));
    }).css('border','3px solid red');

    $('input').css('background','red')

    // getting form inputs
    $('input').each((idx,element)=>{
        console.log($(element).val()  )
    })
console.log("======")
    $(':input').each((idx,element)=>{
        console.log($(element).val()  )
    })

    console.log($('input[type="radio"]:checked'))

    $('input[type="radio"]').each((idx,element)=>{
        if($(element).prop("checked")){
            // alert(element)
        }
    })




    // fancy tree
    //========================= Tree Data ==========================
    var remappedItems = {expanded: true, key: "root_1", title: "root", children: [{folder: true, key: "_1", title: " Chetan's module", type: 4, data: {id: "140A2052415325B4716B1304000037F3", uniqueId: "29b0395e6db5aec1c25331c1ff432b9a", parentId: "140A2052415325B471411305000037F0", parent: [] }, children: [{folder: true, key: "_2", title: " LO - 1", type: 3, data: {id: "140A2052415325B4719513030000381A", uniqueId: "b90ae76ae451ac38346d4b6bbe83305", parentId: "140A2052415325B4716B1304000037F3", parent: [] }, children: [{folder: true, key: "_3", title: " New: Topic", type: 2, data: {id: "140A2052415325B476811302000039E8", uniqueId: "6abc4151acb1237cbb0696cb6e6bac0", parentId: "140A2052415325B4719513030000381A", parent: [] }, children: [{folder: false, icon: false, key: "_4", title: " New: Group", type: 11, data: {id: "140A2052415325B4770B130B00003A11", uniqueId: "5d9f9fba7f0a76ad77d5d7bbcab2f640", parentId: "140A2052415325B476811302000039E8", parent: [] } } ] }, {folder: false, icon: false, key: "_5", title: " Chetan's Assessment Object", type: 6, data: {passingScore: 0.01, weight: 1, id: "140A2052415325B4731C13060000390C", uniqueId: "3670c6e32da53724f1c5383455977477", parentId: "140A2052415325B4719513030000381A", parent: [] } } ] }, {folder: true, key: "_6", title: " Summary", type: 3, data: {id: "140A2052415325B471CB130300003843", uniqueId: "94fb5147f1be057c17c4f85298e6f7c", parentId: "140A2052415325B4716B1304000037F3", parent: [] }, children: [{folder: true, key: "_7", title: " Glossary", type: 2, data: {id: "140A2052415325B4728113020000386C", uniqueId: "1ad65d69c6f3b88ce41cde7d79a03bf2", parentId: "140A2052415325B471CB130300003843", parent: [] }, children: [{folder: false, icon: false, key: "_8", title: " Glossary", type: 11, data: {id: "140A2052415325B47282130B00003895", uniqueId: "4682c03a922f5bf8e3ae5b99e3c262e4", parentId: "140A2052415325B4728113020000386C", parent: [] } } ] }, {folder: true, key: "_9", title: " Help", type: 2, data: {id: "140A2052415325B472DF1302000038BC", uniqueId: "4cb09f91a4794edf2989c6492e414f57", parentId: "140A2052415325B471CB130300003843", parent: [] }, children: [{folder: false, icon: false, key: "_10", title: " Help", type: 11, data: {id: "140A2052415325B472E0130B000038E5", uniqueId: "1831f206cfbfd6a93abc4c77e0dcb67e", parentId: "140A2052415325B472DF1302000038BC", parent: [] } } ] } ] } ] } ] };
// -------------



        $("#tree").fancytree({
            source: remappedItems,
            selectMode: 3,
            checkbox: true,
            focusOnSelect: true,
            tabindex: "0",
            titlesTabbable: false,
            tooltip: true,
            init: function (event, data) {
            },
            keydown: function (event, data) {
                switch (event.which) {
                    case 32: // [space]
                        data.node.toggleSelected();
                        break;
                    case 13: // [enter]
                        data.node.toggleSelected();
                        break;
                    case 40:
                    case 38:
                    case 37:
                    case 39:
                        // Change the background to show a different highlight
                        // highlightNode(data);
                        break;
                }
            }
        });


    function highlightNode(data) {
        var node = data.node;
        if (node.data) {
            var $span = jQuery(node.span);
            $span
                .find("span.fancytree-title")
                .text(node.title)
                .css({
                    background: "red"
                });
        }
    }




})

// $(document).ready(()=> {
//
// })
// $(window).load(()=>{
//
//     console.log("loaded This is me");
// })

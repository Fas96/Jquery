$().ready(function () {
    //using each method
    $("li").each(function (idx, element) {
        console.log(idx,$(element).text())
    })

    //using the map
   let mapResult=$("li").map(function (idx, element) {
       return (idx+":"+$(element).text())
    }).get()

    let delemMap=$("li").map(function (idx, element) {
        return (idx+":"+$(element).text())
    }).get().join("--")
    console.log(delemMap)


    //NB
    /*
    * Each Method is an Immutable array
    *
    * Whereas the map-method is a mutable array
    * */

    let intArr=[1,2,3,4,5]
    function immute(idx,element){
        return element*5;
    }

    //observe when the arguments are reverse for map function
    //with map it's the element first and the index next
    function mute(element,idx){
        return element*5;
    }

    //Also, with each function we can break out of the loop with conditions
    //Whereas with map function we cannot break out of the loop

    let eachDoesNotChangeArr=$.each(intArr,immute)
    let mapChangeArr=$.map(intArr,mute)

    console.log(eachDoesNotChangeArr)
    console.log(mapChangeArr)


})
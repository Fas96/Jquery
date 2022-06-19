$().ready(function () {
    //Change event is fired when an element value changes.
    //All the following elements fire the change events
    /*
    * 1. Input
    * 2. textarea
    * 3. select
    *select,radio buttons and checkboxes fire the change event
    * as soon as a selection is made, whereas elements types wait until they loose focus
    * */

    let changeResult=""
    $(":input").on("change",addCityChangeEvent)
    function addCityChangeEvent() {
        let selectedValue=$(this).val()
        // alert(selectedValue)
        if(changeResult===""){changeResult=$(this).val()}else{changeResult+=(","+$(this).val());}
        console.log(changeResult)

        $("#divResult").html(changeResult)
    }
})
$().ready(
  function () {
      $("#selectCountries").on("change",function () {
         let selectedOption= $("#selectCountries option:selected")
          let resultString=""
          if(selectedOption.length>0) {
              selectedOption.each(function () {
                resultString+=(  $(this).val() + "|||" + $(this).text()+"\n")
              })
              console.log(resultString)
          }
      })
  }
);
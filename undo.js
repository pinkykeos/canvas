//上一步
$("#back-step").click(function() {
    console.log("undo");
    undo();
    if (step === 0) {
        $("#back-step").addClass('disable-btn');
    }
  })
  
  //下一步
  $("#next-step").click(function() {
    redo();
    if (step > 0) {
        $("#back-step").removeClass('disable-btn');
    }
  })
  


$(document).ready(function(event){
    function loadPopup(event){
          if($("#popup-overlay").hasClass("popup-hide")){
              $("#popup-overlay").removeClass("popup-hide");
          }else{
              $("#popup-overlay").addClass("popup-show");
          }
    }
     setTimeout(loadPopup, 300);
        
      $("#close").click(function(e){
          $('#popup-overlay').addClass("popup-hide");
          e.preventDefault();
      })
  });
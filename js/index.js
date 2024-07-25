$(document).ready(function () {
    
    $("#helpModal").on("hidden.bs.modal", function () {
        var video = $("#helpVideo").get(0); 
        if (video) {
          video.pause();
          video.currentTime = 0; 
        }

        var iframe = $("#helpIframe").get(0);
        if (iframe) {
          var src = iframe.src;
          iframe.src = ""; 
          iframe.src = src; 
        }
      });

});

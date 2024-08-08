$(document).ready(function () {
    
    $("#helpModal").on("hidden.bs.modal", function () {
        var video = $("#helpVideo").get(0); 
        if (video) {
          video.pause();
          video.currentTime = 0; 
        }
      });
});

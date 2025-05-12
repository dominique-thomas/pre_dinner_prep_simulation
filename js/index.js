/**
 * Project: Pre-Dinner Prep Simulation
 * Description: JavaScript logic for embedding or interacting with Unity WebGL build and interface elements.
 * Author: Dominique Thomas (github.com/dominique-thomas)
 * License: Shared publicly for demonstration purposes only. Reuse or redistribution not permitted without permission.
 */
$(document).ready(function () {
    
    $("#helpModal").on("hidden.bs.modal", function () {
        var video = $("#helpVideo").get(0); 
        if (video) {
          video.pause();
          video.currentTime = 0; 
        }
      });
});

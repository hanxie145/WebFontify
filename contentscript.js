$(document).ready(function() {

  chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {

      // method for changing the font
      if (request.action == "changeFont"){

        var font = request.font;
        var element = request.element;

        $("head").append("<link href='http://fonts.googleapis.com/css?family=" + font + "' rel='stylesheet' type='text/css'>");
        temp = font.split("+");
        font = temp.join(" ");

        $(element).css('font-family', font);

      }

      // method for changing the color
      if (request.action == "changeColor"){
        var element = request.element; 
        var color = "#" + request.color; 

         $(element).css('color', color);
      }

  });

});
// Generated by CoffeeScript 1.4.0
(function() {

  $(document).ready(function() {
    var bkg, change_extension_color, change_extension_font, change_window_Font, change_window_color;
    bkg = chrome.extension.getBackgroundPage();
    change_window_Font = function(font, element) {
      return bkg.changeFont(font, element);
    };
    change_window_color = function(element, color) {
      return bkg.changeColor(element, color);
    };
    change_extension_font = function(element, e) {
      var font, query, temp;
      e.preventDefault();
      query = "#" + ("" + element + "-font-list");
      font = $("" + query).val();
      $("head").append("<link href='http://fonts.googleapis.com/css?family=" + font + "' rel='stylesheet' type='text/css'>");
      temp = font.split("+");
      font = temp.join(" ");
      $("" + element).css('font-family', font);
      return $(this).css('font-family', font);
    };
    change_extension_color = function(element, color, e) {
      e.preventDefault();
      color = "#" + color;
      return $("" + element).css('color', color);
    };
    $('#h1-style').click(function(e) {
      change_extension_font('h1', e);
      change_extension_color('h1', $('#h1-color').val(), e);
      change_window_Font($('#h1-font-list').val(), 'h1');
      return change_window_color('h1', $('#h1-color').val());
    });
    $('#h2-style').click(function(e) {
      change_extension_color('h2', $('#h2-color').val(), e);
      change_extension_font('h2', e);
      change_window_Font($('#h2-font-list').val(), 'h2');
      return change_window_color('h2', $('#h2-color').val());
    });
    $('#h3-style').click(function(e) {
      change_extension_color('h3', $('#h3-color').val(), e);
      change_extension_font('h3', e);
      change_window_Font($('#h3-font-list').val(), 'h3');
      return change_window_color('h3', $('#h3-color').val());
    });
    return $('#p-style').click(function(e) {
      change_extension_color('p', $('#p-color').val(), e);
      change_extension_font('p', e);
      change_window_Font($('#p-font-list').val(), 'p');
      return change_window_color('p', $('#p-color').val());
    });
  });

}).call(this);

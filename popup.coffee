$(document).ready ->

  # get background page
  bkg = chrome.extension.getBackgroundPage()

  change_window_Font = (font, element) -> 
    bkg.changeFont(font, element)

  change_window_color = (element, color) -> 
    bkg.changeColor(element, color)

  change_extension_font = (element, e) -> 
    # prevent default 
    e.preventDefault()

    # get the value of the selection list
    query = "#" + "#{element}-font-list"
    font = $("#{query}").val()

    # attach link to google web fonts to head
    $("head").append("<link href='http://fonts.googleapis.com/css?family=#{font}' rel='stylesheet' type='text/css'>")

    # clean up font-name
    temp = font.split("+")
    font = temp.join(" ")

    # attach css
    $("#{element}").css 'font-family', font
    $(this).css 'font-family', font

  change_extension_color = (element, color , e) -> 
    # prevent default
    e.preventDefault()

    color = "#" + color

    $("#{element}").css 'color', color

  $('#h1-style').click (e) -> 
    # change extension settings
    change_extension_font 'h1', e 
    change_extension_color 'h1', $('#h1-color').val(), e

    # change window settings
    change_window_Font $('#h1-font-list').val(), 'h1' 
    change_window_color 'h1', $('#h1-color').val()
   

  $('#h2-style').click (e) ->
    change_extension_color 'h2', $('#h2-color').val(), e
    change_extension_font 'h2', e

    change_window_Font $('#h2-font-list').val(), 'h2'
    change_window_color 'h2', $('#h2-color').val() 

  $('#h3-style').click (e) ->
    change_extension_color 'h3', $('#h3-color').val(), e
    change_extension_font 'h3', e

    change_window_Font $('#h3-font-list').val(), 'h3' 
    change_window_color 'h3', $('#h3-color').val()

  $('#p-style').click (e) ->
    change_extension_color 'p', $('#p-color').val(), e
    change_extension_font 'p', e

    change_window_Font $('#p-font-list').val(), 'p' 
    change_window_color 'p', $('#p-color').val()

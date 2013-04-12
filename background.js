
function changeFont(font, element){

  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {action: "changeFont", font: font, element: element});
  });

}

function changeColor(element, color){
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {action: "changeColor", element: element, color: color});
  });
}
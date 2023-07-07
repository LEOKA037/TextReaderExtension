chrome.runtime.onInstalled.addListener(function() {
  chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        const selectedText = window.getSelection().toString();
        return selectedText;
      }
    }, function(results) {
      const selectedText = results[0].result;
      const siteName = tab.title;
      const speechText = "Hello I am reading from " +siteName + " These are the selected text : " + selectedText;
      chrome.tts.speak(speechText);
    });
  });
});

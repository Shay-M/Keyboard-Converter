chrome.contextMenus.create({
  title: 'Convert to Hebrew',
  contexts: ['editable'],
  id: 'convertToHebrew',
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === 'convertToHebrew') {
    chrome.tabs.executeScript(tab.id, { file: 'content.js' }, function () {
      chrome.tabs.sendMessage(tab.id, { type: 'convertToHebrew' });
    });
  }
});

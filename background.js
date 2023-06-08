// chrome.contextMenus.create({
//   title: 'Convert to Hebrew',
//   contexts: ['editable'],
//   id: 'convertToHebrew',
// });

// chrome.contextMenus.onClicked.addListener(function (info, tab) {
//   if (info.menuItemId === 'convertToHebrew') {
//     chrome.tabs.executeScript(tab.id, { file: 'content.js' }, function () {
//       chrome.tabs.sendMessage(tab.id, { type: 'convertToHebrew' });
//     });
//   }
// });

//---

const CONTEXT_MENU_ID = 'MY_CONTEXT_MENU';

function onContextMenuClick(info, tab) {
  console.log('hii');
  if (info.menuItemId === 'convertToHebrew') {
    chrome.tabs.executeScript(tab.id, { file: 'content.js' }, function () {
      chrome.tabs.sendMessage(tab.id, { type: 'convertToHebrew' });
    });
  } else if (info.menuItemId === 'convertToEnglish') {
    chrome.tabs.executeScript(tab.id, { file: 'content.js' }, function () {
      chrome.tabs.sendMessage(tab.id, { type: 'convertToEnglish' });
    });
  }
}

chrome.contextMenus.create({
  title: 'Convert to Hebrew',
  contexts: ['selection'],
  id: 'convertToHebrew',
});

chrome.contextMenus.create({
  title: 'Convert to English',
  contexts: ['selection'],
  id: 'convertToEnglish',
});

chrome.contextMenus.onClicked.addListener(onContextMenuClick);

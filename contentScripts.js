document.addEventListener(
  'keydown',
  (e) => {
    if (!e.ctrlKey) chrome.runtime.sendMessage({ keycode: e.key.charCodeAt(0) });
  },
  true
);

let iframes = document.getElementsByTagName('iframe');
for (let i = 0; i < iframes.length; i++) {
  let iframeContent = iframes[i].contentDocument || iframes[i].contentWindow;
  iframeContent.addEventListener(
    'keydown',
    (e) => {
      if (!e.ctrlKey) chrome.runtime.sendMessage({ keycode: e.keyCode });
    },
    true
  );
}

/* var lastKeyPressed = 0;

function sendKey() {
  var WshShell = new ActiveXObject('WScript.Shell');
  WshShell.SendKeys('a');
}

function getCurLayout() {
  sendKey();
  setTimeout('lastKeyLang()', 10);
}

function lastKeyLang() {
  if (lastKeyPressed == 97) alert('EN');
  else alert('HE');
}

document.onkeypress = saveLastKey;
function saveLastKey() {
  lastKeyPressed = window.event.keyCode;
}

document.getElementById('a').addEventListener('keypress', function (e) {
  if (e.charCode > 160) console.log('persian');
  else console.log('english');
});
 */

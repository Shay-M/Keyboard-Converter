chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === 'convertToHebrew') {
    const selection = window.getSelection().toString();
    const convertedText = convertToHebrew(selection);
    document.execCommand('insertText', false, convertedText);
  }
});

function convertToHebrew(text) {
  const englishToHebrewMap = {
    a: 'ש',
    b: 'נ',
    c: 'ב',
    d: 'ג',
    e: 'ק',
    f: 'כ',
    g: 'ע',
    h: 'י',
    i: 'ן',
    j: 'ח',
    k: 'ל',
    l: 'ך',
    m: 'צ',
    n: 'מ',
    o: 'ם',
    p: 'פ',
    q: '/',
    r: 'ר',
    s: 'ד',
    t: 'א',
    u: 'ו',
    v: 'ה',
    w: "'",
    x: 'ס',
    y: 'ט',
    z: 'ז',
  };

  let convertedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    if (englishToHebrewMap.hasOwnProperty(char)) {
      convertedText += englishToHebrewMap[char];
    } else {
      convertedText += text[i];
    }
  }

  return convertedText;
}

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.action === 'convert') {
//       const selectedText = window.getSelection().toString().trim();
//       if (selectedText !== '') {
//         const convertedText = convertText(selectedText, message.type);
//         document.execCommand('insertText', false, convertedText);
//       }
//     }
//   });

//   function convertText(text, type) {
//     const hebrewToEnglishMap = {
//       ש: 'a',
//       נ: 'b',
//       ב: 'c',
//       ג: 'd',
//       ק: 'e',
//       כ: 'f',
//       ע: 'g',
//       י: 'h',
//       ן: 'i',
//       ח: 'j',
//       ל: 'k',
//       ך: 'l',
//       צ: 'm',
//       מ: 'n',
//       ם: 'o',
//       פ: 'p',
//       '/': 'q',
//       ר: 'r',
//       ד: 's',
//       א: 't',
//       ו: 'u',
//       ה: 'v',
//       "'": 'w',
//       ס: 'x',
//       ט: 'y',
//       ז: 'z',
//     };

//     const englishToHebrewMap = {
//       a: 'ש',
//       b: 'נ',
//       c: 'ב',
//       d: 'ג',
//       e: 'ק',
//       f: 'כ',
//       g: 'ע',
//       h: 'י',
//       i: 'ן',
//       j: 'ח',
//       k: 'ל',
//       l: 'ך',
//       m: 'צ',
//       n: 'מ',
//       o: 'ם',
//       p: 'פ',
//       q: '/',
//       r: 'ר',
//       s: 'ד',
//       t: 'א',
//       u: 'ו',
//       v: 'ה',
//       w: "'",
//       x: 'ס',
//       y: 'ט',
//       z: 'ז',
//     };

//     let convertedText = '';
//     const mapping = type === 'hebrewToEnglish' ? hebrewToEnglishMap : englishToHebrewMap;

//     for (let i = 0; i < text.length; i++) {
//       const char = text[i];
//       if (mapping.hasOwnProperty(char)) {
//         convertedText += mapping[char];
//       } else {
//         convertedText += char;
//       }
//     }

//     return convertedText;
//   }

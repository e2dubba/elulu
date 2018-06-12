function getContentFromClipboard () {
  let result = '';
  // let sandbox = document.getElementById('dummy-text-field');
  let sandbox = document.getElementById('searchbox');
  sandbox.value = '';
  sandbox.select();
  if (document.execCommand('paste')) {
    result = sandbox.value;
  }
  sandbox.value = '';
  return result;
};


function openGoogleTranslate () {
  let clipboardContent = getContentFromClipboard();
  // delete hyphen plus new line
  clipboardContent = clipboardContent.replace('-\r?\n/g', '');
  // delete new lines and replace with space
  clipboardContent = clipboardContent.replace('\r?\n/g', ' ');
  // delete hyphens plus space. This one is a bit ugly
  clipboardContent = clipboardContent.replace('\b- \b/g', '');
  let url = 'https://translate.google.com/#auto/en/';
  url += encodeURIComponent(clipboardContent);
  chrome.tabs.create({url: url});
  return false; // prevent the default handler from running
};


// For getting the URL
function urlpromise() {
  var currenturl;
  return new Promise(function(resolve, reject) {
    //chrome.tabs.query is a callback function to interact with the BOM
    var node = chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(arrayOfTabs) {
      var activeTab = arrayOfTabs[0];
      currenturl = activeTab.url;
      // after the callback function has ran, lets finish the promise
      if (currenturl) {
        resolve(currenturl);
      } else {
        reject(node);
      }
    });
  });
}


function openNodeTab () {
  let clipboardContent = getContentFromClipboard();
  clipboardContent = clipboardContent.trim();
  let url = 'http://en.wikipedia.org/';
  url += encodeURIComponent(clipboardContent);
  chrome.tabs.create({url: url});
};


chrome.commands.onCommand.addListener(function (command) {
  if (command === 'openGoogleTranslate') {
    openGoogleTranslate()
  };
  // How would you add openNodeTab to this?
});

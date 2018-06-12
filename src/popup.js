document.addEventListener('DOMContentLoaded', function () {
  let searchButtonActivation = document.getElementById("searchbutton");
   searchButtonActivation.addEventListener('click', function () {
     defineWord()
  });
});


function defineWord () {
    let searchValues = document.getElementById("searchbox");
    let searchTerm = searchValues.value;
    if (searchTerm === '') {
      openGoogleTranslate()
    } else {
      let url = 'https://translate.google.com/#auto/en/';
      url += encodeURIComponent(searchTerm);
      chrome.tabs.create({url: url});
    };
};


document.addEventListener('DOMContentLoaded', function () {
  let textField = document.getElementById("searchbox");
  textField.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 13 ) {
      defineWord()
    }
  });
});

var cards = document.getElementsByClassName("card");
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function () {
    showPreview(this);
  });
  cards[i].addEventListener("mouseout", function () {
    hidePreview(this);
  });
}

function showPreview(card) {
  var preview = card.getElementsByClassName("preview")[0];
  preview.style.display = "block";
}

function hidePreview(card) {
  var preview = card.getElementsByClassName("preview")[0];
  preview.style.display = "none";
}

function expandText() {
  var text = document.getElementById("cv");
  text.style.overflow = "visible";
  text.style.height = "auto";
}

function submitForm() {
    alert("Form submitted, await for out contact!");
  }

  function openGH1() {
    var githubURL = 'https://github.com/IngDih/CA3-CSP';  
    window.open(githubURL, '_blank');
  }

  function openGH2() {
    var githubURL = 'https://github.com/IngDih/ssp-ca3';    
    window.open(githubURL, '_blank');
  }

  function openGH3() {
    var githubURL = 'https://github.com/IngDih/firstWebsite';    
    window.open(githubURL, '_blank');
  }
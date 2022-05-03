var baseUrl = "http://localhost:3000";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    searchQuote();
  },
  false
);

function searchQuote() {
  var quoteText = document.getElementById("quoteText");
  var authorText = document.getElementById("authorText");
  fetch(baseUrl + "/random-quote")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      var quote = JSON.parse(data);
      const { text, author } = quote;
      quoteText.textContent = text;
      authorText.textContent = author;
    })
    .catch(function (err) {
      authorText.textContent = "-";
    });
}

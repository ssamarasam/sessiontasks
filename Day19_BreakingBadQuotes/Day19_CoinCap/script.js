const logo =
  "https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg";
async function getQuotes() {
  try {
    const response = await fetch(
      "https://api.breakingbadquotes.xyz/v1/quotes/10"
    );
    const resultArray = await response.json();
    console.log(resultArray);
    renderQuotes(resultArray);
  } catch (error) {
    console.log("Error fetching data.", error);
  }
}

getQuotes();

function renderQuotes(data = []) {
  let quotesArea = document.getElementsByClassName("quotes-area")[0];

  data.forEach((bb) => {
    let eachQuote = document.createElement("div");
    eachQuote.setAttribute("class", "each-quote");
    let imgELement = document.createElement("img");
    let pElement = document.createElement("p");
    pElement.innerHTML = bb.quote;
    pElement.setAttribute("class", "quote-para");
    imgELement.src = logo;
    imgELement.setAttribute("class", "logo-quote");
    eachQuote.appendChild(imgELement);
    eachQuote.appendChild(pElement);

    quotesArea.appendChild(eachQuote);
  });
}

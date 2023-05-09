async function fetchCryptoAsset() {
  const response = await fetch("https://api.coincap.io/v2/assets");
  const json = await response.json();

  const resultArray = await json.data;
  //   console.log(resultArray);
  renderCryptos(resultArray);
}

fetchCryptoAsset();

function renderCryptos(data = []) {
  let tableArea = document.getElementsByClassName("table-area")[0];
  let tableElement = document.createElement("table");
  let trHead = document.createElement("tr");
  let thName = document.createElement("th");
  let thPrice = document.createElement("th");
  let thRank = document.createElement("th");
  let thChange = document.createElement("th");

  thName.innerHTML = "Name";
  thPrice.innerHTML = "Price";
  thRank.innerHTML = "Rank";
  thChange.innerHTML = "Change";
  trHead.appendChild(thName);
  trHead.appendChild(thPrice);
  trHead.appendChild(thRank);
  trHead.appendChild(thChange);
  tableElement.appendChild(trHead);
  tableArea.appendChild(tableElement);
  data.forEach((crypto) => {
    let trData = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdRank = document.createElement("td");
    let tdChange = document.createElement("td");
    tdName.innerHTML = crypto.name;

    let price = +crypto.priceUsd;
    tdPrice.innerHTML = price.toFixed(2);

    let changePercentage = +crypto.changePercent24Hr;
    let upDown = "";
    tdChange.style.fontStyle = "bold";
    if (changePercentage < 0) {
      upDown = `<span>&darr;<span>`;
      tdChange.style.color = "red";
    } else {
      upDown = `<span>&uarr;<span>`;
    }
    tdChange.innerHTML = upDown + " " + changePercentage.toFixed(2);
    tdRank.innerHTML = crypto.rank;
    trData.appendChild(tdName);
    trData.appendChild(tdPrice);
    trData.appendChild(tdRank);
    trData.appendChild(tdChange);
    tableElement.appendChild(trData);
  });
}

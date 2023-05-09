async function fetchImages(count) {
  const response = await fetch(`https://nekos.best/api/v2/hug?amount=${count}`);
  const json = await response.json();

  const resultArray = await json.results;
  console.log(resultArray);
  renderImages(resultArray);
}

let input = document.getElementById("count");

input.addEventListener("change", (e) => {
  console.log(e.target.value);
  fetchImages(+e.target.value);
});

function renderImages(array) {
  let itemArea = document.getElementsByClassName("item-area")[0];
  console.log(itemArea);
  array.forEach((element) => {
    itemArea.append(createCard(element));
  });
}

function createCard(obj) {
  const divItem = document.createElement("div");
  divItem.innerHTML = `<div class="mt-2">
  <img class="card-img-top"src=${obj.url} />
  <p class="card-text" >Image name</p>
</div>`;
  divItem.setAttribute("class", "col-sm-2 card col-md-6 col-lg-3 mb-1 ");
  return divItem;
}

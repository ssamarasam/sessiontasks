console.log("DOM Class start");

let newElement = document.createElement("p")
console.log("new lement", newElement);
newElement.setAttribute("class", "para-1 para");

let heading = document.getElementById("heading");
console.log("head :", heading);

let divElements = document.getElementsByClassName("div-class");
console.log("div classes: ", divElements);


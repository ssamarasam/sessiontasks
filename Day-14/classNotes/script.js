console.log("log is wokring.");
console.log(window);

// alert("Hello World!");

// prompt("What is your name?");


function displayDetails() {

    
    let name = prompt("What is your name?", "name");
    let age = +prompt("What is your age?");

    let display = confirm("Do you want to display the details?");
    if(display) {
        alert(`Hi ${name} ,\nYou are ${age} years old.`);
    console.log(`Hi ${name} \n you are ${age} years old.`);
    }
    
}

function alertFunction() {
    alert("hey!");
}

function promptFunction() {
    let name = prompt("Whats your name?");
    alert(`Yiur name is ${name}.`);
}

function confirmFunction(){
    let age = prompt("Whats your age?");
    let display = confirm("Do you want to see?")
    if(display) {
        alert(`Yiur name is ${age}.`);
    }
}
// displayDetails();

function promptName() {
    let name = prompt("What is your name?");
    let showElement = document.getElementById("prompt-ele");
    // showElement.append(`Your name is ${name}`);
    showElement.textContent = name;
}

let count = 0;
let counter = document.getElementById('display-timer');
function countUp() {
    counter.textContent = count;
    count++;
    let id = setTimeout(countUp, 1000);
    if(count === 7) {
        clearTimeout(id);
        counter.textContent = 'Time up!';
    } 
    
}
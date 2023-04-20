let email = document.getElementById('email');
let pwd = document.getElementById('password');
let button = document.getElementById('submit-form');

let data = {};

email.addEventListener('change', handleChange);
pwd.addEventListener('change', handleChange);
button.addEventListener('click', (e) => {
    console.log(data);
})


function handleChange(e) {
    data[e.target.id] = e.target.value;
}
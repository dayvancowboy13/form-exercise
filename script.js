// const textIn = document.getElementById('name');
// const btn = document.getElementById('btn');
// const btn2 = document.getElementById('btn2');

console.log(document.querySelector('form').querySelectorAll('*[id]'));
const form = document.querySelector('#main-form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const ZIP = document.querySelector('#ZIP');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submitBtn = document.querySelector('#submit-btn');

console.log(form);

// what are the functions for checking if an input is changing?

// btn.addEventListener('click', function () {
//     if (!textIn.checkValidity()) {
//         console.log(textIn.validationMessage);
//         console.log(textIn.validity);
//     } else {
//         console.log('validity is good!')
//         console.log(textIn.validity);
//     }

// });


// btn2.addEventListener('click', function (event) {
//     textIn.setCustomValidity('');
// });
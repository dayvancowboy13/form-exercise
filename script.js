
const form = document.querySelector('#main-form');
const inputsIdList = [
    'email',
    'country',
    'ZIP',
    'password',
    'confirm-password'
];

class InputField {
    constructor(htmlID,) {
        this.htmlElem = document.querySelector(`#${htmlID}`);
    }

    get html() {
        return this.htmlElem;
    }

    validationCheck() {

    }

    addOnFocusOut() {
        this.html.addEventListener('onfocusout', this.validationCheck());
    }
}
// Step 1: create array of InputField objects from the IDlist array
const inputObjects = inputsIdList.map((id) => new InputField(id));
// Step 2
// give each input it's unique validation check
// Step 3
// call each input's addOnFocuOut function
console.log(inputObjects);


const email = new InputField('email');
email['testFunc'] = function () {
    console.log('just testing if i can dynamically add functions to a class');
}
email.testFunc();

email.validationCheck = function () {
    console.log("calling email's validation check")
}

email.validationCheck();




// const country = document.querySelector('#country');
// const ZIP = document.querySelector('#ZIP');
// const password = document.querySelector('#password');
// const confirmPassword = document.querySelector('#confirm-password');

// const inputs = [email, country, ZIP, password, confirmPassword];

// inputs.forEach((element) => addOnFocusOut(element))
// focusout

const submitBtn = document.querySelector('#submit-btn');


// on focus out, run the validation for that specific input


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
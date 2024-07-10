import './style.css';
import FormValidator from './FormValidator.js';

const form = document.querySelector('#main-form');
const submitBtn = document.querySelector('#submit-btn');

const inputIdList = {
    'email': [
        '[\w\d]*@[a-zA-Z]+',
        'Invalid input. Please use the format a@a.'
    ],
    'country': [
        '^[a-zA-Z]*$',
        'Invalid input. Make sure there are only letters.'
    ],
    'ZIP': [
        '[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}-?[0-9]{1}[a-zA-Z]{1}[0-9]{1}',
        'Does not match the format for the country.'
    ],
    'password': [
        '^(?=.*[0-9]+)(?=.*[A-Z]+)(?=.*[a-z]+)([a-zA-Z0-9]+){8,}$',
        'Your password must be comprised of lower and upper case letters and contain at least one number.'
    ],
    'confirm-password': [
        '',
        'Must match with the password entered above.'
    ]
};


const formV = new FormValidator('main-form',
    inputIdList);

class InputField {

    constructor(htmlID, pattern) {

        this.htmlElem = document.querySelector(`#${htmlID}`);
        this.pattern = pattern;

    }

    get html() {

        return this.htmlElem;

    }

    validationCheck() {

    }

    addOnFocusOut() {

        this.html.addEventListener('onfocusout',
            this.validationCheck());

    }

}

/*
 * Step 1: create array of InputField objects from the IDlist array
 * const inputObjects = inputsIdList.map((id) => new InputField(id));
 */

/*
 * Step 2
 * give each input it's unique validation check
 * Step 3
 * call each input's addOnFocuOut function
 */
// console.log(inputObjects);


/*
 * Cool test of dynamically adding function, but probably wont use it :(
 * const email = new InputField('email');
 * email['testFunc'] = function () {
 *     console.log('just testing if i can dynamically add functions to a class');
 * }
 * email.testFunc();
 */

/*
 * email.validationCheck = function () {
 *     console.log("calling email's validation check")
 * }
 */

// email.validationCheck();


/*
 * const country = document.querySelector('#country');
 * const ZIP = document.querySelector('#ZIP');
 * const password = document.querySelector('#password');
 * const confirmPassword = document.querySelector('#confirm-password');
 */

// const inputs = [email, country, ZIP, password, confirmPassword];

/*
 * inputs.forEach((element) => addOnFocusOut(element))
 * focusout
 */


// on focus out, run the validation for that specific input


// what are the functions for checking if an input is changing?

/*
 * btn.addEventListener('click', function () {
 *     if (!textIn.checkValidity()) {
 *         console.log(textIn.validationMessage);
 *         console.log(textIn.validity);
 *     } else {
 *         console.log('validity is good!')
 *         console.log(textIn.validity);
 *     }
 */

// });


/*
 * btn2.addEventListener('click', function (event) {
 *     textIn.setCustomValidity('');
 * });
 */
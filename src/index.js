import './style.css';

const form = document.querySelector('#main-form');

/*
 * const inputsIdList = [
 *     'email',
 *     'country',
 *     'ZIP',
 *     'password',
 *     'confirm-password'
 * ];
 */

const inputIdList = {
    'email': [
        '[\w\d]*@[\w\d]*',
        'Invalid input. Please try again.'
    ],
    'country': [
        '^[a-zA-Z]*$',
        'Invalid input. Make sure there are only letters.'
    ],
    'ZIP': [
        '[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}-[0-9]{1}[a-zA-Z]{1}[0-9]{1}',
        'Does not match the format for the country.'
    ],
    'password': [
        'asd',
        'Your password must be comprised of lower and upper case letters and contain at least one number.'
    ],
    'confirm-password': [
        'none',
        'Must match with the password entered above.'
    ]
};


class FormValidator {

    constructor(inputList) {

        for (const key in inputList) {

            console.log(`${key} ${inputList[key][0]}`);
            this.addFocusOutListener(
                document.querySelector(`#${key}`),
                inputList[key][0],
                inputList[key][1]
            );

        }

    }

    addFocusOutListener(
        inputElement, pattern, errorMessage
    ) {

        console.log(inputElement);

        inputElement.addEventListener('focusout',
            () => {

                inputElement.setCustomValidity('');

                if (!this.patternCheck(
                    inputElement.value,
                    pattern,
                    errorMessage
                )) {

                    inputElement.setCustomValidity(errorMessage);
                    inputElement.reportValidity();

                }

            });
        inputElement.addEventListener('input',
            function () {

                inputElement.setCustomValidity('');

            });

    }

    patternCheck(input, pattern) {

        console.log(input);
        const rx = new RegExp(pattern,
            '');
        console.log(rx);
        return rx.test(input);

    }

}


const formV = new FormValidator(inputIdList);

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

const submitBtn = document.querySelector('#submit-btn');


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
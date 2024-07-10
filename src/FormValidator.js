export default class FormValidator {

    constructor(formID, inputList) {

        // add listeners to each input element
        for (const key in inputList) {

            this.addFocusOutListener(
                document.querySelector(`#${key}`),
                inputList[key][0],
                inputList[key][1]
            );


        }

        const form = document.querySelector(`#${formID}`);

        form.addEventListener('submit',
            () => {

                console.log('attempting submit');
                if (!form.checkValidity()) {

                    console.log('something wrong!');
                    this.checkInputs(formID);

                } else {

                    alert('Form complete! Sending in your submission now!');

                }

            });

    }

    checkInputs(formID) {

        const inputs = document.querySelector(`#${formID}`).querySelectorAll('input');
        for (let elem of inputs) {

            elem.setCustomValidity('');
            console.log(elem.validity);

            if (elem.validity.valueMissing) {

                elem.setCustomValidity('Please fill this out.');
                elem.reportValidity();

            }

        }

    }

    addFocusOutListener(
        inputElement, pattern, errorMessage
    ) {

        inputElement.addEventListener('focusout',
            () => {

                inputElement.setCustomValidity('');

                // first check for confirm-password case
                if (pattern === '') {

                    if (inputElement.value !== document.querySelector('#password').value) {

                        inputElement.setCustomValidity(errorMessage);
                        inputElement.reportValidity();
                        return;

                    }

                } else if (!this.patternCheck(
                    inputElement.value,
                    pattern,
                    errorMessage
                )) {

                    inputElement.setCustomValidity(errorMessage);
                    inputElement.reportValidity();
                    return;

                }

            });
        inputElement.addEventListener('input',
            () => {

                inputElement.setCustomValidity('');

            });

    }

    patternCheck(input, pattern) {

        const rx = new RegExp(pattern,
            '');
        return rx.test(input);

    }

}
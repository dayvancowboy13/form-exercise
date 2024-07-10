import './style.css';
import FormValidator from './FormValidator.js';

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
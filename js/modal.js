import { showAlertMessage, removeAlertBorder, setConfirmation } from './functions.js';

// DOM Elements
const modalBg = document.querySelector('.bground');
const modalBtnClose = document.querySelector('.close');
const modalBtn = document.querySelectorAll('.modal-btn');
const formReserve = document.getElementById('form_reserve');
const allCheckBox = document.querySelectorAll('input[type="radio"]');
const arrierePlan = document.getElementById('arrierePlan');
const checkboxRadio = document.getElementById('checkbox-alert');
const consentToTerms = document.getElementById('consent_to_terms');

// Declaration Validator
const regexCharAndNotEmpty = new RegExp(/[^ ]/g);
const regexEmail = new RegExp(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/);
const regexNumber = new RegExp(/^(?:[1-9]|[1-9][0-9])$/);
const regexEmpty = new RegExp(/^.+$/);

const messageErrors = {
  first: 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.',
  last: 'Veuillez entrer 2 caractères ou plus pour le champ du Nom.',
  email: 'Email invalide.',
  birthdate: 'Vous devez entrer votre date de naissance.',
  quantity: 'Total de tournoi invalide.',
  city: 'Veuillez sélectionnez une ville.',
  terms: 'Veuillez accepter nos conditions.',
};

// launch modal form
const launchModal = () => {
  modalBg.style.display = 'block';
};

// Close modal form
const closeModal = () => {
  modalBg.style.display = 'none';
};

const validatorRegExp = (input, regex) => {
  return input.value.match(regex);
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// Close modal event
modalBtnClose.addEventListener('click', closeModal);

// Validator Data Form
formReserve.addEventListener('submit', (e) => {
  e.preventDefault();

  const checkFirst = validatorRegExp(e.target.first, regexCharAndNotEmpty) ? removeAlertBorder(e.target.first) : showAlertMessage(e.target.first, messageErrors.first);
  const checkLast = validatorRegExp(e.target.last, regexCharAndNotEmpty) ? removeAlertBorder(e.target.last) : showAlertMessage(e.target.last, messageErrors.last);
  const checkEmail = validatorRegExp(e.target.email, regexEmail) ? removeAlertBorder(e.target.email) : showAlertMessage(e.target.email, messageErrors.email);
  const checkBirthdate = validatorRegExp(e.target.birthdate, regexEmpty) ? removeAlertBorder(e.target.birthdate) : showAlertMessage(e.target.birthdate, messageErrors.birthdate);
  const checkQuantity = validatorRegExp(e.target.quantity, regexNumber) ? removeAlertBorder(e.target.quantity) : showAlertMessage(e.target.quantity, messageErrors.quantity);

  // Validation CheckBox Location
  let errorChecked = [];
  for (let checkBox of allCheckBox) {
    errorChecked.push(checkBox.checked);
  }

  const checkLocation = errorChecked.includes(true) ? true : showAlertMessage(checkboxRadio, messageErrors.city);
  // Validation Consent Ot Terms
  const checkConsentToTerms = consentToTerms.checked ? true : showAlertMessage(consentToTerms, messageErrors.terms);

  // Submit Data after Validation
  if (checkFirst && checkLast && checkEmail && checkBirthdate && checkQuantity && checkLocation && checkConsentToTerms) {
    setConfirmation(arrierePlan, formReserve);
  }
});

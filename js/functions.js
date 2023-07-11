export const setAlertMessage = (
  inputElement,
  message,
  messageColor,
  messageFontSize,
  borderColor,
) => {
  // Create <DIV/> Alert
  const alertDiv = document.createElement('div');
  // Format <DIV/>
  alertDiv.textContent = message;
  alertDiv.style.color = messageColor;
  alertDiv.style.fontSize = messageFontSize;

  inputElement.style.borderColor = borderColor;

  // Get the container div that wraps the input
  const containerDiv = inputElement.parentNode;

  // Insert the message right after the input element
  containerDiv.appendChild(alertDiv);
  // Auto Remove Alert
  removeMessageAfterDelay(alertDiv);
};

export const showAlertMessage = (inputElement, message) => {
  setAlertMessage(inputElement, message, '#FF4E60', '14px', '#FF4E60');
};

export const setConfirmation = (inputElement) => {
  // Create Confirmation Background
  const messageConfirmation = document.createElement('div');
  // Create Confirmation Button
  const buttonConfirmation = document.createElement('button');
  // Config & Set Values
  messageConfirmation.classList.add('arrierePlanTitle');
  messageConfirmation.textContent = 'Merci pour votre inscription';
  buttonConfirmation.classList.add('button');
  buttonConfirmation.classList.add('btn-submit');
  buttonConfirmation.classList.add('button_valid');
  buttonConfirmation.textContent = 'Fermer';

  buttonConfirmation.addEventListener('click', (closeButtonModal) => {
    document.querySelector('.bground').style.display = 'none';
  });

  inputElement.appendChild(messageConfirmation);
  inputElement.appendChild(buttonConfirmation);
  // TimeOut for Animation
  setTimeout(() => {
    inputElement.classList.add('affiche');
  }, 250);
};

export const removeAlertBorder = (inputElement) => {
  inputElement.style.borderColor = 'green';
  return true;
};

const removeMessageAfterDelay = (htmlElement, delay = 3000) => {
  setTimeout(() => {
    htmlElement.remove();
  }, delay);
};

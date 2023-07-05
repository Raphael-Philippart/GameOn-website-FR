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
  setAlertMessage(inputElement, message, 'orange', '15px', 'red');
};

export const setConfirmation = (inputElement, message) => {
  setAlertMessage(inputElement, message, 'green', '15px', '');
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

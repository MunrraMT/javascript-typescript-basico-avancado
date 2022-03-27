import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const showErrorMessage = (inputItem: HTMLInputElement, msg: string): void => {
  const formFields = inputItem.parentElement;

  if (formFields) {
    const errorMessage = formFields.querySelector('.error-message');
    if (errorMessage) errorMessage.textContent = msg;

    formFields.classList.add(SHOW_ERROR_MESSAGES);
  }

  if (!formFields) console.error('Nenhum form fields encontrado');
};

const hideErrorMessages = (formItem: HTMLFormElement): void => {
  formItem.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach((item) => {
    item.classList.remove(SHOW_ERROR_MESSAGES);
  });
};

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  if (inputs) {
    inputs.forEach((item) => {
      if (!item.value)
        showErrorMessage(item, 'Este campo não pode ficar vazio');
    });
  }
};

const checkEmail = (item: HTMLInputElement): void => {
  if (!isEmail(item.value)) showErrorMessage(item, 'Email inválido');
};

const checkEqualPassword = (
  item1: HTMLInputElement,
  item2: HTMLInputElement,
): void => {
  if (item1.value !== item2.value) {
    showErrorMessage(item1, 'Senhas não batem');
    showErrorMessage(item2, 'Senhas não batem');
  }
};

const shouldSendForm = (formItem: HTMLFormElement): boolean => {
  const isExist =
    formItem.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).length > 0;

  if (isExist) return false;
  return true;
};

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  hideErrorMessages(form);
  checkEmail(email);
  checkEqualPassword(password, password2);
  checkForEmptyFields(username, email, password, password2);

  if (shouldSendForm(form)) console.log('Enviado');
});

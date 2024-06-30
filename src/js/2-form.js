const elementsHTML = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};
const formData = {
  email: '',
  message: '',
};

const { form, email, message } = elementsHTML;
form.addEventListener('input', createUserInput);

(() => {
  const getObjInLocalStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (getObjInLocalStorage) {
    email.value = getObjInLocalStorage.email || '';
    message.textContent = getObjInLocalStorage.message || '';
  }
})();

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  form.reset();
  message.textContent = '';
});

function createUserInput(evt) {
  const userLabel = evt.target;
  if (userLabel.nodeName === 'INPUT') {
    formData.email = evt.target.value;
  } else if (userLabel.nodeName === 'TEXTAREA') {
    formData.message = evt.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function checkStorage() {}

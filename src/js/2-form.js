const elementsHTML = {
  form: document.querySelector('.feedback-form'),
};

const formData = {
  email: '',
  message: '',
};

const { form } = elementsHTML;

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', onSaveInputUser);

function onSubmitForm(evt) {
  evt.preventDefault();
  if (isEmpty()) {
    return alert('Fill please all fields');
  }
  console.log(
    'KEY in localeStorage "feedback-form-state": ',
    JSON.parse(localStorage.getItem('feedback-form-state'))
  );
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

function onSaveInputUser() {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function checkingStorage() {
  const userStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!userStorage) {
    return;
  }
  form.elements.email.value = userStorage.email ?? '';
  form.elements.message.value = userStorage.message ?? '';
}

function isEmpty() {
  return !(
    form.elements.email.value.trim() && form.elements.message.value.trim()
  );
}

checkingStorage();

const userModalForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(userModalForm, {
  /* classTo: 'setup-wizard-form__element',
  errorTextParent: 'setup-wizard-form__element',
  errorTextClass: 'setup-wizard-form__error-text', */
});

userModalForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


import throttle from 'lodash.throttle'; 

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGe_key = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput , 500));
restartForm();



function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  console.log(JSON.parse(localStorage.getItem(STORAGe_key)))
  localStorage.removeItem(STORAGe_key);
};



function onInput() {
  const savedMessage = {
    input: input.value,
    textarea: textarea.value,
  };
  localStorage.setItem(STORAGe_key , JSON.stringify(savedMessage))
};


function restartForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGe_key));
  if (savedMessage) {
    input.value = savedMessage.input;
    textarea.value = savedMessage.textarea;
  }
}
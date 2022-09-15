const formStorage = document.querySelector('form');
const nameStorage = document.querySelector('name');
const emailStorage = document.querySelector('email');
const messageStorage = document.querySelector('message');

const intoLocalStorage = (nameStorage, emailStorage, messageStorage) => {
  const formObject = {
    name: nameStorage.value,
    email: emailStorage.value,
    message: messageStorage.value,
  };

  const intoString = JSON.stringify(formObject);

  localStorage.setItem('a', intoString);
};

const setInputValues = (id, value) => {
  const selectInput = document.getElementById(id);
  selectInput.value = value;
};

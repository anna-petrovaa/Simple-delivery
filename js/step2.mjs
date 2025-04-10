document.addEventListener("DOMContentLoaded", () => {
  const buttonBack = document.querySelector(".button-back");
  const buttonForward = document.querySelector(".button-forward");

  //фамилия
  const inputSurnameRecipient = document.querySelector(
    ".input-surname-recipient"
  );
  const errorSurnameOneRecipient = document.querySelector(
    ".error-surname-recipient-one"
  );

  const errorSurnameTwoRecipient = document.querySelector(
    ".error-surname-recipient-two"
  );

  //имя
  const inputNameRecipient = document.querySelector(".input-name-recipient");
  const errorNameOneRecipient = document.querySelector(
    ".error-name-recipient-one"
  );

  const errorNameTwoRecipient = document.querySelector(
    ".error-name-recipient-two"
  );

  //отчество
  const inputPatronymicRecipient = document.querySelector(
    ".input-patronymic-recipient"
  );

  const errorPatronymicOneRecipient = document.querySelector(
    ".error-patronymic-recipient-one" //алфавит
  );

  const errorPatronymicTwoRecipient = document.querySelector(
    ".error-patronymic-recipient-two" //формат
  );

  //телефон
  const inputNumberRecipient = document.querySelector(
    ".input-number-recipient"
  );
  const errorPhoneOneRecipient = document.querySelector(
    ".error-phone-recipient-one"
  );

  const errorPhoneTwoRecipient = document.querySelector(
    ".error-phone-recipient-two"
  );

  //адрес откуда забрать

  const streetSender = document.querySelector(".input-street-sender");
  const buildingSender = document.querySelector(".input-building-sender");
  const flatSender = document.querySelector(".input-flat-sender");
  const noteSender = document.querySelector(".input-note-sender");

  const errorSenderStreetOne = document.querySelector(
    ".error-street-one-sender"
  ); //пустая строка
  const errorSenderStreetTwo = document.querySelector(
    ".error-street-two-sender"
  ); //недопустимый символ в строке
  const errorSenderStreetThree = document.querySelector(
    ".error-street-three-sender"
  ); //разные алфавиты

  const form = document.querySelector(".form");

  function backDeliveryPage(event) {
    event.preventDefault();
    window.location.href = "delivery.html";
  }

  function validationPhonenumber(event, element, error1, error2) {
    event.preventDefault();
    error1.classList.add("none");
    error2.classList.add("none");
    if (element.value.length == 0) {
      error1.classList.remove("none");
      return;
    } else {
      let regex = /^\+7\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
      if (!regex.test(element.value)) {
        error2.classList.remove("none");
        error1.classList.add("none");
      } else {
        error1.classList.add("none");
        error2.classList.add("none");
      }
    }
  }

  //для фамилии имени отчества
  function validationAlphabetGeneral(event, element, error) {
    event.preventDefault();
    error.classList.add("none");
    let inputValue = element.value;
    if (inputValue.length > 0) {
      let regex1 = /^[A-Za-z-]+$/;
      let regex2 = /^[А-Яа-я-]+$/;

      if (regex1.test(inputValue) || regex2.test(inputValue)) {
        console.log("ВСЁ ОК!!");
        error.classList.add("none");
        //errorPatronymicTwoRecipient.classList.add("none");
      } else {
        error.classList.remove("none");
        console.log("Разные языки");
      }
      //}
    }
  }
  function validationSpecialCharactersGeneral(event, element, error) {
    event.preventDefault();
    error.classList.add("none");
    let inputValue = element.value;
    let regex = /^(?![-])([a-zA-Zа-яА-ЯёЁ]+(?:[-][a-zA-Zа-яА-ЯёЁ]+)*)(?<![-])$/;
    if (regex.test(inputValue)) {
      console.log("Ввод корректный ВСЕ ОК");
      error.classList.add("none");
    } else {
      error.classList.remove("none");
      console.log("Лишние спецсимволы");
    }
  }

  function validationLength(event, element, error) {
    event.preventDefault();
    error.classList.add("none");
    if (element.value.length == 0) {
      error.remove("none");
    }
  }

  function validationSenderStreet(event) {
    event.preventDefault();

    errorSenderStreetOne.classList.add("none"); //пустая строка
    errorSenderStreetTwo.classList.add("none"); //недопустимый символ
    errorSenderStreetThree.classList.add("none"); //разные алфавиты

    if (streetSender.value.length == 0) {
      errorSenderStreetOne.classList.remove("none");
      console.log("Пустая улица отправителя!!");
      return;
    } else {
      let regex1 = /^[A-Za-z-]+$/;
      let regex2 = /^[А-Яа-я-]+$/;
      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/;

      if (regex1.test(streetSender.value) || regex2.test(streetSender.value)) {
        console.log("ВСЁ ОК улица отправителя алфавит!!");
      } else {
        errorSenderStreetThree.classList.remove("none");
      }

      if (validChars.test(streetSender.value)) {
        console.log("Улица отправителя корректна нет спецсимволов");
      } else {
        errorSenderStreetTwo.classList.remove("none");
        console.log("Спецсимвол в улице");
      }
    }
  }

  buttonBack.addEventListener("click", backDeliveryPage);
  //buttonBack.addEventListener("click", validationSenderStreet);
  buttonForward.addEventListener("click", validationSenderStreet);
});

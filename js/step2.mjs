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

  function validationAlphabetGeneral(event, element, error) {
    event.preventDefault();
    error.classList.add("none");
    let inputValue = element.value;
    // if (inputValue.length > 0) {
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

  buttonBack.addEventListener("click", backDeliveryPage);

  //buttonForward.addEventListener("click", validationSpecialCharacters);
});

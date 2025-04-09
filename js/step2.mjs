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

  function validationSurnameRecipient(event) {
    event.preventDefault();
    if (inputSurnameRecipient.value.length == 0) {
      errorSurnameOneRecipient.classList.remove("none");
      errorSurnameTwoRecipient.classList.add("none");
      return false;
    } else {
      errorSurnameOneRecipient.classList.add("none");
    }

    if (!/^[а-я]+$/i.test(inputSurnameRecipient.value)) {
      errorSurnameTwoRecipient.classList.remove("none");
      errorSurnameOneRecipient.classList.add("none");
      return false;
    } else {
      console.log("Успех");
      errorSurnameTwoRecipient.classList.add("none");
    }
  }

  function validationNameRecipient(event) {
    event.preventDefault();
    if (inputNameRecipient.value.length == 0) {
      errorNameOneRecipient.classList.remove("none");
      errorNameTwoRecipient.classList.add("none");
      return false;
    } else {
      errorNameOneRecipient.classList.add("none");
    }

    if (!/^[а-я]+$/i.test(inputNameRecipient.value)) {
      errorNameTwoRecipient.classList.remove("none");
      errorNameOneRecipient.classList.add("none");
      return false;
    } else {
      console.log("Успех имя");
      errorNameTwoRecipient.classList.add("none");
    }
  }

  function validationPhonenumberRecipient(event) {
    event.preventDefault();
    if (inputNumberRecipient.value.length == 0) {
      errorPhoneOneRecipient.classList.remove("none");
      errorPhoneTwoRecipient.classList.add("none");
      return;
    } else {
      let regex = /^\+7\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

      if (!regex.test(inputNumberRecipient.value)) {
        errorPhoneTwoRecipient.classList.remove("none");
        errorPhoneOneRecipient.classList.add("none");
      } else {
        errorPhoneOneRecipient.classList.add("none");
        errorPhoneTwoRecipient.classList.add("none");
      }
    }
  }

  function validationPatronymicRecipient(event) {
    event.preventDefault();

    errorPatronymicOneRecipient.classList.add("none");
    errorPatronymicTwoRecipient.classList.add("none");

    if (inputPatronymicRecipient.value.length > 0) {
      let regex1 = /^[A-Za-z-]+$/;
      let regex2 = /^[А-Яа-я-]+$/;
      //let regex1 = /^[а-яА-ЯёЁa-zA-Z]+$/;
      //let regex1 = /^[а-яА-ЯёЁa-zA-Z]+(?:[ -][а-яА-ЯёЁa-zA-Z]+)*$/;
      let regex3 =
        /^[^!@#$%^&*()_+=<>?\\/-]*([!@#$%^&*()_+=<>?\\/-]{1,})[^!@#$%^&*()_+=<>?\\/-]*$/;

      // if (!regex1.test(inputPatronymicRecipient.value)) {
      //   errorPatronymicOneRecipient.classList.remove("none");
      //   //errorPatronymicTwoRecipient.classList.add("none");
      //   console.log("Разный алфавит");
      // }

      // if (!regex2.test(inputPatronymicRecipient.value)) {
      //   //errorPatronymicOneRecipient.classList.add("none");
      //   errorPatronymicTwoRecipient.classList.remove("none");
      //   console.log("Неккоректный формат");
      // }

      if (
        (regex1.test(inputPatronymicRecipient.value) ||
          regex2.test(inputPatronymicRecipient.value)) &&
        regex3.test(inputPatronymicRecipient.value)
      ) {
        errorPatronymicTwoRecipient.classList.add("none");
        errorPatronymicOneRecipient.classList.add("none");
        console.log("Все ок");
      }

      if (
        (!regex1.test(inputPatronymicRecipient.value) ||
          !regex2.test(inputPatronymicRecipient.value)) &&
        regex3.test(inputPatronymicRecipient.value)
      ) {
        errorPatronymicTwoRecipient.classList.add("none");
        errorPatronymicOneRecipient.classList.remove("none");
        console.log("Только алфавит некорректный");
      }

      if (
        regex1.test(inputPatronymicRecipient.value) &&
        !regex3.test(inputPatronymicRecipient.value)
      ) {
        errorPatronymicTwoRecipient.classList.add("none");
        errorPatronymicOneRecipient.classList.remove("none");
        console.log("Только некорректный ввод");
      }

      if (
        !regex1.test(inputPatronymicRecipient.value) &&
        !regex3.test(inputPatronymicRecipient.value)
      ) {
        errorPatronymicTwoRecipient.classList.remove("none");
        errorPatronymicOneRecipient.classList.remove("none");
        console.log("Все вместе");
      }
    }
  }

  function validationAlphabet(event) {
    event.preventDefault();

    errorPatronymicOneRecipient.classList.add("none");
    //errorPatronymicTwoRecipient.classList.add("none");
    let inputValue = inputPatronymicRecipient.value;

    if (inputPatronymicRecipient.value.length > 0) {
      let regex1 = /^[A-Za-z-]+$/;
      let regex2 = /^[А-Яа-я-]+$/;

      if (regex1.test(inputValue) || regex2.test(inputValue)) {
        console.log("ВСЁ ОК!!");
        errorPatronymicOneRecipient.classList.add("none");
        //errorPatronymicTwoRecipient.classList.add("none");
      } else {
        errorPatronymicOneRecipient.classList.remove("none");
        console.log("Разные языки");
      }
    }
  }

  function validationSpecialCharacters(event) {
    event.preventDefault();

    errorPatronymicTwoRecipient.classList.add("none");
    let inputValue = inputPatronymicRecipient.value;
    let regex = /^(?![-])([a-zA-Zа-яА-ЯёЁ]+(?:[-][a-zA-Zа-яА-ЯёЁ]+)*)(?<![-])$/;

    if (regex.test(inputValue)) {
      console.log("Ввод корректный ВСЕ ОК");
      errorPatronymicTwoRecipient.classList.add("none");
    } else {
      errorPatronymicTwoRecipient.classList.remove("none");
      console.log("Лишние спецсимволы");
    }
  }

  //buttonBack.addEventListener("click", backDeliveryPage);

  buttonForward.addEventListener("click", validationSpecialCharacters);
});

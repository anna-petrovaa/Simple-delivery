document.addEventListener("DOMContentLoaded", () => {
  const buttonBack = document.querySelector(".button-back");
  const buttonForward = document.querySelector(".button-forward");

  const buttonBackRecipient = document.querySelector(".button-back-recipient");
  const buttonForwardRecipient = document.querySelector(
    ".button-forward-recipient"
  );

  const buttonForwardStep3 = document.querySelector(".button-forward-sender");

  const buttonBackStep3 = document.querySelector(".button-back-sender");

  const buttonForwardStep4 = document.querySelector(".button-forward-send");
  const buttonBackStep4 = document.querySelector(".button-back-send");

  const buttonBackStep5 = document.querySelector(".button-back-get");

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

  const errorSurnameThreeRecipient = document.querySelector(
    ".error-surname-recipient-three"
  ); //алфавиты

  //имя
  const inputNameRecipient = document.querySelector(".input-name-recipient");
  const errorNameOneRecipient = document.querySelector(
    ".error-name-recipient-one"
  );

  const errorNameTwoRecipient = document.querySelector(
    ".error-name-recipient-two"
  );

  const errorNameThreeRecipient = document.querySelector(
    ".error-name-recipient-three"
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

  //получатель

  //фамилия
  const inputSurnameSender = document.querySelector(".input-surname-sender");
  const errorSurnameOneSender = document.querySelector(
    ".error-surname-sender-one"
  );

  const errorSurnameTwoSender = document.querySelector(
    ".error-surname-sender-two"
  );

  const errorSurnameThreeSender = document.querySelector(
    ".error-surname-sender-three"
  ); //алфавиты

  //имя
  const inputNameSender = document.querySelector(".input-name-sender");
  const errorNameOneSender = document.querySelector(".error-name-sender-one");

  const errorNameTwoSender = document.querySelector(".error-name-sender-two");

  const errorNameThreeSender = document.querySelector(
    ".error-name-sender-three"
  );

  //отчество
  const inputPatronymicSender = document.querySelector(
    ".input-patronymic-sender"
  );

  const errorPatronymicOneSender = document.querySelector(
    ".error-patronymic-sender-one" //алфавит
  );

  const errorPatronymicTwoSender = document.querySelector(
    ".error-patronymic-sender-two" //формат
  );

  //телефон
  const inputNumberSender = document.querySelector(".input-number-sender");
  const errorPhoneOneSender = document.querySelector(".error-phone-sender-one");

  const errorPhoneTwoSender = document.querySelector(".error-phone-sender-two");

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

  const errorSenderBuildingOne = document.querySelector(
    ".error-building-one-sender"
  ); //пустая строка
  const errorSenderBuildingTwo = document.querySelector(
    ".error-building-two-sender"
  ); //недопустимый символ в строке
  const errorSenderBuildingThree = document.querySelector(
    ".error-building-three-sender"
  ); //разные алфавиты

  const errorSenderFlat = document.querySelector(".error-flat-sender");

  const errorSenderNoteTwo = document.querySelector(".error-note-two-sender"); //недопустимый символ
  const errorSenderNoteThree = document.querySelector(
    ".error-note-three-sender"
  ); //разные алфавиты

  //куда доставить

  const streetRecipient = document.querySelector(".input-street-recipient");
  const buildingRecipient = document.querySelector(".input-building-recipient");
  const flatRecipient = document.querySelector(".input-flat-recipient");
  const noteRecipient = document.querySelector(".input-note-recipient");

  //ошибки куда доставить

  const errorRecipientStreetOne = document.querySelector(
    ".error-street-one-recipient"
  ); //обязательное поле
  const errorRecipientStreetTwo = document.querySelector(
    ".error-street-two-recipient"
  ); //недопустимый символ в строке
  const errorRecipientStreetThree = document.querySelector(
    ".error-street-three-recipient"
  ); //недопустимый символ в строке

  const errorRecipientBuildingOne = document.querySelector(
    ".error-building-one-recipient"
  ); //пустая строка
  const errorRecipientBuildingTwo = document.querySelector(
    ".error-building-two-recipient"
  ); //недопустимый символ в строке
  const errorRecipientBuildingThree = document.querySelector(
    ".error-building-three-recipient"
  ); //разные алфавиты

  const errorRecipientFlat = document.querySelector(".error-flat-recipient");

  const errorRecipientNoteTwo = document.querySelector(
    ".error-note-two-recipient"
  ); //недопустимый символ
  const errorRecipientNoteThree = document.querySelector(
    ".error-note-three-recipient"
  ); //разные алфавиты

  const formStepTwo = document.querySelector(".form-step-2");
  const formStepThree = document.querySelector(".form-step-3");
  const formStepFour = document.querySelector(".form-step-4");
  const formStepFive = document.querySelector(".form-step-5");
  const formStepSix = document.querySelector(".form-step-6");
  const formStepSeven = document.querySelector(".form-step-7");

  const form = document.querySelector(".form");

  function backDeliveryPage(event) {
    event.preventDefault();
    window.location.href = "delivery.html";
  }

  function validationPhonenumber(element, error1, error2) {
    let result = true;
    error1.classList.add("none");
    error2.classList.add("none");
    if (element.value.length == 0) {
      error1.classList.remove("none");
      result = false;
    } else {
      let regex = /^\+7\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
      if (!regex.test(element.value)) {
        error2.classList.remove("none");
        error1.classList.add("none");
        result = false;
      } else {
        error1.classList.add("none");
        error2.classList.add("none");
      }
    }
    return result;
  }

  //для фамилии имени отчества
  function validationAlphabetGeneral(element, error) {
    let result = true;
    error.classList.add("none");
    let inputValue = element.value;
    if (inputValue.length > 0) {
      let regex1 = /^[A-Za-z-]+$/;
      let regex2 = /^[А-Яа-я-]+$/;

      if (regex1.test(inputValue) || regex2.test(inputValue)) {
        //console.log("ВСЁ ОК!!");
        error.classList.add("none");
        result = true;
      } else {
        error.classList.remove("none");
        //console.log("Разные языки");
        result = false;
      }
    }
    return result;
  }
  function validationSpecialCharactersGeneral(element, error) {
    //event.preventDefault();
    let result = true;
    error.classList.add("none");
    let inputValue = element.value;
    //let regex = /^(?![-])([a-zA-Zа-яА-ЯёЁ]+(?:[-][a-zA-Zа-яА-ЯёЁ]+)*)(?<![-])$/;
    let regex =
      /^(?![-])([a-zA-Zа-яА-ЯёЁ]+(?:[-][a-zA-Zа-яА-ЯёЁ]+)*)?(?<![-])$/;
    if (regex.test(inputValue)) {
      //console.log("Ввод корректный ВСЕ ОК");
      error.classList.add("none");
    } else {
      error.classList.remove("none");
      result = false;
      //console.log("Лишние спецсимволы");
    }
    return result;
  }

  function validationLength(element, error) {
    //event.preventDefault();
    let result = true;
    error.classList.add("none");
    if (element.value.length == 0) {
      error.classList.remove("none");
      result = false;
    }
    return result;
  }

  function validationSenderStreet() {
    let isValid = true;
    errorSenderStreetOne.classList.add("none"); //пустая строка
    errorSenderStreetTwo.classList.add("none"); //недопустимый символ
    errorSenderStreetThree.classList.add("none"); //разные алфавиты

    if (streetSender.value.length == 0) {
      errorSenderStreetOne.classList.remove("none");
      //console.log("Пустая улица отправителя!!");
      isValid = false;
      return isValid;
    } else {
      /*let regex1 = /^[A-Za-z-0-9-]+$/;
      let regex2 = /^[А-Яа-я-0-9-]+$/;*/

      let regex1 = /^[A-Za-z0-9-](?:[A-Za-z0-9\- ]*[A-Za-z0-9-])?$/;
      let regex2 = /^[А-Яа-я0-9-](?:[А-Яа-я0-9\- ]*[А-Яа-я0-9-])?$/;
      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/;

      if (regex1.test(streetSender.value) || regex2.test(streetSender.value)) {
        //console.log("ВСЁ ОК улица отправителя алфавит!!");
        isValid = true;
      } else {
        errorSenderStreetThree.classList.remove("none");
        isValid = false;
      }

      if (!validChars.test(streetSender.value)) {
        //console.log("Улица отправителя корректна нет спецсимволов");
        errorSenderStreetTwo.classList.remove("none");
        isValid = false;
      }
    }
    return isValid;
  }

  function validationSenderBuilding() {
    let isValid = true;
    errorSenderBuildingOne.classList.add("none");
    errorSenderBuildingTwo.classList.add("none");
    errorSenderBuildingThree.classList.add("none");

    if (buildingSender.value.length == 0) {
      errorSenderBuildingOne.classList.remove("none");
      //console.log("Пустая улица");
      isValid = false;
      return isValid;
    } else {
      let regex1 = /^[A-Za-z-0-9-]+$/;
      let regex2 = /^[А-Яа-я-0-9-]+$/;
      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/;

      if (
        regex1.test(buildingSender.value) ||
        regex2.test(buildingSender.value)
      ) {
        isValid = true;
        //console.log("ВСЁ ОК улица отправителя алфавит!!");
      } else {
        errorSenderBuildingThree.classList.remove("none");
        isValid = false;
      }

      if (!validChars.test(buildingSender.value)) {
        isValid = false;
        errorSenderBuildingTwo.classList.remove("none");
      }
      return isValid;
    }
  }

  function validationSenderFlat() {
    let isValid = true;
    errorSenderFlat.classList.add("none");
    if (flatSender.value.length == 0) {
      //console.log("Пустая квартира");
      return isValid;
    } else {
      let validChars = /^\d+$/;
      if (!validChars.test(flatSender.value)) {
        errorSenderFlat.classList.remove("none");
        //console.log("Некоректный символ в номере квартиры");
        isValid = false;
      }

      console.log(isValid, "validationSenderFlat");
      return isValid;
    }
  }

  function validationSenderNote() {
    let isValid = true;
    errorSenderNoteTwo.classList.add("none");
    errorSenderNoteThree.classList.add("none");
    if (noteSender.value.length == 0) {
      return isValid;
    } else {
      let regex1 = /^[A-Za-z-0-9]+$/; //алфавит
      let regex2 = /^[А-Яа-я-0-9]+$/; //алфавит

      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/; //спецсимволы
      if (!regex1.test(noteSender.value) && !regex2.test(noteSender.value)) {
        errorSenderNoteThree.classList.remove("none");
        isValid = false;
      }

      if (!validChars.test(noteSender.value)) {
        isValid = false;
        errorSenderNoteTwo.classList.remove("none");
      }
      return isValid;
    }
  }

  //куда доставить

  function validationRecipientStreet(event) {
    event.preventDefault();
    errorRecipientStreetOne.classList.add("none"); //пустая строка
    errorRecipientStreetTwo.classList.add("none"); //недопустимый символ
    errorRecipientStreetThree.classList.add("none"); //разные алфавиты

    if (streetRecipient.value.length == 0) {
      errorRecipientStreetOne.classList.remove("none");
      console.log("Пустая улица отправителя!!");
      return;
    } else {
      /*let regex1 = /^[A-Za-z-]+$/;
      let regex2 = /^[А-Яа-я-]+$/;
      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/;*/

      let regex1 = /^[A-Za-z0-9-](?:[A-Za-z0-9\- ]*[A-Za-z0-9-])?$/;
      let regex2 = /^[А-Яа-я0-9-](?:[А-Яа-я0-9\- ]*[А-Яа-я0-9-])?$/;
      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/;

      if (
        regex1.test(streetRecipient.value) ||
        regex2.test(streetRecipient.value)
      ) {
        console.log("ВСЁ ОК улица отправителя алфавит!!");
      } else {
        errorRecipientStreetThree.classList.remove("none");
      }

      if (validChars.test(streetRecipient.value)) {
        console.log("Улица отправителя корректна нет спецсимволов");
      } else {
        errorRecipientStreetTwo.classList.remove("none");
        console.log("Спецсимвол в улице");
      }
    }
  }

  function validationRecipientBuilding() {
    //event.preventDefault();
    errorRecipientBuildingOne.classList.add("none");
    errorRecipientBuildingTwo.classList.add("none");
    errorRecipientBuildingThree.classList.add("none");

    if (buildingRecipient.value.length == 0) {
      errorRecipientBuildingOne.classList.remove("none");
      console.log("Пустая улица");
      return;
    } else {
      let regex1 = /^[A-Za-z-0-9-]+$/;
      let regex2 = /^[А-Яа-я-0-9-]+$/;
      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/;

      if (
        regex1.test(buildingRecipient.value) ||
        regex2.test(buildingRecipient.value)
      ) {
        console.log("ВСЁ ОК улица получателя  алфавит!!");
      } else {
        errorRecipientBuildingThree.classList.remove("none");
      }

      if (validChars.test(buildingRecipient.value)) {
        console.log("Улица получателя корректна нет спецсимволов");
      } else {
        errorRecipientBuildingTwo.classList.remove("none");
        console.log("Спецсимвол в доме");
      }
    }
  }

  function validationRecipientFlat(event) {
    event.preventDefault();
    errorRecipientFlat.classList.add("none");
    if (flatRecipient.value.length == 0) {
      console.log("Пустая квартира");
      return;
    } else {
      let validChars = /^\d+$/;
      if (!validChars.test(flatRecipient.value)) {
        errorRecipientFlat.classList.remove("none");
        console.log("Некоректный символ в номере квартиры");
      } else {
        console.log("Корректный номер квартиры");
      }
    }
  }

  function validationRecipientNote(event) {
    event.preventDefault();
    errorRecipientNoteTwo.classList.add("none");
    errorRecipientNoteThree.classList.add("none");
    if (noteRecipient.value.length == 0) {
      //console.log("Пустая заметка отправителя");
      return;
    } else {
      let regex1 = /^[A-Za-z-0-9]+$/; //алфавит
      let regex2 = /^[А-Яа-я-0-9]+$/; //алфавит

      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/; //спецсимволы
      if (
        regex1.test(noteRecipient.value) ||
        regex2.test(noteRecipient.value)
      ) {
        //console.log("ВСЁ ОК заметка отправителя алфавит!!");
      } else {
        errorRecipientNoteThree.classList.remove("none");
        console.log("заметка отправителя содержит разный алфавит!!");
      }

      if (validChars.test(noteRecipient.value)) {
        console.log("Заметка отправителя корректна нет спецсимволов");
      } else {
        errorRecipientNoteTwo.classList.remove("none");
        console.log("Спецсимвол в заметке отправителя");
      }
    }
  }

  function validationStep2(event) {
    let isValid = true;
    //фамилия
    let checkSurnameLength = validationLength(
      inputSurnameRecipient,
      errorSurnameOneRecipient
    );

    let checkSurnameAlphabet = validationAlphabetGeneral(
      inputSurnameRecipient,
      errorSurnameThreeRecipient
    );
    let checkSurnameSpecialCharacters = validationSpecialCharactersGeneral(
      inputSurnameRecipient,
      errorSurnameTwoRecipient
    );
    if (
      !checkSurnameLength ||
      !checkSurnameAlphabet ||
      !checkSurnameSpecialCharacters
    ) {
      isValid = false;
    }

    //имя
    let checkNameLength = validationLength(
      inputNameRecipient,
      errorNameOneRecipient
    );

    let checkNameAlphabet = validationAlphabetGeneral(
      inputNameRecipient,
      errorNameThreeRecipient
    );
    let checkNameSpecialCharacters = validationSpecialCharactersGeneral(
      inputNameRecipient,
      errorNameTwoRecipient
    );
    if (!checkNameLength || !checkNameAlphabet || !checkNameSpecialCharacters) {
      isValid = false;
    }
    //отчество

    let checkPatronymicAlphabet = validationAlphabetGeneral(
      inputPatronymicRecipient,
      errorPatronymicOneRecipient
    );
    let checkPatronymicSpecialCharacters = validationSpecialCharactersGeneral(
      inputPatronymicRecipient,
      errorPatronymicTwoRecipient
    );
    if (!checkPatronymicAlphabet || !checkPatronymicSpecialCharacters) {
      isValid = false;
    }
    //телефон
    let checkPhonenumber = validationPhonenumber(
      inputNumberRecipient,
      errorPhoneOneRecipient,
      errorPhoneTwoRecipient
    );
    if (!checkPhonenumber) {
      isValid = false;
    }
    return isValid;
  }

  //переход на шаг 3
  function forwardStep3(event) {
    event.preventDefault();
    let result = validationStep2();
    if (result) {
      formStepTwo.classList.add("none");
      formStepThree.classList.remove("none");
    }
  }

  //назад на шаг 2

  function backStep3(event) {
    event.preventDefault();
    formStepTwo.classList.remove("none");
    formStepThree.classList.add("none");
  }

  function validationStep3() {
    let isValid = true;
    //фамилия
    let checkSurnameLength = validationLength(
      inputSurnameSender,
      errorSurnameOneSender
    );

    let checkSurnameAlphabet = validationAlphabetGeneral(
      inputSurnameSender,
      errorSurnameThreeSender
    );
    let checkSurnameSpecialCharacters = validationSpecialCharactersGeneral(
      inputSurnameSender,
      errorSurnameTwoSender
    );
    if (
      !checkSurnameLength ||
      !checkSurnameAlphabet ||
      !checkSurnameSpecialCharacters
    ) {
      isValid = false;
    }

    //имя
    let checkNameLength = validationLength(inputNameSender, errorNameOneSender);

    let checkNameAlphabet = validationAlphabetGeneral(
      inputNameSender,
      errorNameThreeSender
    );
    let checkNameSpecialCharacters = validationSpecialCharactersGeneral(
      inputNameSender,
      errorNameTwoSender
    );
    if (!checkNameLength || !checkNameAlphabet || !checkNameSpecialCharacters) {
      isValid = false;
    }
    //отчество

    let checkPatronymicAlphabet = validationAlphabetGeneral(
      inputPatronymicSender,
      errorPatronymicOneSender
    );
    let checkPatronymicSpecialCharacters = validationSpecialCharactersGeneral(
      inputPatronymicSender,
      errorPatronymicTwoSender
    );
    if (!checkPatronymicAlphabet || !checkPatronymicSpecialCharacters) {
      isValid = false;
    }
    //телефон
    let checkPhonenumber = validationPhonenumber(
      inputNumberSender,
      errorPhoneOneSender,
      errorPhoneTwoSender
    );
    if (!checkPhonenumber) {
      isValid = false;
    }
    return isValid;
  }

  function forwardStep4(event) {
    event.preventDefault();
    let result = validationStep3();
    if (result) {
      formStepThree.classList.add("none");
      formStepFour.classList.remove("none");
    }
  }

  /*function validationStep4() {
    let checkStreet = validationSenderStreet();
    let checkBuilding = validationSenderBuilding();
    if (checkStreet && checkBuilding) {
      formStepFour.classList.add("none");
      formStepFive.classList.remove("none");
    }
  }*/

  function forwardStep5(event) {
    event.preventDefault();
    let checkStreet = validationSenderStreet();
    let checkBuilding = validationSenderBuilding();
    let checkFlat = validationSenderFlat();
    let checkNote = validationSenderNote();
    if (checkStreet && checkBuilding && checkFlat && checkNote) {
      formStepFour.classList.add("none");
      formStepFive.classList.remove("none");
    }
  }

  function backStep5(event) {
    event.preventDefault();
    formStepFour.classList.remove("none");
    formStepFive.classList.add("none");
  }

  function backStep4(event) {
    event.preventDefault();
    formStepThree.classList.remove("none");
    formStepFour.classList.add("none");
  }

  function saveDataForm() {}

  buttonForwardRecipient.addEventListener("click", forwardStep3);
  buttonBackRecipient.addEventListener("click", backDeliveryPage);
  //buttonBack.addEventListener("click", validationSenderStreet);
  //buttonForward.addEventListener("click", validationRecipientNote);
  buttonBackStep3.addEventListener("click", backStep3);
  buttonForwardStep3.addEventListener("click", forwardStep4);
  buttonBackStep4.addEventListener("click", backStep4);
  buttonForwardStep4.addEventListener("click", forwardStep5);
  buttonBackStep5.addEventListener("click", backStep5);
});

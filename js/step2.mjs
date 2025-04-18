document.addEventListener("DOMContentLoaded", () => {
  const buttonBack = document.querySelector(".button-back");
  const buttonForward = document.querySelector(".button-forward");
  const buttonSendOrder = document.querySelector(".button-send-order");
  const buttonBackOrder = document.querySelector(".button-back-order");
  const buttonBackRecipient = document.querySelector(".button-back-recipient");
  const buttonForwardRecipient = document.querySelector(
    ".button-forward-recipient"
  );

  const buttonForwardStep3 = document.querySelector(".button-forward-sender");

  const buttonBackStep3 = document.querySelector(".button-back-sender");

  const buttonForwardStep4 = document.querySelector(".button-forward-send");
  const buttonBackStep4 = document.querySelector(".button-back-send");

  const buttonBackStep5 = document.querySelector(".button-back-get");
  const buttonForwardStep5 = document.querySelector(".button-forward-get");

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

  const radioSender = document.querySelector(".radio-sender");
  const radioRecipient = document.querySelector(".radio-recipient");
  const errorRadioSender = document.querySelector(".error-radio-sender");

  const stepSevenRecipientFio = document.querySelector(".recipient-fio");
  const stepSevenRecipientPhone = document.querySelector(".recipient-phone");

  const stepSevenSenderFio = document.querySelector(".sender-fio");
  const stepSevenSenderPhone = document.querySelector(".sender-phone");
  const stepSevenSenderAdress = document.querySelector(".sender-adress");
  const stepSevenSenderNote = document.querySelector(".sender-note-card");

  const stepSevenRecipientAdress = document.querySelector(".recipient-adress");
  const stepSevenRecipientNote = document.querySelector(
    ".recipient--note-card"
  );

  const buttonStepSevenRecipientCardOne = document.querySelector(
    ".button-card-recipient-one"
  );
  const buttonStepSevenSenderCardOne = document.querySelector(
    ".button-card-sender-one"
  );

  const buttonStepSevenSenderCardTwo = document.querySelector(
    ".button-card-sender-two"
  );

  const buttonStepSevenRecipientCardTwo = document.querySelector(
    ".button-card-recipient-two"
  );

  const checkboxNonContact = document.querySelector(
    ".input-checkbox-recipient"
  );

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

  function validationRecipientStreet() {
    let isValid = true;
    errorRecipientStreetOne.classList.add("none"); //пустая строка
    errorRecipientStreetTwo.classList.add("none"); //недопустимый символ
    errorRecipientStreetThree.classList.add("none"); //разные алфавиты

    if (streetRecipient.value.length == 0) {
      errorRecipientStreetOne.classList.remove("none");
      isValid = false;
      return isValid;
    } else {
      /*let regex1 = /^[A-Za-z-]+$/;
      let regex2 = /^[А-Яа-я-]+$/;
      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/;*/

      let regex1 = /^[A-Za-z0-9-](?:[A-Za-z0-9\- ]*[A-Za-z0-9-])?$/;
      let regex2 = /^[А-Яа-я0-9-](?:[А-Яа-я0-9\- ]*[А-Яа-я0-9-])?$/;
      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/;

      if (
        !regex1.test(streetRecipient.value) &&
        !regex2.test(streetRecipient.value)
      ) {
        errorRecipientStreetThree.classList.remove("none");
        isValid = false;
      }

      if (!validChars.test(streetRecipient.value)) {
        isValid = false;
        errorRecipientStreetTwo.classList.remove("none");
      }
    }
    return isValid;
  }

  function validationRecipientBuilding() {
    let isValid = true;
    errorRecipientBuildingOne.classList.add("none");
    errorRecipientBuildingTwo.classList.add("none");
    errorRecipientBuildingThree.classList.add("none");

    if (buildingRecipient.value.length == 0) {
      errorRecipientBuildingOne.classList.remove("none");
      isValid = false;
      return isValid;
    } else {
      let regex1 = /^[A-Za-z-0-9-]+$/;
      let regex2 = /^[А-Яа-я-0-9-]+$/;
      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/;

      if (
        !regex1.test(buildingRecipient.value) &&
        !regex2.test(buildingRecipient.value)
      ) {
        errorRecipientBuildingThree.classList.remove("none");
        isValid = false;
      }

      if (!validChars.test(buildingRecipient.value)) {
        isValid = false;
        errorRecipientBuildingTwo.classList.remove("none");
      }
      return isValid;
    }
  }

  function validationRecipientFlat() {
    let isValid = true;
    errorRecipientFlat.classList.add("none");
    if (flatRecipient.value.length == 0) {
      console.log("Пустая квартира");

      return isValid;
    } else {
      let validChars = /^\d+$/;
      if (!validChars.test(flatRecipient.value)) {
        errorRecipientFlat.classList.remove("none");
        isValid = false;
      }
      return isValid;
    }
  }

  function validationRecipientNote() {
    let isValid = true;
    errorRecipientNoteTwo.classList.add("none");
    errorRecipientNoteThree.classList.add("none");
    if (noteRecipient.value.length == 0) {
      //console.log("Пустая заметка отправителя");
      return isValid;
    } else {
      let regex1 = /^[A-Za-z-0-9]+$/; //алфавит
      let regex2 = /^[А-Яа-я-0-9]+$/; //алфавит

      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/; //спецсимволы
      if (
        !regex1.test(noteRecipient.value) &&
        !regex2.test(noteRecipient.value)
      ) {
        errorRecipientNoteThree.classList.remove("none");
        isValid = false;
      }

      if (!validChars.test(noteRecipient.value)) {
        isValid = false;
        errorRecipientNoteTwo.classList.remove("none");
      }
      return isValid;
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

  function forwardStep6(event) {
    event.preventDefault();
    let checkStreet = validationRecipientStreet();
    let checkBuilding = validationRecipientBuilding();
    let checkFlat = validationRecipientFlat();
    let checkNote = validationRecipientNote();
    if (checkStreet && checkBuilding && checkFlat && checkNote) {
      formStepFive.classList.add("none");
      formStepSix.classList.remove("none");
    }
  }

  function forwardStep7(event) {
    event.preventDefault();
    //перед тем как перейти на страницу отрисовываем карточки
    renderSevenStepGeneral(
      inputSurnameRecipient,
      inputNameRecipient,
      inputPatronymicRecipient,
      inputNumberRecipient,
      stepSevenRecipientFio,
      stepSevenRecipientPhone
    );

    renderSevenStepGeneral(
      inputSurnameSender,
      inputNameSender,
      inputPatronymicSender,
      inputNumberSender,
      stepSevenSenderFio,
      stepSevenSenderPhone
    );

    renderSevenStepGeneral(
      streetSender,
      buildingSender,
      flatSender,
      noteSender,
      stepSevenSenderAdress,
      stepSevenSenderNote
    );

    renderSevenStepGeneral(
      streetRecipient,
      buildingRecipient,
      flatRecipient,
      noteRecipient,
      stepSevenRecipientAdress,
      stepSevenRecipientNote
    );

    if (radioSender.checked && radioRecipient.checked) {
      errorRadioSender.classList.remove("none");
    }
    if (!radioSender.checked && !radioRecipient.checked) {
      errorRadioSender.classList.remove("none");
    }

    if (!radioSender.checked && radioRecipient.checked) {
      formStepSix.classList.add("none");
      formStepSeven.classList.remove("none");
    }
    if (radioSender.checked && !radioRecipient.checked) {
      formStepSix.classList.add("none");
      formStepSeven.classList.remove("none");
    }
  }

  function backStep6(event) {
    //переход на шаг 5
    event.preventDefault();
    formStepFive.classList.remove("none");
    formStepSix.classList.add("none");
  }

  function backStep7(event) {
    event.preventDefault();
    formStepSix.classList.remove("none");
    formStepSeven.classList.add("none");
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

  function renderSevenStepGeneral(
    inputFirst,
    inputSecond,
    inputThird,
    inputFourth,
    cardElemFirst,
    cardElemSecond
  ) {
    let values = [inputFirst.value, inputSecond.value, inputThird.value]
      .filter(Boolean)
      .join(" ");

    cardElemFirst.textContent = values;
    cardElemSecond.textContent = inputFourth.value;
  }

  //для отображения инфы под карточками
  function renderCalcInfo() {}

  //для возможности редактировать карточку
  function editFirstCardStep7(event) {
    event.preventDefault();
    formStepTwo.classList.remove("none");
    formStepSeven.classList.add("none");
  }

  function editSecondCardStep7(event) {
    event.preventDefault();
    formStepThree.classList.remove("none");
    formStepSeven.classList.add("none");
  }

  function editThirdCardStep7(event) {
    event.preventDefault();
    formStepFour.classList.remove("none");
    formStepSeven.classList.add("none");
  }

  function editFourthCardStep7(event) {
    event.preventDefault();
    formStepFive.classList.remove("none");
    formStepSeven.classList.add("none");
  }

  function getDataPayload() {
    let dataPayload = JSON.parse(localStorage.getItem("payload"));
    //console.log(dataPayload);
    //console.log(typeof (dataPayload.receiverPoint.latitude, "receiverPoint"));
    return dataPayload;
  }

  async function sendOrder(event) {
    event.preventDefault();
    let payload = getDataPayload();
    let point = getPointInfo();
    try {
      const order = {};

      order.senderPoint = {
        id: point[0].id,
        name: point[0].name,
        latitude: point[0].latitude,
        longitude: point[0].longitude,
      };
      order.senderAddress = {
        street: streetSender.value,
        house: buildingSender.value,
        apartment: flatSender.value,
        comment: noteSender.value,
      };
      order.sender = {
        firstname: inputNameSender.value,
        lastname: inputSurnameSender.value,
        middlename: inputPatronymicSender.value,
        phone: inputNumberSender.value,
      };

      order.receiverPoint = {
        id: point[1].id,
        name: point[1].name,
        latitude: point[1].latitude,
        longitude: point[1].longitude,
      };

      order.receiverAddress = {
        street: streetRecipient.value,
        house: buildingRecipient.value,
        apartment: flatRecipient.value,
        comment: noteRecipient.value,
        isNonContact: checkboxNonContact.checked,
      };

      //order.receiverAddress.isNonContact = checkboxNonContact.checked;

      order.receiver = {
        firstname: inputNameRecipient.value,
        lastname: inputSurnameRecipient.value,
        middlename: inputPatronymicRecipient.value,
        phone: inputNumberRecipient.value,
      };

      if (radioSender.checked) {
        order.payer = "SENDER";
      }
      if (radioRecipient.checked) {
        order.payer = "RECEIVER";
      }

      order.option = {
        id: payload.option.id,
        price: payload.option.price,
        days: payload.option.days,
        name: payload.option.name,
        type: payload.option.type,
      };
      localStorage.setItem("order", JSON.stringify(order));
      const orderData = await postOrderCreate(order);
      localStorage.setItem("orderData", orderData);
      console.log("orderData", JSON.stringify(orderData));
    } catch (err) {
      alert("Ошибка в function sendOrder");
    }
    //console.log("order", order);
    //let datatest = localStorage.getItem("order");
    //console.log(datatest, "datatest");
    //console.log(JSON.parse(datatest), "JSON");
  }

  function getPointInfo() {
    let dataPayload = getDataPayload();
    let dataPoints = JSON.parse(localStorage.getItem("points"));
    let senderPointInfo = dataPoints.find((point) => {
      return (
        point.latitude == dataPayload.senderPoint.latitude &&
        point.longitude == dataPayload.senderPoint.longitude
      );
    });

    let receiverPointInfo = dataPoints.find((point) => {
      return (
        point.latitude == dataPayload.receiverPoint.latitude &&
        point.longitude == dataPayload.receiverPoint.longitude
      );
    });
    return [senderPointInfo, receiverPointInfo];
  }

  async function postOrderCreate(data) {
    try {
      const response = await fetch(
        "https://shift-intensive.ru/api/delivery/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Указываем, что отправляем JSON
          },
          body: JSON.stringify(data), // Преобразуем данные в JSON
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Преобразуем ответ в JSON
      //console.log("postOrderCreate", result);
      return result;
    } catch (err) {
      alert(err);
    }
  }

  buttonForwardRecipient.addEventListener("click", forwardStep3);
  buttonBackRecipient.addEventListener("click", backDeliveryPage);
  //buttonBack.addEventListener("click", validationSenderStreet);
  //buttonForward.addEventListener("click", validationRecipientNote);
  buttonBackStep3.addEventListener("click", backStep3);
  buttonForwardStep3.addEventListener("click", forwardStep4);
  buttonBackStep4.addEventListener("click", backStep4);
  buttonForwardStep4.addEventListener("click", forwardStep5);
  buttonBackStep5.addEventListener("click", backStep5);
  buttonForwardStep5.addEventListener("click", forwardStep6);
  buttonBack.addEventListener("click", backStep6);
  buttonForward.addEventListener("click", forwardStep7);
  //buttonForwardRecipient.addEventListener("click", renderStep7Info);
  buttonStepSevenRecipientCardOne.addEventListener("click", editFirstCardStep7);
  buttonStepSevenSenderCardOne.addEventListener("click", editSecondCardStep7);
  buttonStepSevenSenderCardTwo.addEventListener("click", editThirdCardStep7);
  buttonStepSevenRecipientCardTwo.addEventListener(
    "click",
    editFourthCardStep7
  );
  buttonBackOrder.addEventListener("click", backStep7);
  buttonSendOrder.addEventListener("click", sendOrder);
});

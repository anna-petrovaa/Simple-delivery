document.addEventListener("DOMContentLoaded", () => {
  const buttonBack = document.querySelector(".button-back");
  const buttonForward = document.querySelector(".button-forward");

  const buttonBackRecipient = document.querySelector(".button-back-recipient");
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

  function validationSenderBuilding(event) {
    event.preventDefault();
    errorSenderBuildingOne.classList.add("none");
    errorSenderBuildingTwo.classList.add("none");
    errorSenderBuildingThree.classList.add("none");

    if (buildingSender.value.length == 0) {
      errorSenderBuildingOne.classList.remove("none");
      console.log("Пустая улица");
      return;
    } else {
      let regex1 = /^[A-Za-z-]+$/;
      let regex2 = /^[А-Яа-я-]+$/;
      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/;

      if (
        regex1.test(buildingSender.value) ||
        regex2.test(buildingSender.value)
      ) {
        console.log("ВСЁ ОК улица отправителя алфавит!!");
      } else {
        errorSenderBuildingThree.classList.remove("none");
      }

      if (validChars.test(buildingSender.value)) {
        console.log("Улица отправителя корректна нет спецсимволов");
      } else {
        errorSenderBuildingTwo.classList.remove("none");
        console.log("Спецсимвол в доме");
      }
    }
  }

  function validationSenderFlat(event) {
    event.preventDefault();
    errorSenderFlat.classList.add("none");
    if (flatSender.value.length == 0) {
      console.log("Пустая квартира");
      return;
    } else {
      let validChars = /^\d+$/;
      if (!validChars.test(flatSender.value)) {
        errorSenderFlat.classList.remove("none");
        console.log("Некоректный символ в номере квартиры");
      } else {
        console.log("Корректный номер квартиры");
      }
    }
  }

  function validationSenderNote(event) {
    event.preventDefault();
    errorSenderNoteTwo.classList.add("none");
    errorSenderNoteThree.classList.add("none");
    if (noteSender.value.length == 0) {
      console.log("Пустая заметка отправителя");
      return;
    } else {
      let regex1 = /^[A-Za-z-0-9]+$/; //алфавит
      let regex2 = /^[А-Яа-я-0-9]+$/; //алфавит

      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/; //спецсимволы
      if (regex1.test(noteSender.value) || regex2.test(noteSender.value)) {
        console.log("ВСЁ ОК заметка отправителя алфавит!!");
      } else {
        errorSenderNoteThree.classList.remove("none");
        console.log("заметка отправителя содержит разный алфавит!!");
      }

      if (validChars.test(noteSender.value)) {
        console.log("Заметка отправителя корректна нет спецсимволов");
      } else {
        errorSenderNoteTwo.classList.remove("none");
        console.log("Спецсимвол в заметке отправителя");
      }
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
      let regex1 = /^[A-Za-z-]+$/;
      let regex2 = /^[А-Яа-я-]+$/;
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

  function validationRecipientBuilding(event) {
    event.preventDefault();
    errorRecipientBuildingOne.classList.add("none");
    errorRecipientBuildingTwo.classList.add("none");
    errorRecipientBuildingThree.classList.add("none");

    if (buildingRecipient.value.length == 0) {
      errorRecipientBuildingOne.classList.remove("none");
      console.log("Пустая улица");
      return;
    } else {
      let regex1 = /^[A-Za-z-0-9]+$/;
      let regex2 = /^[А-Яа-я-0-9]+$/;
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
      console.log("Пустая заметка отправителя");
      return;
    } else {
      let regex1 = /^[A-Za-z-0-9]+$/; //алфавит
      let regex2 = /^[А-Яа-я-0-9]+$/; //алфавит

      let validChars = /^[a-zA-Z0-9а-яА-ЯёЁ].*[a-zA-Z0-9а-яА-ЯёЁ]$/; //спецсимволы
      if (
        regex1.test(noteRecipient.value) ||
        regex2.test(noteRecipient.value)
      ) {
        console.log("ВСЁ ОК заметка отправителя алфавит!!");
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

  function validationStep2(event) {}

  buttonBackRecipient.addEventListener("click", backDeliveryPage);
  //buttonBack.addEventListener("click", validationSenderStreet);
  buttonForward.addEventListener("click", validationRecipientNote);
});

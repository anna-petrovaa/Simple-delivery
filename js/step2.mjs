document.addEventListener("DOMContentLoaded", () => {
  const buttonBack = document.querySelector(".button-back");
  const buttonForward = document.querySelector(".button-forward");

  const inputSurnameRecipient = document.querySelector(
    ".input-surname-recipient"
  );
  const inputNameRecipient = document.querySelector(".input-name-recipient");
  const inputPatronymicRecipient = document.querySelector(
    ".input-patronymic-recipient"
  );
  const inputNumberRecipient = document.querySelector(
    ".input-number-recipient"
  );
  const errorSurnameOneRecipient = document.querySelector(
    ".error-surname-recipient-one"
  );

  const errorSurnameTwoRecipient = document.querySelector(
    ".error-surname-recipient-two"
  );

  const form = document.querySelector(".form");

  function backDeliveryPage(event) {
    event.preventDefault();
    window.location.href = "delivery.html";
  }

  function validationNameRecipient(event) {
    event.preventDefault();
    if (inputSurnameRecipient.value.length == 0) {
      errorSurnameOneRecipient.classList.remove("none");
      return false;
    } else {
      errorSurnameOneRecipient.classList.add("none");
    }

    if (!/^[а-я]+$/i.test(inputSurnameRecipient.value)) {
      errorSurnameTwoRecipient.classList.remove("none");
      return false;
    } else {
      console.log("Успех");
      errorSurnameOneRecipient.classList.add("none");
    }
  }

  //buttonBack.addEventListener("click", backDeliveryPage);

  buttonForward.addEventListener("click", validationNameRecipient);
});

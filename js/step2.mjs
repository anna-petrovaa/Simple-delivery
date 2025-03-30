document.addEventListener("DOMContentLoaded", () => {
  const buttonBack = document.querySelector(".button-back");
  const buttonForward = document.querySelector(".button-forward");

  const inputSurname = document.querySelector(".input-surname");
  const inputName = document.querySelector(".input-name");
  const inputPatronymic = document.querySelector(".input-patronymic");
  const inputNumber = document.querySelector(".input-number");
  const errorSurnameOne = document.querySelector(".error-surname-one");

  function backDeliveryPage(event) {
    event.preventDefault();
    window.location.href = "delivery.html";
  }

  function validationName(event) {
    event.preventDefault();
    if (inputSurname.value.length == 0) {
      errorSurnameOne.classList.remove("none");
    }
  }

  buttonBack.addEventListener("click", backDeliveryPage);
  //buttonForward.addEventListener("click", validationName);
});

document.addEventListener("DOMContentLoaded", () => {
  const buttonUpdateProfile = document.querySelector(".update-data-button");
  const inputSurname = document.querySelector(".input-surname");
  const inputName = document.querySelector(".input-name");
  const inputMiddlename = document.querySelector(".input-middlename");
  const inputNumber = document.querySelector(".input-number");
  const inputEmail = document.querySelector(".input-email");

  function updateProfile(event) {
    event.preventDefault();
  }

  buttonUpdateProfile.addEventListener("click", updateProfile);
});

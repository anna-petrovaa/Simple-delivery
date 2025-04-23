//import { getDataCity } from "./js/getPoints.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const buttonUpdateProfile = document.querySelector(".update-data-button");
  const inputSurname = document.querySelector(".input-surname");
  const inputName = document.querySelector(".input-name");
  const inputMiddlename = document.querySelector(".input-middlename");
  const inputNumber = document.querySelector(".input-number");
  const inputEmail = document.querySelector(".input-email");
  const cityPointSelect = document.querySelector(".city-select");

  function updateProfile(event) {
    event.preventDefault();
  }

  function renderCityPoints() {
    let points = JSON.parse(localStorage.getItem("points"));
    console.log("renderCityPoints", points);
    points.forEach((point) => {
      const cityOption = document.createElement("option");
      cityOption.value = point.id;
      cityOption.textContent = point.name;
      cityPointSelect.appendChild(cityOption);
    });
  }

  renderCityPoints();

  async function getPointsProfile() {}

  buttonUpdateProfile.addEventListener("click", updateProfile);
});

import {
  citySelectSend,
  citySelectReceipt,
  approximateSelect,
  inputExactLength,
  inputExactWidth,
  inputExactHeight,
  inputExactWeight,
} from "./js/formFiels.mjs";
import { getPoints } from "./js/getPoints.mjs";
import { getTypes, saveExactTypeSize } from "./js/getTypes.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.querySelector(".calculate-form-button");

  const selectSize = document.querySelector(".select-size");
  //const approximateSelect = document.querySelector(".select-approximate");
  const inputExactContainer = document.querySelector(".container-input-exact");

  const toggleSwitch = document.querySelector(".toggle-switch");
  const radioApproximate = document.querySelector(".toggle-switch-approximate");
  const radioExact = document.querySelector(".toggle-switch-exact");

  async function calculate(event) {
    //?  async нужно ли? сработает при кнопке рассчитать
    event.preventDefault();
    saveExactTypeSize();
    let validationResult = calculateValidation();

    if (validationResult == false) {
      alert("Заполните все поля формы");
      return;
    }

    try {
      const payload = {};

      if (radioApproximate.checked) {
        const types = JSON.parse(localStorage.getItem("types"));
        //console.log(types);
        const packageInfo = types.find(
          (type) => type.id === approximateSelect.value
        );

        payload.package = {
          length: packageInfo.length,
          width: packageInfo.width,
          weight: packageInfo.weight,
          height: packageInfo.height,
        };

        //console.log("payload", payload);
      }

      if (radioExact.checked) {
        const exactTypes = JSON.parse(localStorage.getItem("exactTypes"));
        payload.package = {
          length: Number(exactTypes[0]),
          width: Number(exactTypes[1]),
          weight: Number(exactTypes[2]),
          height: Number(exactTypes[3]),
        };
        //console.log("payload", payload);
      }

      const points = JSON.parse(localStorage.getItem("points"));
      //console.log("function calculate", points);
      const citySendInfo = points.find(
        (point) => point.id === citySelectSend.value
      );
      const cityReceiveInfo = points.find(
        (point) => point.id === citySelectReceipt.value
      );

      payload.senderPoint = {
        latitude: citySendInfo.latitude,
        longitude: citySendInfo.longitude,
      };

      payload.receiverPoint = {
        latitude: cityReceiveInfo.latitude,
        longitude: cityReceiveInfo.longitude,
      };

      console.log("payload", payload);
      localStorage.setItem("payload", JSON.stringify(payload));
      //console.log("payloadJSON", JSON.stringify(payload));

      const calculateData = await postDeliveryCalc(payload);
      //console.log(calculateData);
      //console.log("calculateData.options", calculateData.options[0].days);
      localStorage.setItem("calculateData", JSON.stringify(calculateData));
      window.location.href = "delivery.html";
    } catch (err) {
      alert(err);
      alert("Ошибка function calculate");
    }
  }

  getPoints();
  getTypes();

  /**скрывает и показывает выбор размеров в зависимости от типа размера */
  function choseShowType() {
    if (radioApproximate.checked) {
      //getTypes().then((result) => {
      showApproximateSelect();
      hideInputExactContainer();
      //}); //это ОК ?
    } else {
      if (radioExact.checked) {
        showInputExactContainer();
        hideApproximateSelect();
      } else {
        hideApproximateSelect();
        hideInputExactContainer();
      }
    }
  }

  function calculateValidation() {
    let isValid;
    if (!citySelectSend.value || !approximateSelect.value) {
      //alert("Заполните поля формы");
      isValid = false;
      return isValid;
    }

    if (!citySelectReceipt.value || !approximateSelect.value) {
      //alert("Заполните поля формы");
      isValid = false;
      return isValid;
    }

    if (
      radioExact.checked &&
      (inputExactLength.value.length == 0 ||
        inputExactWidth.value.length == 0 ||
        inputExactHeight.value.length == 0 ||
        inputExactWeight.value.length == 0)
    ) {
      //alert("Заполните поля формы по размерам");
      isValid = false;
      return isValid;
    }

    if (radioApproximate.checked && !approximateSelect.value) {
      //alert("Заполните все поля формы.Выберете размер посылки ");
      isValid = false;
      return isValid;
    }
    isValid = true;
    return isValid;
  }

  //POST запрос!!
  async function postDeliveryCalc(data) {
    try {
      const response = await fetch(
        "https://shift-intensive.ru/api/delivery/calc",
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
      console.log(" postDeliveryCalc", result);
      return result;
    } catch (err) {
      alert(err);
    }
  }

  //postDeliveryCalc();

  function showApproximateSelect() {
    approximateSelect.classList.remove("none");
  }

  function hideApproximateSelect() {
    approximateSelect.classList.add("none");
  }

  function showInputExactContainer() {
    inputExactContainer.classList.remove("none");
  }

  function hideInputExactContainer() {
    inputExactContainer.classList.add("none");
  }

  calculateButton.addEventListener("click", calculate);

  radioApproximate.addEventListener("click", choseShowType);
  radioExact.addEventListener("click", choseShowType);

  //calculateButton.addEventListener("click", saveExactTypeSize);
});

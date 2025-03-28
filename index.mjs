import {
  citySelectSend,
  citySelectReceipt,
  approximateSelect,
  inputExactLength,
  inputExactWidth,
  inputExactHeight,
  inputExactWeight,
  standartPrice,
  standartDay,
  expressPrice,
  expressDay,
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

  //const standartPrice = document.querySelector(".standart-price"); //стоимость доставки
  //console.log(standartPrice, "селектор  standartPrice");
  //const standartDay = document.querySelector(".standart-span"); //длительность доставки

  //const expressPrice = document.querySelector(".express-price");
  //const expressDay = document.querySelector(".express-span");

  async function calculate(event) {
    //?  async нужно ли? сработает при кнопке рассчитать
    event.preventDefault();
    try {
      //window.location.href = "delivery.html";

      // if (selectSize.value == "exact") {
      //   validInputExact();
      // }
      // window.location.href = "delivery.html";

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
      //console.log("payloadJSON", JSON.stringify(payload));

      const calculateData = await postDeliveryCalc(payload);
      //console.log(calculateData);
      //console.log("calculateData.options", calculateData.options[0].days);
      localStorage.setItem("calculateData", JSON.stringify(calculateData));
      standartPrice.textContent = `${calculateData.options[0].price} ₽`;
      standartDay.textContent = `${calculateData.options[0].days} рабочих дней`;

      expressPrice.textContent = `${calculateData.options[1].price} ₽`;
      expressDay.textContent = `${calculateData.options[1].days} рабочих дней`;
      window.location.href = "delivery.html";
    } catch (err) {
      alert(err);
      alert("Ошибка function calculate");
    }
  }

  getPoints();
  getTypes();
  saveExactTypeSize();

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

  //choseType();
  //переписать
  function validInputExact() {
    if (inputExactLength.value.length == 0) {
      alert("Поле не должно быть пустым");
    }

    if (inputExactWidth.value.length == 0) {
      alert("Поле не должно быть пустым");
    }

    if (inputExactHeight.value.length == 0) {
      alert("Поле не должно быть пустым");
    }

    if (inputExactWeight.value.length == 0) {
      alert("Поле не должно быть пустым");
    }
  }

  //POST запрос!!
  async function postDeliveryCalc(data) {
    try {
      //где-то нужно получить json перед тем как отправить ?

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
  //selectSize.addEventListener("change", choseType);
  radioApproximate.addEventListener("click", choseShowType);
  radioExact.addEventListener("click", choseShowType);

  calculateButton.addEventListener("click", saveExactTypeSize);
  calculateButton.addEventListener("click", saveExactTypeSize);

  //calculateButton.addEventListener("click", postDeliveryCalc);
});

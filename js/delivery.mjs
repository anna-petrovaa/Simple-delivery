document.addEventListener("DOMContentLoaded", () => {
  const standartPrice = document.querySelector(".standart-price"); //стоимость доставки
  //console.log(standartPrice, "селектор  standartPrice");
  const standartDay = document.querySelector(".standart-span"); //длительность доставки

  const expressPrice = document.querySelector(".express-price");
  const expressDay = document.querySelector(".express-span");

  const radioStandart = document.querySelector(".standart-radio-input");
  const radioExpress = document.querySelector(".express-radio-input");

  const expressCardContainer = document.querySelector(
    ".express-card-container"
  );
  const standartCardContainer = document.querySelector(
    ".standart-card-container"
  );

  let calculateData = JSON.parse(localStorage.getItem("calculateData"));

  if (!calculateData) {
    window.location.href = "index.html";
  }

  standartPrice.textContent = `${calculateData.options[0].price} ₽`;
  standartDay.textContent = `${calculateData.options[0].days} рабочих дней`;

  expressPrice.textContent = `${calculateData.options[1].price} ₽`;
  expressDay.textContent = `${calculateData.options[1].days} рабочих дней`;

  function choseDelivery() {
    if (radioStandart.checked) {
      standartCardContainer.classList.add("checked");
      expressCardContainer.classList.remove("checked");
    }

    if (radioExpress.checked) {
      standartCardContainer.classList.remove("checked");
      expressCardContainer.classList.add("checked");
    }
    window.location.href = "step2.html";
  }

  radioStandart.addEventListener("change", choseDelivery);
  radioExpress.addEventListener("change", choseDelivery);
});

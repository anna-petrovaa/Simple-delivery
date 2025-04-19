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
  let payload = JSON.parse(localStorage.getItem("payload"));
  //console.log(payload, "payload");
  //console.log()

  if (!calculateData) {
    window.location.href = "index.html";
  }

  standartPrice.textContent = `${calculateData.options[0].price} ₽`;
  standartDay.textContent = `${calculateData.options[0].days} рабочих дней`;

  expressPrice.textContent = `${calculateData.options[1].price} ₽`;
  expressDay.textContent = `${calculateData.options[1].days} рабочих дней`;

  function choseDelivery() {
    //let TypeStorage = [];
    if (radioStandart.checked) {
      //TypeStorage.push(calculateData.options[0].type);
      standartCardContainer.classList.add("checked");
      expressCardContainer.classList.remove("checked");
      payload.option = {
        id: calculateData.options[0].id,
        price: calculateData.options[0].price,
        days: calculateData.options[0].days,
        name: calculateData.options[0].name,
        type: calculateData.options[0].type,
      };
    }

    if (radioExpress.checked) {
      //TypeStorage.push(calculateData.options[1].type);
      standartCardContainer.classList.remove("checked");
      expressCardContainer.classList.add("checked");

      payload.option = {
        id: calculateData.options[1].id,
        price: calculateData.options[1].price,
        days: calculateData.options[1].days,
        name: calculateData.options[1].name,
        type: calculateData.options[1].type,
      };
    }
    localStorage.setItem("payload", JSON.stringify(payload));
    window.location.href = "step2.html";
  }

  radioStandart.addEventListener("change", choseDelivery);
  radioExpress.addEventListener("change", choseDelivery);
});

document.addEventListener("DOMContentLoaded", () => {
  const standartPrice = document.querySelector(".standart-price"); //стоимость доставки
  //console.log(standartPrice, "селектор  standartPrice");
  const standartDay = document.querySelector(".standart-span"); //длительность доставки

  const expressPrice = document.querySelector(".express-price");
  const expressDay = document.querySelector(".express-span");
  let calculateData = JSON.parse(localStorage.getItem("calculateData"));

  if (!calculateData) {
    window.location.href = "index.html";
  }

  standartPrice.textContent = `${calculateData.options[0].price} ₽`;
  standartDay.textContent = `${calculateData.options[0].days} рабочих дней`;

  expressPrice.textContent = `${calculateData.options[1].price} ₽`;
  expressDay.textContent = `${calculateData.options[1].days} рабочих дней`;
});

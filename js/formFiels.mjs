const deliveryForm = document.forms.namedItem("deliveryForm");

export const citySelectSend = deliveryForm.elements.namedItem("citySend");
export const citySelectReceipt = deliveryForm.elements.namedItem("cityReceive");

export const suggestionsSend = document.querySelector(".suggestions-send");
export const suggestionsReceive = document.querySelector(
  ".suggestions-receive"
);

export const approximateSelect = document.querySelector(".select-approximate");

export const inputExactLength = document.querySelector(".input-length");
export const inputExactWidth = document.querySelector(".input-width");
export const inputExactHeight = document.querySelector(".input-height");
export const inputExactWeight = document.querySelector(".input-weight");

export const standartPrice = document.querySelector(".standart-price"); //стоимость доставки
//console.log(standartPrice, "селектор  standartPrice");
export const standartDay = document.querySelector(".standart-span"); //длительность доставки

export const expressPrice = document.querySelector(".express-price");
export const expressDay = document.querySelector(".express-span");

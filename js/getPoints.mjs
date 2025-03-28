import { handleCitySuggestionSelect } from "./formFieldsHandlers.mjs";
import {
  citySelectReceipt,
  citySelectSend,
  suggestionsSend,
  suggestionsReceive,
} from "./formFiels.mjs";
/**ф-я чтобы не дублировать код в getPoints  */
function addSuggestions(parentElement, point) {
  const suggestion = document.createElement("span");
  suggestion.className = "city-span";
  suggestion.setAttribute("data-id", point.id);
  suggestion.textContent = point.name;
  suggestion.addEventListener("click", handleCitySuggestionSelect); //при клике-заполняем форму

  parentElement.append(suggestion);
}

//получаем массив городов
async function getDataCity() {
  try {
    const dataResponse = await fetch(
      `https://shift-intensive.ru/api/delivery/points`
    );
    const data = await dataResponse.json();
    const cityPoints = data.points; //массив городов

    return cityPoints;
  } catch (err) {
    console.error("Произошла ошибка!", err);
  }
}

//отприсовываем города при нажатии на select
export async function getPoints() {
  try {
    const points = await getDataCity();

    localStorage.setItem("points", JSON.stringify(points)); //сохраняем в localStorage, чтобы испоьзовать в другом месте
    //console.log(points, "function getPoints");
    //для города отправки
    points.forEach((point) => {
      const option = document.createElement("option");
      option.value = point.id;
      option.textContent = point.name;
      citySelectSend.append(option);
    });

    //для города назначения
    points.forEach((point) => {
      const option = document.createElement("option");
      option.value = point.id;
      option.textContent = point.name;
      citySelectReceipt.append(option);
    });

    // заполняем предложенные варианты городов в span
    points.slice(0, 3).forEach((point) => {
      addSuggestions(suggestionsSend, point);
      addSuggestions(suggestionsReceive, point);
    });
  } catch (err) {
    alert(err);
  }
}

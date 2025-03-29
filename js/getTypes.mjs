import { approximateSelect } from "./formFiels.mjs";
import {
  inputExactLength,
  inputExactWidth,
  inputExactHeight,
  inputExactWeight,
} from "./formFiels.mjs";

async function getDataTypes() {
  //получение типов посылок
  try {
    const dataResponse = await fetch(
      "https://shift-intensive.ru/api/delivery/package/types"
    );
    const data = await dataResponse.json();
    const dataPackages = data.packages;

    return dataPackages;
  } catch (err) {
    alert(err);
  }
}
//отрисовка типов посылок в селекте
export async function getTypes() {
  try {
    const types = await getDataTypes();
    localStorage.setItem("types", JSON.stringify(types));
    //console.log("types", types);
    return types.forEach((type) => {
      const option = document.createElement("option");
      option.value = type.id;
      option.textContent = type.name;
      approximateSelect.append(option);
    });
  } catch (err) {
    alert(err);
  }
}


export function saveExactTypeSize() {
  let exactTypeSize = [];
  exactTypeSize.push(inputExactLength.value);
  exactTypeSize.push(inputExactWidth.value);
  exactTypeSize.push(inputExactWeight.value);
  exactTypeSize.push(inputExactHeight.value);
  localStorage.setItem("exactTypes", JSON.stringify(exactTypeSize));
  exactTypeSize = [];
}

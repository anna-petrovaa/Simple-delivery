document.addEventListener("DOMContentLoaded", () => {
  console.log("Hefgg");

  async function getOrders() {
    try {
      /*const dataResponse = await fetch(
        "https://shift-intensive.ru/api/delivery/order"
      );*/

      const dataResponse = await fetch(
        "https://shift-intensive.ru/api/delivery/points"
      );
      console.log(dataResponse);
      //console.log(dataResponse.json());
      const result = await dataResponse.json();
      //console.log("result", result);
      setTimeout(console.log("resultsetTimeout", result), 7000);
    } catch (error) {
      console.log(error);
    }
  }

  getOrders();
});

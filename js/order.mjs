document.addEventListener("DOMContentLoaded", () => {
  const orderNumber = document.querySelector(".order-number-p");
  const orderStatus = document.querySelector(".order-status-p");
  const orderPoint = document.querySelector(".order-point-p");
  const orderType = document.querySelector(".order-type-p");
  const buttonStatus = document.querySelector(".button-status");
  const buttonMainPage = document.querySelector(".button-mainpage");

  let orderData = JSON.parse(localStorage.getItem("orderData"));
  let order = JSON.parse(localStorage.getItem("order"));

  function renderOrderInfo() {
    if (!orderData) {
      window.location.href = "step2.html";
    }
    let valuesAdress = [
      orderData.order.receiverPoint.name,
      orderData.order.receiverAddress.street,
      orderData.order.receiverAddress.house,
      orderData.order.receiverAddress.apartment,
    ]
      .filter(Boolean)
      .join(" ");
    orderPoint.textContent = valuesAdress;
    orderNumber.textContent = orderData.order._id;
    orderType.textContent = order.option.name;

    if (orderData.order.status == 0) {
      orderStatus.textContent = "Создано";
    }
  }

  function backMainPage(event) {
    event.preventDefault();
    window.location.href = "index.html";
  }

  renderOrderInfo();





  
  buttonMainPage.addEventListener("click", backMainPage);
});

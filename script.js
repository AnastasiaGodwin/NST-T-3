"use strict";
const customerNameInput= document.getElementById('customername');
const orderForm= document.getElementById('request-form');
function handleOrderSubmit(event){
    event.preventDefault();
    const customerName =customerNameInput.value;
    alert("Thank you very much," + customerName +  "!for your order!");
    orderForm.reset();
}

orderForm.addEventListener('submit, handleOrderSubmit');

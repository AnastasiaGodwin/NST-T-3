
const requestForm= document.getElementById('requestForm');
const thankYou= document.getElementById('thankYou');
const closeButton= document.getElementById('closeButton');
const customerNameInput= document.getElementbyId('customername");
                                                 
requestForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let orderHistory= JSON.parse( localStorage.getItem("allOrders")) || [];
    let currentOrderName= customerNameInput.value;
    
    orderHistory.push(currentOrderName);
    localStorage.setItem('allOrders', JSON.stringify(orderHistory));
    
    thankYou.style.display= 'flex';
    requestForm.reset();
});
closeButton.addEventListener('click', function() {
    thankYou.style.display= 'none';
});

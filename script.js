
const requestForm= document.getElementById('requestForm');
const thankYou= document.getElementById('thankYou');
const closeButton= document.getElementById('closeButton');
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    thankYoustule.display= 'flex';
    requestForm.requestFullscreen();
});
closeButton.addEventListener('click', function() {
    thankYou.style.display= 'none';
});

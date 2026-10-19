
const requestForm= document.getElementById('requestForm');
const thankYou= document.getElementById('thankYou');
const closeButton= document.getElementById('closeButton');
requestForm.addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('formSubmitted', 'true');
    thankYou.style.display= 'flex';
    requestForm.reset();
});
closeButton.addEventListener('click', function() {
    thankYou.style.display= 'none';
});

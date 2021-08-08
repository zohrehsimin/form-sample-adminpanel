const submitBtn = document.querySelector('.submit');
const popupModal = document.querySelector('.popup-modal');
const closeBtn = document.querySelector('.close')
submitBtn.addEventListener('click', ()=>{
    popupModal.style.display = 'inline-block'
});
closeBtn.addEventListener('click', ()=>{
    popupModal.style.display = 'none'
})
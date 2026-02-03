const modal = document.getElementById('subscribe-modal'); 
const close = document.querySelector('.modal__close'); 


if(!document.cookie.includes('closed=true')) {
 setTimeout(() => { 
     modal.classList.add("modal_active"); 
}, 2000); 
}


close.addEventListener("click", () => { 
     modal.classList.remove("modal_active"); 
     document.cookie = "closed=true; max-age=3600; path=/";
});



const shareBtn = document.querySelector(".share-btn");
const footer = document.querySelector(".footer");
const footerCard = document.querySelector(".footer-card");
const footerSocial = document.querySelector(".footer-social");


// event listener
addEventListener("DOMContentLoaded", ()=>{
    shareBtn.addEventListener("click",showFooter);
})


// function
function showFooter(){
    footer.classList.toggle("active");
    shareBtn.classList.toggle("active");
    footerCard.classList.toggle("hide");
    footerSocial.classList.toggle("show");


}

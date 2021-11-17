

window.addEventListener('DOMContentLoaded', (event) => {
    init();
});

function init(){
    let cardElement = document.getElementById("card")
    cardElement.addEventListener("click", (e)=>{
        if(cardElement.classList.contains("back")){
            cardElement.classList.add("front");
            cardElement.classList.remove("back");
        }else{
            cardElement.classList.add("back");
            cardElement.classList.remove("front");
        }
    })
}


window.addEventListener('DOMContentLoaded', (event) => {
    init();
});

function init(){
    const cardElement = document.getElementById("card")
    const clickListener = (cardElement =>{
        return ()=>{
            if(cardElement.classList.contains("back")){
                cardElement.classList.add("front");
                cardElement.classList.remove("back");
            }else{
                cardElement.classList.add("back");
                cardElement.classList.remove("front");
            }
        }
    })(cardElement);

    addClickEventListenerToElement(cardElement, clickListener);

    cardElement.addEventListener('animationstart', e=>{
        removeClickEventListenerFromElement(cardElement, clickListener);
    });
    cardElement.addEventListener('animationend', e=>{

        addClickEventListenerToElement(cardElement, clickListener);
    });
}

function addClickEventListenerToElement(el, listener){
    el.addEventListener("click", listener);
}

function removeClickEventListenerFromElement(el, listener){
    el.removeEventListener("click", listener);
}
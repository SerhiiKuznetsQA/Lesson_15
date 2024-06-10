const container = document.querySelector(".js-container")


container.addEventListener("click", handlerGetColor)

function handlerGetColor(event) {
    const color = event.target.dataset.color
    // console.log(event.currentTarget);
    // console.log(event.target);
    //     if (event.target === event.currentTarget) { 
    //         return
    //     }
    // console.log(color);
    // }
    if (!event.target.classList.contains("js-box")) {
        return
    }
    console.log(event.target.dataset.color);

}

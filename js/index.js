const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
    hamburer.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
    closePopup.addEventList("click",() => {
        popup.classList.add("hide-popup");
    });

    window.addEventListener("load", () => {
        setTimeout(() => {
            popup.classList.remove("hide-popup");
        }, 1000);
    });
}
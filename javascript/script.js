let menu = document.querySelector(".menu-section");

document.querySelector("#menu-icon").onclick=() => {
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
}
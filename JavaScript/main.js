const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        navList.classList.add('nav-open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        navList.classList.remove('nav-open');
        menuOpen = false;
    }
});


const navLink = document.querySelectorAll('.nav-link');
let navList = document.querySelector(".nav-list");

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove('nav-open');
        menuBtn.classList.remove("open");
        menuOpen = false;
    })
})
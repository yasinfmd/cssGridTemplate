const hamburgerMenu = document.getElementsByClassName('headerMenuIcon')
let sideBar = document.getElementById('sideBar')
hamburgerMenu[0].addEventListener("click", () => {
    if (sideBar.className === "close") {
        sideBar.classList.remove('close')
    } else if (sideBar.className === "") {
        sideBar.classList.add('close')
    }
})

window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (+width < 768) {
        sideBar.classList.add('close')
    } else {
        // sideBar.classList.remove('close')

    }
})
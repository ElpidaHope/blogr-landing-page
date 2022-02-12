const hamburgerBtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const dropDown = document.querySelector(".desktop-nav");

const product = document.getElementById("product")
const company = document.getElementById("company")
const connect = document.getElementById("connect")

const allDropdown = document.querySelectorAll(".desktop-dropdown")

function addHide(current) {
    let newArray = Array.from(allDropdown).filter(dropDown => dropDown.previousElementSibling !== current
    )

    newArray.forEach(e => {
        e.classList.add("hide")
    })
}


hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.add("hide")
    closeBtn.classList.add("show")
    dropDown.classList.add("show")
})

closeBtn.addEventListener("click", () => {
    hamburgerBtn.classList.remove("hide")
    closeBtn.classList.remove("show")
    dropDown.classList.remove("show")
})


function menuBar(menu) {
    menu.addEventListener("click", e => {
        addHide(menu)
        e.target.nextElementSibling.classList.toggle("hide")
        menu.classList.toggle("rotate")
    })
}

menuBar(product)
menuBar(company)
menuBar(connect)
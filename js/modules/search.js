const searchBar = document.querySelector("main > section > input")
const kruisje = document.querySelector('.kruisje')

searchBar.addEventListener("keyup", () => {
    if (searchBar.value) {
        kruisje.classList.add('kruisjeToggle')
    } else if (!searchBar.value) {
        kruisje.classList.remove('kruisjeToggle')
    }
})
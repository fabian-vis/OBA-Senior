import {
    getData
} from "./api.js"

const searchBar = document.querySelector("main > section > input")
const kruisje = document.querySelector('.kruisje')

export const search = () => {
    let searchTerm = searchBar.value ? searchBar.value : "cursus"

    const cors = "https://cors-anywhere.herokuapp.com/"
    const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
    const key = "8854ebaac6d5b76ab5a25a372d249680"
    const detail = "Default"
    let url = `${cors}${endpoint}${searchTerm}&authorization=${key}&detaillevel=${detail}&output=json`
    getData(url)
}

searchBar.addEventListener("keydown", (e) => {
    // ONLY SEARCHING IF ENTER IS PRESSED
    if (e.code === "Enter") {
        search()
    }
})

searchBar.addEventListener("keyup", () => {
    if (searchBar.value) {
        kruisje.classList.add('kruisjeToggle')
    } else if (!searchBar.value) {
        kruisje.classList.remove('kruisjeToggle')
    }
})

kruisje.addEventListener("click", () => {
    searchBar.value = "";
    kruisje.classList.remove('kruisjeToggle')
})
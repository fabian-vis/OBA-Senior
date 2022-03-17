import {
    getData,
    getData2
} from "./api.js"

export const searchBar = document.querySelector("main > section > input")
const cross = document.querySelector('.cross')

export const search = () => {
    getData()
    getData2()
}

searchBar.addEventListener("keydown", (e) => {
    // ONLY SEARCHING IF ENTER IS PRESSED
    if (e.code === "Enter") {
        search()
    }
})

searchBar.addEventListener("keyup", () => {
    if (searchBar.value) {
        cross.classList.add('crossToggle')
    } else if (!searchBar.value) {
        cross.classList.remove('crossToggle')
    }
})

cross.addEventListener("click", () => {
    searchBar.value = "";
    cross.classList.remove('crossToggle')
    const cors = "https://cors-anywhere.herokuapp.com/"
    const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=classification:informatieboek%20"
    const query = searchBar.value
    const key = "03b058d877ec4276bb63dd1c6e1f3768"
    const secret = "4289fec4e962a33118340c888699438d"
    const detail = "Default"
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`
    getData(url)
})
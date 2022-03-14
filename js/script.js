const url = 'https://zoeken.oba.nl/api/v1/search/?q=%22voeding%22&refine=true&authorization=16c19e6083308c984c452600134989ba&sort=act_dt_asc&output=json' //&branch=OBA%20geuzenveld'
const searchBar = document.querySelector("main > section > input")
const kruisje = document.querySelector('.kruisje')

const data = fetch(url)
    .then(response => response.json())
    .then(data => {
        renderData(data)
        console.log(data)
    })
    /* ------------------------------------------------Gebruiker word op de hoogte gesteld van een error */
    .catch(err => {

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
import {
    render
} from "./render.js"

import {
    errorState
} from "./states.js"

import './search.js'

import {
    searchBar
} from "./search.js"



export const getData = () => {

    const cors = "https://cors-anywhere.herokuapp.com/"
    const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=classification:informatieboek%20"
    const query = searchBar.value
    const key = "03b058d877ec4276bb63dd1c6e1f3768"
    const secret = "4289fec4e962a33118340c888699438d"
    const detail = "Default"
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`

    console.log(url)

    const config = {
        Authorization: `Bearer ${secret}`,
    }
    fetch(url, config)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            render(data)
        })
        .catch((err) => {
            console.log(err)
            errorState()
        })
}
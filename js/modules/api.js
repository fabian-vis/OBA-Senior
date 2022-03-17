import {
    render,
    render2
} from "./render.js"

import {
    errorState,
    hideLoading
} from "./states.js"

import './search.js'

import {
    searchBar
} from "./search.js"

import {
    showFilters
} from "./form.js"


// url API ophalen van de eerste api
export const getData = () => {

    const cors = "https://cors-anywhere.herokuapp.com/"
    const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=classification:informatieboek%20"
    const query = searchBar.value
    const key = "03b058d877ec4276bb63dd1c6e1f3768"
    const secret = "4289fec4e962a33118340c888699438d"
    const detail = "Default"
    let url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`

    const config = {
        Authorization: `Bearer ${secret}`,
    }
    fetch(url, config)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            render(data)
            showFilters(data)
            hideLoading()
        })
        .catch((err) => {
            console.log(err)
            errorState()
        })
}


// url API ophalen van de tweede api
export const getData2 = () => {

    const cors = "https://cors-anywhere.herokuapp.com/"
    const query = searchBar.value
    const secret = "4289fec4e962a33118340c888699438d"
    let url2 = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${query}+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=a57b7bbd1cde2f6fb7ce5b3f2d1d96e0&output=json`


    const config = {
        Authorization: `Bearer ${secret}`,
    }
    fetch(url2, config)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // searchError()
            render2(data)
        })
        .catch((err) => {
            console.log(err)
            errorState()
        })
}